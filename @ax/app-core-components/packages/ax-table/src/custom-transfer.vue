<template>
  <!-- 编辑 dialog -->
  <ax-dialog
    ref="customDialog"
    :visible="flag"
    class="ax_transfer"
    :title="axLang.text('column.title')"
    :loading="isButtonLoading"
    @close="close"
    @okClose="okClose"
  >
    <div class="content">
      <AxTable
        ref="hideTable"
        class="transfer_table"
        :show-index="false"
        :show-menu="false"
        :show-refresh="false"
        :edit-mode="false"
        :head-mode="false"
        :table-data="hideList"
        :key-id="config.key"
        :table-column="hideColumn"
        @selectionChange="selectionChangeLeft"
      ></AxTable>
      <div class="button_module">
        <div class="buttons">
          <ax-button
            class="control_button"
            :disabled="!hideIds.length"
            @click="leftToRight"
          >
            左移&gt;&gt;
          </ax-button>
          <ax-button
            class="control_button"
            :disabled="!showIds.length"
            @click="rightToLeft"
          >
            右移&lt;&lt;
          </ax-button>
        </div>
      </div>

      <AxTable
        ref="showTable"
        v-model="ids"
        class="transfer_table"
        :show-index="false"
        :show-menu="false"
        :show-refresh="false"
        :edit-mode="false"
        :head-mode="false"
        :table-data="showList"
        :table-column="showColumn"
        :key-id="config.key"
        @selectionChange="selectionChangeRight"
      ></AxTable>
      <!-- 按钮模块 -->
      <div class="button_module">
        <div class="buttons">
          <ax-button
            v-show="!mergeShowFlag"
            class="control_button"
            :disabled="!showIds.length"
            :loading="isButtonLoading"
            @click="moveClick('up')"
          >
            上移
          </ax-button>
          <ax-button
            v-show="!mergeShowFlag"
            class="control_button"
            :disabled="!showIds.length"
            :loading="isButtonLoading"
            @click="moveClick('down')"
          >
            下移
          </ax-button>
          <!-- 不连续的话,需要合并 -->
          <ax-button
            v-show="mergeShowFlag"
            class="control_button"
            :loading="isButtonLoading"
            @click="mergeClick('up')"
          >
            向上合并
          </ax-button>
          <ax-button
            v-show="mergeShowFlag"
            class="control_button"
            :loading="isButtonLoading"
            @click="mergeClick('down')"
          >
            向下合并
          </ax-button>
        </div>
      </div>
    </div>
  </ax-dialog>
</template>
<script lang="ts">
import AxButton from '@AxUI/ax-button';
import AxComCore from '@AxUI/ax-com-core';
import AxDialog from '@AxUI/ax-dialog';
import AxMessage from '@AxUI/ax-message';
import { Transfer } from 'element-ui';
import { Component, Model, Prop, Vue, Watch } from 'vue-property-decorator';
import AxTable from './table.vue';

interface Iconfig {
  key: string;
  label: string;
}

@Component({
  name: 'custom-transfer',
  components: {
    [Transfer.name]: Transfer,
    AxButton,
    AxDialog,
    AxTable,
  },
})
export default class CustomTransfer extends Vue {
  /***********测试 test module**************/

  // TODO:
  //   （4）勾选复选框后点击“《”或者“》”左右移动属性位置；复选款可多选；
  // （5）从“隐藏列”移动到“显示列”中的顺序按照点击顺序排列。
  // 例如在属性列中点击的顺序是：类型---纬度---下一级，则移动到“显示列”后依然按照这个顺序排列；

  // （6）在“显示列”中的属性会按照在“显示列”中排列的顺序在表格中显示；退出登录之后，仍然需要按账号记住当前表格的显示方式；

  // （7）在“显示列”选中属性后点击“上移”、“下移”按钮，可以上下移动属性的位置（可多选）；
  // 相应的，在表格中呈现的位置也将发生改变；
  // 优化项：可以拖动文本标签进行上下移动

  // （8）点击  可以全选或者全不选相应表格中的复选框

  // （9）复选框默认不勾选；

  // （10）默认显示全部的表格属性。
  // 当系统有新增列时，将新增列显示到表格中（显示列中的属性也要相应增加）
  // 。同时要在消息中心中提示新增列(消息中心功能待定)；

  // 合并上移

  // （11）在表格中必须有一列显示，否则操作不成功。
  // 当出现此种情况，点击“确定”按钮时弹窗提示用户“必须要选择一列在表格中显示”；

  /***********prop 外面传入**************/

  // TODO:
  //  点击按钮+total+show = FLAG = 真正打开

  /**
   * 子节点数据加载通知方法（传入：(deep: number, data: ITreeData | null) , 表示当前目录层次深度（从 0 开始）和展开的节点数据对象（null 时表示读取根节点层次数据）；返回：异步数据结果处理对象）
   * @returns Promise<AxComCore.ITableColumns[]> 异步返回加载结果数据
   */
  @Prop({ default: undefined })
  public loadColumn?: () => Promise<AxComCore.ITableColumns[]>;
  private loadColumnData() {
    if (!this.loadColumn) {
      return;
    }
    this.loadColumn().then((res: AxComCore.ITableColumns[]) => {});
  }

  // dialog 开关
  @Model('flagChange', { type: Boolean })
  private flag?: boolean;
  @Watch('flag')
  private flagWatch(val: boolean) {
    if (val) {
      this.$nextTick(() => {
        if (!this.showData) {
          return;
        }
        // 生成 showList
        this.showList = this.showData.filter((item) => !item.isHide);
        // 生成 hideList
        this.hideList = this.getHideData(this.showList);
      });
    }
  }

  @Prop({
    default: () => ({
      key: 'name',
      label: 'label',
    }),
  })
  private config?: Iconfig;

  // 所有的
  @Prop({
    default: () => [
      {
        label: '类型',
        name: 'ptype',
        align: 'center',
        isEdit: true,
      },
      {
        label: '二级地区',
        name: 'stype',
        align: 'center',
        isEdit: true,
      },

      {
        label: '中文',
        name: 'zh_CN',
        align: 'center',
        isEdit: true,
      },
      {
        label: '英文',
        name: 'en_US',
        align: 'center',
        isEdit: true,
      },
      {
        label: '下级',
        name: 'chs',
        align: 'center',
        isEdit: true,
      },
      {
        label: '纬度',
        name: 'lat',
        align: 'center',
        isEdit: true,
      },
      {
        label: '经度',
        name: 'lon',
        align: 'center',
        isEdit: true,
      },
      {
        label: '描述',
        name: 'desc',
        align: 'center',
        isEdit: true,
      },
    ],
  })
  private totalData?: any[];

  /**
   * 用户当前显示的
   */
  @Prop({
    default: () => [
      {
        label: '类型',
        name: 'ptype',
        align: 'center',
        isEdit: true,
      },
      {
        label: '中文',
        name: 'zh_CN',
        align: 'center',
        isEdit: true,
      },
      {
        label: '英文',
        name: 'en_US',
        align: 'center',
        isEdit: true,
      },
      {
        label: '下级',
        name: 'chs',
        align: 'center',
        isEdit: true,
      },
      {
        label: '纬度',
        name: 'lat',
        align: 'center',
        isEdit: true,
      },
      {
        label: '描述',
        name: 'desc',
        align: 'center',
        isEdit: true,
      },
    ],
  })
  private showData?: any[];

  /***********通用工具**************/
  private axLang = AxComCore.getAxLang();
  private isButtonLoading: boolean = false;

  /***********内部**************/

  private mergeShowFlag: boolean = false;
  private titles = [
    this.axLang.text('table.column.hide'),
    this.axLang.text('table.column.show'),
  ];

  /**
   * 隐藏列
   */
  private hideIds: string[] = [];
  private hideColumn: any[] = [];

  // 显示列相关
  private ids: string[] = [];

  private showIds: string[] = [];
  private showIdsOrigin: string[] = [];
  private showColumn: any[] = [];
  private showList: any[] = [];
  private hideList: any[] = [];

  // 如果有整体的话 和 showList,就算出来
  private getHideData(showList: any[]): AxComCore.ITableColumns[] {
    if (!this.totalData || !this.config) {
      return [];
    }
    const key = this.config.key;
    const showMap = new Map();
    // 添加 Map 数据
    for (const item of showList) {
      showMap.set(item[key], item);
    }
    const hideList = [];
    // 选出和 totalData 一样的
    for (const jtem of this.totalData) {
      const target = showMap.get(jtem[key]);
      // 如果值是存在的话
      if (!target) {
        hideList.push(jtem);
      }
    }
    return hideList;
  }

  /**
   * 是否是连续的
   * @params value 原始的
   * @params checkedKeys 勾选的
   * @return 布尔值
   */
  private isContinue(value: string[], checkedKeys: string[]): boolean {
    // 生成一个 Map 集合,  值:索引
    const tempMap = new Map();
    for (let index = 0; index < value.length; index++) {
      const element = value[index];
      tempMap.set(element, index);
    }
    // 获取 index 的集合
    const indexList = [];
    for (const iterator of checkedKeys) {
      indexList.push(tempMap.get(iterator));
    }

    // 记录第一个,第二个减去第一个是否等于index,否则就是不连续
    let preNum = 0;
    for (let jndex = 0; jndex < indexList.length; jndex++) {
      // 这个是值
      const currentNum = indexList[jndex];
      // 记录第一个值
      if (jndex === 0) {
        preNum = currentNum;
      } else {
        // 第二个减去第一个是否等于index,不是的话要结束哦
        if (currentNum - preNum !== jndex) {
          return false;
        } else {
          continue;
        }
      }
    }
    // 如无意外,最后是返回 true 的
    return true;
  }

  /***********勾选相关**************/

  // 左边勾选的时候
  private selectionChangeLeft(hideIds: string[]) {
    this.hideIds = hideIds;
  }

  // 右边勾选的时候
  private selectionChangeRight(showIds: string[]) {
    // 如果是正在进行点击的话
    if (this.isButtonLoading) {
      return;
    }
    // 拿到最新的 showMap 的 key
    const totalShowIds = (this.$refs.showTable as AxTable).getTotalIds();
    // 最原始的排序
    this.showIdsOrigin = showIds;
    // 正确排序后
    this.showIds = this.checkedKeysCorrect(showIds);
    // 对比勾选的,如果是连续的话,就显示 "上下移动" 按钮
    if (!this.showIds.length) {
      return;
    }
    if (this.showIds.length <= 1) {
      this.mergeShowFlag = false;
    } else if (this.showIds.length > 1) {
      // 如果勾选多个
      if (this.isContinue(totalShowIds, this.showIds)) {
        // 如果是连续,更换按钮名称,直接整体上移
        this.mergeShowFlag = false;
      } else {
        this.mergeShowFlag = true;
      }
    }
  }

  /**
   * 正序 点击后重新正确排序
   */
  private checkedKeysCorrect(origin: string[]) {
    if (!this.config) {
      return [];
    }
    //     要拿到对应的 indexList
    const indexList = [];
    const attr = this.config.key;

    for (const item of origin) {
      const totalKeys = (this.$refs.showTable as AxTable).getTotalIds();
      const index = totalKeys.findIndex((jtem) => jtem === item);
      indexList.push(index);
    }
    //  然后排序 indexList
    indexList.sort((a, b) => a - b);
    // 通过 tableColumnLoad 获取对应的值
    const tableValues = (this.$refs.showTable as AxTable).getTotalValues();
    return indexList.map((item) => tableValues[item][attr]);
  }

  /**
   * 重置后,勾选之前的值
   */
  private showChecked() {
    if (this.isButtonLoading) {
      // 重新勾选上
      for (const iterator of this.showIdsOrigin) {
        (this.$refs.showTable as AxTable).setDataCheck(iterator);
      }
      // 关闭 loading
      this.isButtonLoading = false;
    }
  }

  /***********按钮相关**************/

  // 左边 => 右边
  private leftToRight() {
    if (!this.config) return;
    for (const item of this.hideIds) {
      // const target = this.hideMap.get(item);
      const target = (this.$refs.hideTable as AxTable).getDataById(item);
      if (target) {
        // 加入 showMap
        (this.$refs.showTable as AxTable).addData(target);
        // 删除
        (this.$refs.hideTable as AxTable).delete(item);
      }
    }
    // 定义 showList hideList
    this.showList = (this.$refs.showTable as AxTable).getTotalValues();
    this.hideList = (this.$refs.hideTable as AxTable).getTotalValues();
  }

  // 右边 => 左边
  private rightToLeft() {
    if (!this.config) return;
    for (const item of this.showIds) {
      // 拿到 hideMap 数据
      const target = (this.$refs.showTable as AxTable).getDataById(item);
      if (target) {
        // 加入 hide
        (this.$refs.hideTable as AxTable).addData(target);
        // 删除 show
        (this.$refs.showTable as AxTable).delete(item);
      }
    }
    // 定义 showList hideList
    this.showList = (this.$refs.showTable as AxTable).getTotalValues();
    this.hideList = (this.$refs.hideTable as AxTable).getTotalValues();
  }

  /**
   * 向上向下移动
   * @params value 全部的数据也就是v-model的
   * @params checkedKeys 勾选中的值
   * @params str 是向上还是向下,默认向上 'up'
   */
  private move(value: string[], checkedKeys: string[], str: string) {
    // 判断是要拿最前还是最后
    let defineKey: string = '';
    if (str === 'up') {
      defineKey = checkedKeys[0];
    } else if (str === 'down') {
      defineKey = checkedKeys[checkedKeys.length - 1];
    } else {
      defineKey = checkedKeys[0];
    }

    // 知道它的索引
    let index = value.findIndex((item: any) => item === defineKey);
    if (str === 'up') {
      // 如果是最头部的话
      index <= 0 && index--;
    } else if (str === 'down') {
      // 如果是最尾部的话
      index >= value.length - 1 ? index++ : (index = index + 2);
      defineKey = checkedKeys[checkedKeys.length - 1];
    } else {
      index <= 0 && index--;
    }

    // 深拷贝 value
    const tempValue = JSON.parse(JSON.stringify(value));
    // 添加 数据
    tempValue.splice(index, 0, checkedKeys);
    // 生成一个 Map 集合
    const tempMap = new Map();
    for (const item of tempValue) {
      tempMap.set(item, item);
    }
    // 删除 checkedKeys 的数据
    for (const item of checkedKeys) {
      tempMap.delete(item);
    }
    //  生成已经删除的数组
    const temp: any = [...tempMap.values()];
    // 扁平化
    return temp.flat();
  }

  /**
   * 向上向下合并
   * @params value 全部的数据 key
   * @params checkedKeys 勾选中的值
   * @params str 是向上还是向下,默认向上 'up'
   */
  private merge(value: any[], checkedKeys: string[], str: string) {
    // 判断是要拿最前还是最后
    let defineKey: string = '';
    if (str === 'up') {
      defineKey = checkedKeys[0];
    } else if (str === 'down') {
      defineKey = checkedKeys[checkedKeys.length - 1];
    } else {
      defineKey = checkedKeys[0];
    }
    // 知道它的索引
    const index = value.findIndex((item: any) => item === defineKey);
    // 深拷贝 value
    const tempValue = JSON.parse(JSON.stringify(value));
    // const tempValue = value;
    // 替换第一个
    tempValue.splice(index, 1, checkedKeys);
    // 生成一个 Map 集合
    const tempMap = new Map();
    for (const item of tempValue) {
      tempMap.set(item, item);
    }
    // 删除 checkedKeys 的数据
    for (const item of checkedKeys) {
      tempMap.delete(item);
    }
    //  生成已经删除的数组
    const temp: any = [...tempMap.values()];
    // 扁平化
    return temp.flat();
  }

  /**
   * 移动点击
   */
  private moveClick(str: string) {
    // 拿到所有显示列的键
    const keys = (this.$refs.showTable as AxTable).getTotalIds();
    let showRes = [];
    if (str === 'up') {
      showRes = this.move(keys, this.showIds, str);
    } else if (str === 'down') {
      showRes = this.move(keys, this.showIds, str);
    } else {
      showRes = this.move(keys, this.showIds, 'up');
    }
    this.isButtonLoading = true;
    // 重新设置
    this.showList = showRes.map((item: string) =>
      (this.$refs.showTable as AxTable).getDataById(item)
    );

    // 重新勾选上
    this.$nextTick(() => {
      this.showChecked();
    });
  }

  /**
   * 合并点击
   */
  private mergeClick(str: string) {
    // 拿到所有显示列的键
    const keys = (this.$refs.showTable as AxTable).getTotalIds();
    let showRes = [];

    if (str === 'up') {
      showRes = this.merge(keys, this.showIds, str);
    } else if (str === 'down') {
      showRes = this.merge(keys, this.showIds, str);
    } else {
      showRes = this.merge(keys, this.showIds, 'up');
    }
    this.isButtonLoading = true;
    // 重新设置
    this.showList = showRes.map((item: string) =>
      (this.$refs.showTable as AxTable).getDataById(item)
    );
    // 合并按钮消失
    this.mergeShowFlag = false;
    // 重新勾选上
    this.$nextTick(() => {
      this.showChecked();
    });
  }

  /***********暂时没用上的**************/

  // 合并上
  private mergeUp() {
    // TODO: 改 showMap ,最终要的是 showList
    // TODO: showIds 的顺序是乱的 , showList 是正的
    // 获取当前列数据 总的数据 getTotalIds()
    const listValue = (this.$refs.showTable as AxTable).getTotalIds();
    // 获取选中的数据,生成 Map
    const selectedSet = new Set();
    // 遍历把选中的数据增加到集
    for (const item of this.showIds) {
      selectedSet.add(item);
    }
    // 创建结果数据
    const res = [];

    // 定义开始标识
    let startted = false;
    // 记录首次插入数据的位置
    const index = 0;
    // 遍历右边所有的数据
    for (const item of listValue) {
      // 判断是否在选择中存在
      if (selectedSet.has(item)) {
        // 判断是否是开始位置
        if (!startted) {
          // 设置开始标识
          startted = true;
          // TODO:
          // 记录当前的位置
        }
        // 没有开始,作为第一个数据,增加所有的数据到数组
        res.push(item);
      } else {
        // 不是选中的数据
        res.push(item);
      }
    }
    // 重新渲染,排序
    this.showList = res.map((item) => {
      return (this.$refs.showTable as AxTable).getDataById(item);
    });
    return res;
  }

  // 合并下
  private mergeDown() {
    // TODO: 改 showMap ,最终要的是 showList
    // 获取当前列数据 总的数据 getTotalIds()
    const listValue = (this.$refs.showTable as AxTable).getTotalIds();
    // 获取选中的数据
    const selectedSet = new Set();
    // 遍历把选中的数据增加到集
    for (const item of this.showIds) {
      selectedSet.add(item);
    }
    // 创建结果数据
    const res = [];
    // 定义开始标识
    let endLen = 0;
    // 遍历全部的数据
    for (const item of listValue) {
      // 判断是否在选择中存在
      if (selectedSet.has(item)) {
        // 判断是否是开始位置
        endLen++;
        // 如果 是最后一个的话,endLen 的长度的话
        if (endLen === this.showIds.length) {
          res.push(...this.showIds);
        }
      } else {
        // 不是选中的数据
        res.push(item);
      }
    }
    // 重新渲染,排序
    this.showList = res.map((item) => {
      return (this.$refs.showTable as AxTable).getDataById(item);
    });
    return res;
  }

  /***********public 外部方法**************/

  /***********emit 分发方法**************/
  /**
   * 窗口关闭时候
   */
  private close(event: Event) {
    this.$emit('flagChange', false);
    this.isButtonLoading = false;
  }
  /**
   * 确认 关闭
   */
  private okClose(e: any) {
    //  要求:  在表格中必须有一列显示，否则操作不成功。当出现此种情况，点击“确定”按钮时弹窗提示用户“必须要选择一列在表格中显示”
    // 拿到所有显示列的键
    const keys = (this.$refs.showTable as AxTable).getTotalIds();
    const values = (this.$refs.showTable as AxTable).getTotalValues();
    if (!keys.length) {
      AxMessage.alert(this.axLang.text('table.column.error'));
      return;
    }
    this.$emit('confirm', keys, values);
    // 关闭窗口
    this.$emit('flagChange', false);
  }

  /***********生命周期**************/
  private mounted() {}

  created(): void {
    this.hideColumn = [
      {
        label: '隐藏列',
        name: this.config ? this.config.label : 'label',
        align: 'center',
      },
    ];
    this.showColumn = [
      {
        label: '显示列',
        name: this.config ? this.config.label : 'label',
        align: 'center',
      },
    ];
  }
}
</script>
