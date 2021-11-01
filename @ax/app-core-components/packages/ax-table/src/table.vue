<template>
  <div ref="ax_table" class="ax_table" onselectstart="return false;">
    <el-table
      ref="elTable"
      v-loading="loading"
      v-tableLoadMore="tableLoadMore"
      border
      fit
      resizable
      class="el_table"
      highlight-current-row
      :row-key="keyId"
      :data="tableDataLoad"
      :empty-text="axLang.text('table.head.empty')"
      :tree-props="treeProps"
      :row-class-name="rowClassName"
      :row-style="rowStyle"
      :cell-style="cellStyle"
      @row-click="rowClick"
      @row-dblclick="rowdblClick"
      @cell-dblclick="celldblclick"
      @selection-change="selectionChange"
    >
      <!--region 序号-->
      <el-table-column
        v-if="showIndex"
        type="index"
        :width="styleTransform.remToPx(4.3)"
        :label="axLang.text('table.head.index')"
        align="center"
      ></el-table-column>
      <!--endregion-->

      <!--region 多选-->
      <el-table-column
        v-if="boxType === tableBoxType.CHECKBOX"
        :label="axLang.text('table.head.selection.checkbox')"
        type="selection"
        :width="styleTransform.remToPx(3.6)"
        :selectable="rowSelectableCheckbox"
        align="center"
      ></el-table-column>
      <!--endregion-->

      <!--region 单选-->
      <el-table-column
        v-if="boxType === tableBoxType.RADIO"
        :label="axLang.text('table.head.selection.radio')"
        :width="styleTransform.remToPx(3.6)"
        align="center"
      >
        <!-- 单元格 -->
        <template slot-scope="scope">
          <AxRadio
            v-model="radioSelectedCurrent"
            style="width: 100%"
            :label="scope.row[keyId]"
            :disabled="rowSelectDisabled.includes(scope.row[keyId])"
            class="radio_show"
            hide-label
            @change="radioClick(scope.row[keyId])"
          ></AxRadio>
        </template>
      </el-table-column>
      <!--endregion-->

      <!--region 空-->
      <el-table-column
        v-if="!tableColumn.length"
        align="center"
      ></el-table-column>
      <!--endregion-->

      <!--region 动态列-->
      <!--      :fixed="item.fixed"-->
      <el-table-column
        v-for="(item, index) in tableColumnLoad"
        :key="index"
        :show-overflow-tooltip="
          !item.isSelect && !item.isEnable && !item.hideTooltip
        "
        :width="styleTransform.remToPx(item.width)"
        :min-width="styleTransform.remToPx(item.minWidth)"
        :label="item.label"
        :align="item.align"
      >
        <!--region 头部-->
        <template slot="header" slot-scope="scope">
          <table-head
            :show-menu="showMenu"
            :head-mode="headMode && !!item.isRange"
            :scope="scope"
            :column="item"
            @click.native="headSortClick(scope, item)"
            @headIconClick="headIconClick"
          ></table-head>
        </template>
        <!--endregion-->

        <!--region 单元格-->
        <template slot-scope="scope">
          <!--region 上移下移-->
          <div v-if="item.isMove" class="move_button">
            <ax-button
              class="move_button_item"
              @click="moveButton(scope, MoveDirType.UP)"
            >
              <!-- &#xe63d; 上 -->
              <i class="iconfont">&#xe63d;</i>
            </ax-button>

            <ax-button
              class="move_button_item"
              @click="moveButton(scope, MoveDirType.DOWN)"
            >
              <!--&#xe63e; 下 -->
              <i class="iconfont">&#xe63e;</i>
            </ax-button>
          </div>
          <!--endregion-->

          <!--region 选择框-->
          <div v-else-if="item.isSelect">
            <el-checkbox v-model="scope.row[item.name]"></el-checkbox>
          </div>
          <!--endregion-->

          <!--region 自定义渲染器-->
          <div v-else-if="item.render">
            <cell-render
              :vnodes="item.render(scope.row[item.name], scope.row)"
            ></cell-render>
          </div>
          <!--endregion-->

          <!--region 是否是启用状态-->
          <div v-else-if="item.isEnable" class="col_enable">
            <i
              class="i_cc"
              :class="[`i_cc_${!!scope.row[item.name] ? 'right' : 'wrong'}`]"
            ></i>
          </div>
          <!--endregion-->

          <!--region 普通列-->
          <edit-cell
            v-else
            :ref="`${scope.column[keyId]}_row_${scope.$index}`"
            :key-id="keyId"
            :index="index"
            :no-edit-ids="noEditIds"
            :edit-mode="editMode"
            :scope="scope"
            :column="item"
            :editrowconfig="editrowconfig"
            :total-column="totalColumn"
            :tip-offset="item.editOffset"
            :align="item.align"
            @cellLinkClick="cellLinkClick"
            @cellBlur="cellBlur"
            @cellDbClick="cellDbClick"
          ></edit-cell>
          <!--endregion-->
        </template>
        <!--endregion-->
      </el-table-column>
      <!--endregion-->

      <!--region 操作栏-->
      <el-table-column
        v-if="operation && operation.list.length"
        :width="styleTransform.remToPx(operation.width || 4.5)"
        :label="axLang.text('table.head.operate')"
        align="center"
      >
        <!--region 头部-->
        <template slot="header" slot-scope="scope">
          <div class="table_head">
            <span class="table_head_text">{{ scope.column.label }}</span>
          </div>
        </template>
        <!--endregion-->
        <div
          slot-scope="scope"
          class="table_operate"
          :class="[`table_operate_${operation.align || 'left'}`]"
        >
          <template v-for="(operate, index) in operation.list">
            <ax-link
              v-if="operate.isIcon"
              v-show="!operate.hidden || !operate.hidden(scope.row)"
              :key="`icon_${index}`"
              type="primary"
              :disabled="operate.disabled && operate.disabled(scope.row)"
              :icon="getOperateText(operate.value, scope.row)"
              @click="operate.click(scope.row)"
            ></ax-link>
            <ax-link
              v-if="!operate.isIcon"
              v-show="!operate.hidden || !operate.hidden(scope.row)"
              :key="`button_${index}`"
              type="primary"
              :disabled="operate.disabled && operate.disabled(scope.row)"
              @click="operate.click(scope.row)"
            >
              {{ getOperateText(operate.value, scope.row) }}
            </ax-link>
          </template>
        </div>
      </el-table-column>
      <!--endregion-->

      <!--region 刷新-->
      <el-table-column
        v-if="showRefresh"
        :width="styleTransform.remToPx(2.85)"
        align="center"
      >
        <template slot="header">
          <div
            class="table_refresh"
            :class="[loading ? 'refresh_rotate' : '']"
            @click="refreshClick"
          >
            <i class="el-icon el-icon-refresh"></i>
          </div>
        </template>
      </el-table-column>
      <!--endregion-->
    </el-table>
    <!-- 传入有"isHide"" -->
    <!-- <custom-transfer
      v-if="enableHeaderCustom"
      v-model="transferFlag"
      :totalData="transferTotalData"
      :showData="tableColumnLoad"
      @confirm="transferConfirm"
    ></custom-transfer>-->
  </div>
</template>

<script lang="ts">
import { AxDomUtils, AxStyleUtils } from '@ax/app-core-framework';
import AxButton from '@AxUI/ax-button';
import AxComCore, { ITableOperationValueFunc, sleep } from '@AxUI/ax-com-core';
import { TLangComKey } from '@AxUI/ax-com-core/locale/zh_CN';
import AxLink from '@AxUI/ax-link';
import AxMessage from '@AxUI/ax-message';
import AxRadio from '@AxUI/ax-radio';
import { Checkbox, Loading, Table, TableColumn } from 'element-ui';
import { CreateElement, VNode } from 'vue';
import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator';
import CustomTransfer from './custom-transfer.vue';
import EditCell from './edit-cell.vue';
import { TableHandler } from './table-core';
import TableHead from './table-head.vue';

/**************方法**************/
let scrollTopTemp = 0;
// 滚动到底的加载指令
Vue.directive('tableLoadMore', {
  bind(el: any, binding: any) {
    const eleWrapper = el.querySelector('.el-table__body-wrapper');
    eleWrapper.addEventListener('scroll', () => {
      // 如果是打横的话
      if (Math.abs(scrollTopTemp - eleWrapper.scrollTop) < 1) {
        return;
      }
      scrollTopTemp = eleWrapper.scrollTop;
      // 间距标志，小于这个值开始加载
      const sign = 15;
      // 获取当前距离
      const dis =
        eleWrapper.scrollHeight -
        eleWrapper.scrollTop -
        eleWrapper.clientHeight;
      if (dis < sign) {
        binding.value();
      }
    });
  },
});

// table使用到了Element的loading指令
Vue.use(Loading);

@Component({
  components: {
    [Checkbox.name]: Checkbox,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    AxButton,
    AxLink,
    AxRadio,
    CustomTransfer,
    EditCell,
    TableHead,
    // 单元格VNode渲染器
    CellRender: {
      functional: true,
      render(h: CreateElement, ctx: any): VNode {
        return ctx.props.vnodes;
      },
    },
  },
  model: {
    // 设置 v-model 对应的数据及方法
    prop: 'ids',
    event: 'idsChange',
  },
})
export default class AxTable extends Vue {
  //#region Props
  // table 的列数据 column
  @Prop({
    default: () => [
      {
        label: '名称',
        name: 'name',
        align: 'center',
        isEdit: true,
        isRange: true,
        isHide: false,
        isLink: true,
        isMove: false,
      },
      {
        label: '年纪',
        name: 'age',
        align: 'center',
        isEdit: true,
      },
    ],
  })
  private tableColumn?: AxComCore.ITableColumns[];

  // 传入的表头,如果存在的话,就是以这个作为标准,否则的话
  @Prop({ default: () => [] })
  private columnList?: string[];

  // 操作栏配置
  @Prop({
    default: (): AxComCore.ITableOperation => ({
      list: [],
    }),
  })
  private operation?: AxComCore.ITableOperation;

  // table 的数据
  @Prop({
    default: () => [],
  })
  private tableData?: any[];

  // 编辑行配置
  @Prop({ default: undefined })
  private editrowconfig?: any;

  // 每条数据的行标识,唯一标识
  @Prop({ default: 'id' })
  private keyId!: string;

  // 某些行的数据是不能修改的,传入ids
  @Prop({ default: () => [] })
  private noEditIds?: string[];

  // 自定义列头组件显示与否,默认 true
  @Prop({ default: true, type: Boolean })
  private enableHeaderCustom?: boolean;

  // 序号显示与否,默认 true
  @Prop({ default: true, type: Boolean })
  private showIndex?: boolean;

  // 刷新显示与否,默认 true
  @Prop({ default: true, type: Boolean })
  private showRefresh?: boolean;

  // 行选择类型
  @Prop({ default: AxComCore.TableBoxType.CHECKBOX })
  private boxType?: string;

  // 头部多选按钮显示与否,默认 false
  @Prop({ default: false, type: Boolean })
  private showMenu?: boolean;

  // 加载等待
  @Prop({ default: false, type: Boolean })
  private loading?: boolean;

  // 高度
  @Prop({ default: '20rem' })
  private height?: string | number;

  // 是否开启双击行内编辑模式
  @Prop({ default: true, type: Boolean })
  private editMode?: boolean;

  // 是否开启头部功能模式
  @Prop({ default: true, type: Boolean })
  private headMode?: boolean;

  // 行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。
  @Prop({ default: '' })
  private rowClassName?: (value: { row: any; rowIndex: number }) => string;

  // 行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。
  @Prop({ default: () => ({}) })
  private rowStyle?: (value: { row: any; rowIndex: number }) => object;

  // 行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。
  @Prop({ default: () => ({}) })
  private cellStyle?: (value: {
    row: any;
    column: any;
    rowIndex: number;
    columnIndex: number;
  }) => object;

  // 选中的id
  @Prop({ default: undefined })
  public ids?: any;

  // 获取全部数据
  @Prop({ default: undefined })
  public loadColumn?: () => Promise<any[]>;

  /**
   * 传入的高度
   */
  @Prop({ default: () => [] })
  private sortOrder?: { k: string; v: 'ASC' | 'DESC' }[];

  // 是否开启头部功能模式
  @Prop({
    default: () => ({ children: 'children', hasChildren: 'hasChildren' }),
    type: Object,
  })
  private treeProps?: AxComCore.TableTreeProps;

  // 单选或多选时不可选行的唯一标识数组
  @Prop({ default: () => [], type: Array })
  private rowSelectDisabled!: any[];

  // 单选时的默认选中
  @Prop({
    default: null,
  })
  private radioSelectedDefault?: any;

  @Prop({ type: Object })
  private pageConfig?: AxComCore.TablePageConfig;

  @Prop({ type: Function })
  private pageLoader?: AxComCore.TablePageLoader;
  //#endregion

  //#region Watch
  @Watch('customFlag')
  private customFlagWatch(val: any) {
    this.transferFlagChange();
  }

  /**
   * 数据发生变化时候,触发
   */
  @Watch('tableData')
  private tableDataWatch(val: any) {
    this.createNewMap();
    // 只执行一次
    if (this.changeHeadTdFirst) {
      this.changeHeadTdWidth();
      // 开关关闭
      this.changeHeadTdFirst = false;
    }
  }
  //#endregion

  //#region Emit

  /**
   * 单元格双击
   * @param row
   * @returns {any}
   */
  @Emit()
  private cellDbClick(row: any) {
    return row;
  }
  //#endregion

  //#region Computed

  // { k: 'ptype', v: "ASC" }
  private get rangeList(): AxComCore.ITableSort[] {
    if (!this.sortOrder) {
      return [];
    }
    return this.sortOrder.map((item) => item);
  }

  /**
   * tableColumn 一旦发生变化,往 tableColumn 追加属性 ASC 和 DESC
   * 去除不显示的字段
   */
  private get tableColumnLoad(): AxComCore.ITableColumnsLoaded[] {
    if (!this.tableColumn || !this.tableColumn.length) {
      return [];
    }
    return this.tableColumn
      .filter((item) => !item.isHide)
      .map(
        (item): AxComCore.ITableColumnsLoaded => ({
          ...item,
          ASC: false,
          DESC: false,
          align: item.align ?? 'center',
        })
      );
  }

  /**
   * 全部的列字段
   */
  private get totalColumn(): string[] {
    if (!this.tableColumn || !this.columnList) {
      return [];
    }
    let totalList: string[] = [];
    // 如果没有传入 columnList,就返回 tableColumn 生成的 list
    !this.columnList.length
      ? (totalList = this.tableColumn.map((item) => item.name))
      : (totalList = this.columnList);
    // 更新到表格处理器中
    this.handler.setColumn(totalList);
    return totalList;
  }
  //#endregion

  //#region Data

  /**************原本 data**************/

  // TODO
  private tableBoxType = AxComCore.TableBoxType;
  private axLang = AxComCore.getAxLang();
  private correctIds: string[] = [];
  private customFlag: boolean = false;
  private MoveDirType = AxComCore.MoveDirType;

  // TODO
  private rowClickIds: string[] = [];
  private selectionIds: string[] = [];
  private tableDataLoad: any[] = [];

  // 单选框信息
  private radioSelectedCurrent: any = null;

  // 改变头部td的宽度
  private changeHeadTdFirst = true;

  // 移动行标记
  private isMoveRow = false;

  // 移动行选择
  private MoveRowSelection: string[] = [];

  // 样式处理工具类
  private styleTransform = AxStyleUtils;

  // 当某一行被点击时会触发该事件
  private rowClickFlag: boolean = false;

  // 内容变化标记
  private transferFlag: boolean = false;

  // 内容变化总数
  private transferTotalData: any[] = [];

  // 行双击计数器
  private rowClickTimer: any = null;

  // 分页数据
  private pageData = {
    page: 1,
    loadQueue: Promise.resolve(),
  };
  //#endregion

  //#region Methods
  /**
   * 点击选择框,不变
   * @param key 和单选框绑定的值，行的唯一标识，默认row[key]
   */
  private radioClick(key: any) {
    this.radioSelectedCurrent = key;
  }

  /**
   * 获取操作显示文本
   * @param value
   * @param row
   * @return {string}
   */
  private getOperateText(
    value: string | ITableOperationValueFunc,
    row: any
  ): string {
    return typeof value === 'function' ? value(row) : value;
  }

  /**
   * 修改表头宽度
   * @returns {boolean}
   */
  private changeHeadTdWidth(): boolean {
    setTimeout(() => {
      const textDoms = this.$el.querySelectorAll('.table_head_text');

      const headerColDoms = this.$el.querySelectorAll(
        '.el-table__header>colgroup>col'
      );
      const bodyColDoms = this.$el.querySelectorAll(
        '.el-table__body>colgroup>col'
      );
      const bodyTable = this.$el.querySelector('.el-table__body');

      let totalWidth: number = 0;
      const headerColMap = new Map();
      const bodyColMap = new Map();
      for (const item of headerColDoms) {
        //  记录 col 的 map
        headerColMap.set((item.attributes as any).name.value, item);
      }
      for (const item of bodyColDoms) {
        //  记录 col 的 map
        bodyColMap.set((item.attributes as any).name.value, item);
      }
      // 检测是否需要调整宽度
      for (const item of textDoms) {
        const el = item as HTMLElement;
        // 获取宽度
        const width = (el as HTMLElement).offsetWidth;
        totalWidth += width + 16;
      }
      if (
        totalWidth + 60 + 50 + 40 <
        (this.$refs.elTable as any).$el.offsetWidth
      ) {
        return;
      }

      for (const item of textDoms) {
        const el = item as HTMLElement;
        // 获取宽度
        const width = (el as HTMLElement).offsetWidth;
        // 获取 祖宗元素 th
        const th = AxDomUtils.getDomParent(
          el,
          undefined,
          undefined,
          undefined,
          'th'
        );
        if (th === undefined) {
          return;
        }
        // 获取他的类名
        const classname = th.classList[0];
        // 找到 col 目标
        const target = headerColMap.get(classname);
        // 更改他的 width
        target.width = width + 16 + '';
        // 修改 body > col 的 width
        bodyColMap.get(classname).width = target.width;
      }
    }, 200);
    return true;
  }

  /**
   * 整条数据上移下移
   */
  private moveButton(scope: AxComCore.ITableMove, dir?: AxComCore.MoveDirType) {
    if (!this.keyId) {
      return;
    }
    let targetIndex = 0;
    if (dir === AxComCore.MoveDirType.UP) {
      if (scope.$index <= 0) {
        AxMessage.notify(this.axLang.text('table.move.up.warning'));
        return;
      }
      targetIndex = scope.$index - 1;
    } else if (dir === AxComCore.MoveDirType.DOWN) {
      if (scope.$index >= this.tableDataLoad.length - 1) {
        AxMessage.notify(this.axLang.text('table.move.down.warning'));
        return;
      }
      targetIndex = scope.$index + 1;
    }
    const origin = this.tableDataLoad[scope.$index];
    const target = this.tableDataLoad[targetIndex];
    if (!target) {
      AxMessage.notify(this.axLang.text('table.move.nofound'));
      return;
    }
    const self = this;

    /* 交换数据位置 */
    function changeTableRow() {
      // 目标 变成 现在的
      self.tableDataLoad[targetIndex] = origin;
      // 现在的 变成 目标
      self.tableDataLoad[scope.$index] = target;
      // 重置 tableColumnLoad
      self.tableDataLoad = [...self.tableDataLoad];
      // 设置 rowclickid
      self.rowClickIds = [origin[self.keyId as string]];
      self.idsLoad();
      // 设置移动行标记
      self.isMoveRow = true;
      self.MoveRowSelection = self.selectionIds;
      // 提示语言
      AxMessage.notify(
        self.axLang.text(`table.move.${dir}.success` as TLangComKey)
      );
    }

    /**
     * 行移动 emit
     * @parmas row 某一行数据
     * @parmas index  目标是第几个
     * @parmas id    唯一标识
     * @parmas dir    状态 上移动/下一栋
     * @parmas changeTableRow   执行函数 Function
     */
    const targetData: AxComCore.IMoveRow = {
      row: target,
      index: targetIndex,
      id: target[this.keyId],
    };
    const originData: AxComCore.IMoveRow = {
      row: origin,
      index: scope.$index,
      id: origin[this.keyId],
    };
    this.$emit('moveRow', targetData, originData, changeTableRow);
  }

  /**
   * 滚动条拉到最低,emit 回调
   */
  private tableLoadMore() {
    // 有分页加载器的话加载下一页
    if (this.pageConfig && this.pageLoader) {
      // 设置到加载队列中，防止同时发出不同页码的请求
      this.pageData.loadQueue = this.pageData.loadQueue.then(() => {
        return this.pageLoad();
      });
    }
  }

  /**
   * emit 分发 只修改过的数据,以键值对的形式,包含 keyId
   * @param self 单元格input组件的this,里面包括ref,
   * @param refName 表单的名称,
   * @param attr 当前编辑是对应哪个table的属性,
   */
  private cellBlur(self: AxComCore.ITableInput, refName: string, attr: string) {
    // 存儲有修改標志的 editcell 組件的 keyId
    (this.correctIds as any[]).push(refName);
    this.$emit('cellBlur', self, refName, attr);
  }

  /**
   * 当某一行被双击,会触发该事件
   */
  private celldblclick(row: any, column: any, cell: any, event: any) {
    if (!this.tableColumn) {
      return;
    }
    // 要找到 prop,然后传出去
    const labelValue = column.label;
    const tableColumnTarget = this.tableColumn.find(
      (item) => labelValue === item.label
    );
    // 点击了  index, selection 等
    if (!tableColumnTarget) {
      // 如果点击的是 selection ,就不要传递下去了
      if (labelValue === this.axLang.text('table.head.selection.checkbox'))
        return;
      this.$emit('celldblclick', labelValue);
      return;
    }
    const name = tableColumnTarget.name;
    /**
     * @return 返回 name 名称
     */
    this.$emit('celldblclick', name);
  }

  /**
   * 当某一行被双击,会触发该事件
   */
  private rowdblClick(row: any, column: any, event: any) {
    if (!this.tableColumn) {
      return;
    }
    // 要找到 prop,然后传出去
    const labelValue = column.label;

    // 如果是序号的话,就返回吧
    if (column.type === 'selection') {
      return;
    }
    const tableColumnTarget = this.tableColumn.find(
      (item) => labelValue === item.label
    );
    // 如果找不到的话
    if (!tableColumnTarget) {
      /**
       * @return 返回 labelValue
       */
      this.$emit('row-dblclick', labelValue);
    } else {
      const name = tableColumnTarget.name;
      /**
       * @return 返回 name 名称
       */
      this.$emit('row-dblclick', name);
    }
  }

  /**
   * 行单击
   * @param row
   * @param column
   * @param event
   */
  private rowClick(row: any, column: any, event: any) {
    if (!this.totalColumn) {
      return;
    }
    // TODO:会触发两次 rowClick
    // 如果是之前有的话
    if (this.rowClickFlag) {
      // 清除之前的定时器
      clearTimeout(this.rowClickTimer);
      // 开始定时器
      this.rowClickTimer = setTimeout(() => {
        this.rowClickFlag = false;
        clearTimeout(this.rowClickTimer);
      }, 300);
      return;
    }
    // 要把id分发出去哦
    const keyId = AxComCore.getValueByAttr(row, this.totalColumn, this.keyId);
    // 如果是找不到 keyId 的话, v-model的值为[], 否则就是[keyId]
    this.rowClickIds = keyId ? [keyId] : [];
    this.idsLoad();
    // 第一次被点击的时候
    this.$emit('rowClick', keyId, row);
    // 打开单次点击的开关
    this.rowClickFlag = true;
    // 开始定时器
    this.rowClickTimer = setTimeout(() => {
      this.rowClickFlag = false;
      clearTimeout(this.rowClickTimer);
    }, 300);
  }

  /**
   * 多选框发生变化时候,返回选中的数据
   */
  private selectionChange(val: any) {
    // 如果是 isMoveRow:true,就不要继续了,不然会改了v-model的值
    if (this.isMoveRow) {
      this.selectionIds = this.MoveRowSelection;
      for (let index = 0; index < this.selectionIds.length; index++) {
        const item = this.selectionIds[index];
        const currentData = this.handler.dataMap.get(item);
        // 打钩
        // 用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）
        (this.$refs.elTable as Table).toggleRowSelection(currentData, true);
        // 如果是最后一条
        if (index === this.selectionIds.length - 1) {
          // 高亮点击的最后一条
          (this.$refs.elTable as Table).setCurrentRow(currentData);
        }
      }

      // 关闭标识
      this.isMoveRow = false;
      return;
    }

    if (!this.keyId) {
      return;
    }
    // 高亮点中的那一行
    // 如果是有数据的话,高亮点击的最后一条,  否则就以第一条为准
    let totalIds = [];
    if (val.length) {
      // 高亮点击的最后一条
      (this.$refs.elTable as Table).setCurrentRow(val[val.length - 1]);
      // 用于v-model
      // 如果当前行的数据是对象,
      // 返回当前行的 id 属性的值
      const keyId = this.keyId;
      totalIds = val.map((item: any) => item[keyId]);
      // v-model 的修改
      this.selectionIds = totalIds;
    } else {
      // 清除 selectionIds
      this.selectionIds = [];
      // 此处需要判断数组是否存在
      if (this.tableDataLoad && this.tableDataLoad.length > 0) {
        //  否则就以第一条为准 , 高亮第一条数据
        (this.$refs.elTable as Table).setCurrentRow(this.tableDataLoad[0]);
        // 记录第一条
        // 就拿第一条
        this.rowClickIds = this.tableDataLoad[0][this.keyId]
          ? [this.tableDataLoad[0][this.keyId]]
          : [];
      }
    }
    this.idsLoad();
    // 分发点击多选框的方法,把数据分发出去
    const lastId = totalIds.length ? totalIds[totalIds.length - 1] : undefined;

    /**
     * 当多选框被点击的时候
     * @params totalIds   返回的是v-model数据
     * @params lastId      最后一个点击的 v-model 数据
     * @params val        被勾选中的数据
     */
    this.$emit('selectionChange', totalIds, lastId, val);
  }

  /**
   * 点击链接进行跳转
   */
  private cellLinkClick(scope: any, index: number) {
    if (!this.totalColumn) {
      return;
    }
    const keyId = AxComCore.getValueByAttr(
      scope.row,
      this.totalColumn,
      this.keyId
    );
    // 列数据
    const column = this.tableColumnLoad[index];
    /** 点击可以跳转的单元格
     * @param id 当前的 id
     * @param  scope.row 当前行的数据
     */
    this.$emit('cellLinkClick', keyId, scope.row, column);
  }

  /**
   * 自定义列表点击确认后
   */
  private transferConfirm(keys: string[], values: any[]) {
    /**
     * 自定义列表点击确认后
     * @params keys 显示列的所有键
     * @params values 显示列的所有值
     */
    this.$emit('transferConfirm', keys, values);
  }

  /**
   * 点击其中一个自定义面板
   */
  private async transferFlagChange() {
    if (!this.loadColumn) {
      return;
    }
    try {
      this.transferTotalData = await this.loadColumn();
    } catch (err) {
      AxMessage.notify(err);
    }
    this.transferFlag = true;
  }

  /**
   * 表头排序点击
   * @param scope
   * @param item
   */
  private headSortClick(scope: any, item: any) {
    // 如果是headmode : false的话,就return
    if (!(this.headMode && !!item.isRange)) {
      return;
    }
    // 获取当前的 ASC 状态
    const flag: boolean = !!item.ASC;
    // 判断 rangeListRecord 数量
    const len = this.rangeListRecord.length;
    //  修改之前的那个   rangeListRecord
    if (len > 0) {
      try {
        this.rangeListRecord[len - 1].ASC = false;
        this.rangeListRecord[len - 1].DESC = false;
      } catch (err) {
        // 一开始就没有数据的
      }
    }
    // 修改当前的
    item.ASC = !flag;
    item.DESC = flag;
    // 判断 当前的 item.name , 是否已经存在 rangeList;
    const index = this.rangeList.findIndex((jtem) => jtem.k === item.name);
    if (index >= 0) {
      // 存在的话,要删除之前的
      this.rangeList.splice(index, 1);
    }
    this.rangeList.push({
      //   DESC是真的话,DESC 假/ASC真    DESC是假的话,DESC真/ASC假
      k: item.name,
      v: flag ? 'DESC' : 'ASC',
    });

    this.rangeListRecord.push(item);
    // 如果超过3个的话,添加之后,要删除最前面一个 unshift
    if (this.rangeListRecord.length > 3) {
      this.rangeListRecord.shift();
    }
    if (this.rangeList.length > 3) {
      this.rangeList.shift();
    }
    // 跳到行首  到顶
    (this.$refs.elTable as any).bodyWrapper.scrollTop = 0;
    // 加载新的数据
    this.$emit('headSortClick', this.rangeList);
    // 清除 correct
    this.clearCorrect();
  }

  /**
   * 头部的自定义面板被点击
   * @param scope
   * @param item
   */
  private headIconClick(scope: any, item: any) {
    // 打开自定义面板
    this.customFlag = true;
    this.$emit('headIconClick');
  }
  // 要的是 column 的数据
  private get rangeListRecord(): any[] {
    if (!this.sortOrder) {
      return [];
    }
    const final = this.sortOrder.map((item) => item);
    //  要显示传入的order的最后一个状态团(ASC)
    this.showOrderIcon(final);
    // 一开始就要改 totalColumn 里面 的 ASC
    return final;
  }

  /**
   * 业务:传入order排序显示图标
   * @param final
   */
  private showOrderIcon(final: any[]) {
    if (!this.sortOrder) {
      return;
    }
    const last = this.sortOrder.slice(-1)[0];
    const target = this.tableColumnLoad.find((item) => item.name === last.k);
    if (target) {
      target[last.v] = true;
      final.pop();
      final.push(target);
    }
  }

  /**
   * 生成一个 tableLoad
   */
  private initTableLoad() {
    // 设置 map 数据
    this.handler.createMapData(this.tableData, this.totalColumn, this.keyId);
    // 给 table 的数据
    this.tableDataLoad = [...this.handler.dataMap.values()];
    // 清除修改痕迹
    this.clearCorrect();
  }

  /**
   * 生成新的map,在 tableData 发生变化,
   */
  private createNewMap() {
    // 生成一个 tableLoad
    this.initTableLoad();
    // 重置选中
    this.resetTopSelected(true);
  }

  /**
   * 重置首行选中
   * @param wait
   * @returns {Promise<void>}
   */
  private async resetTopSelected(wait?: boolean) {
    if (wait) {
      await this.$nextTick();
    }
    // 设置 rowclickid
    const keyId = AxComCore.getValueByAttr(
      this.tableDataLoad[0],
      this.totalColumn,
      this.keyId
    );
    this.rowClickIds = keyId ? [keyId] : [];
    this.idsLoad();
    // 高亮第一条数据
    (this.$refs.elTable as Table).setCurrentRow(this.tableDataLoad[0]);
    // 跳到行首  到顶
    (this.$refs.elTable as any).bodyWrapper.scrollTop = 0;
  }

  /**
   * 刷新按钮点击
   */
  private refreshClick() {
    this.$emit('refreshClick');
    this.clearCorrect();
    // 跳到行首  到顶
    (this.$refs.elTable as any).bodyWrapper.scrollTop = 0;
  }

  /**
   * 检查是否包含分页配置
   */
  private checkPageCtrl() {
    if (!this.pageConfig) {
      // eslint-disable-next-line no-console
      console.warn('请先设置 page-config 再使用此方法');
    }
  }

  /**
   * 多选改变时的处理
   * @param row
   * @param index
   */
  private rowSelectableCheckbox(row: any, index: number) {
    return !this.rowSelectDisabled.includes(row[this.keyId]);
  }
  //#endregion

  //#region 提供的方法
  /**
   * 当前数据处理对象
   */
  public handler = new TableHandler();

  /**
   * 设置某条数据打钩,高亮
   * @param keyId 对应数据的keyid
   */
  public setDataCheck(keyId: string): void {
    const currentData = this.handler.dataMap.get(keyId);
    // 打钩
    // 用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）
    (this.$refs.elTable as Table).toggleRowSelection(currentData, true);
    this.$nextTick(() => {
      // 高亮
      (this.$refs.elTable as Table).setCurrentRow(currentData);
    });
    // 自动输入到 v-modal
  }

  /**
   * 高亮不勾选自动定位
   * @param keyId
   */
  public setCurrentRow(keyId: string): void {
    const currentData =
      this.handler.dataMap.get(keyId) || this.tableDataLoad[0];
    const index =
      [...this.handler.dataMap.keys()].findIndex((item) => item === keyId) || 0;
    this.$nextTick(() => {
      // 高亮
      (this.$refs.elTable as Table).setCurrentRow(currentData);
      // 设置 ids 的值
      this.$emit('idsChange', [keyId]);

      // 跳到行首  到顶
      const totalHeight = (this.$refs.elTable as Table).$el.querySelectorAll(
        '.el-table__body'
      )[0].clientHeight;

      (this.$refs.elTable as any).bodyWrapper.scrollTop = parseInt(
        ((index / this.tableDataLoad.length) * totalHeight).toString()
      );
    });
  }

  /**
   * FIXME:
   * 清除修改标志,并且清理 correctIds
   */
  public clearCorrect(): void {
    if (this.correctIds) {
      for (const value of this.correctIds) {
        ((this.$refs[value] as any)[0] as AxTable).clearCorrect();
      }
    }
    this.correctIds = [];
  }

  /**
   * 修改v-model的值,以勾选为准,没有勾选就以高亮颜色为准
   */
  private idsLoad() {
    // 如果有勾选的情况只选勾选的,否则就选择 rowClick或者第一条
    if (!this.selectionIds.length) {
      this.$emit('idsChange', this.rowClickIds);
      this.$emit('row-change', this.getrows(this.rowClickIds, `${this.keyId}`));
    } else {
      this.$emit('idsChange', this.selectionIds);
      this.$emit(
        'row-change',
        this.getrows(this.selectionIds, `${this.keyId}`)
      );
    }
  }

  /**
   * 获取选中行数据
   * @param ids
   * @param key
   * @returns {any[]}
   */
  public getrows(ids: string[], key: string): any[] {
    const res: any[] = [];
    for (const val of this.tableDataLoad) {
      if (ids.indexOf(val[key]) !== -1) {
        res.push(val);
      }
    }
    return res;
  }

  /**
   * 根据索引获取数据
   * @param index
   * @returns {any}
   */
  public getIndexRow(index: number) {
    return this.tableDataLoad[index];
  }

  /**
   * 通过 ids,找到对应的属性的集合,一一对应
   * @params ids 传入的多个 keyId,是数组的形式
   * @params attr 根据某个属性
   * @return string[]
   */
  public getAttrByIds(ids: string[], attr: string): string[] {
    const list = [];
    for (const iterator of ids) {
      const target = this.getDataById(iterator);
      list.push(target[attr]);
    }
    return list;
  }

  /**
   * 获取所有的 ids
   * @return string[]
   */
  public getTotalIds(): string[] {
    return this.tableDataLoad.map((data) => data[this.keyId]);
  }

  /**
   * 获取所有的 Map 的值
   * @return any[]
   */
  public getTotalValues(): any[] {
    return this.tableDataLoad;
  }

  /**
   * 通过某个 keyId,获取对应的 Map 数据
   * @return Map 集合的单条对象数据
   */
  public getDataById(keyId: string): any {
    return this.handler.dataMap.get(keyId);
  }

  /**
   * 找到 tableDataLoad 的某一条数据,并且修改他
   * ERROR: 时区的translate,没有正常显示
   * @params key id,did之类的值,也就是v-model里面的
   * @params value 完整的一行row的新值
   */
  public updateData(key: any, value: any): void {
    // 重新做一条 tableDataLoad,并且重新高亮
    const rs = this.handler.setData(key, value);
    // 更新列表
    this.tableDataLoad = this.tableDataLoad.map((item) => {
      if (item[this.keyId] === key) {
        return rs;
      } else {
        return item;
      }
    });
    // 高亮当前的数据数据
    (this.$refs.elTable as Table).setCurrentRow(this.handler.dataMap.get(key));
    // 设置 rowClickIds
    this.rowClickIds = [key];
    this.idsLoad();
    // 上色
    sleep(50).then(() => {
      this.setCurrentRow(key);
    });
  }

  /**
   * 删除某条数据
   * @param id 删除对应的keyid的数据
   */
  public delete(id: string): void {
    this.handler.dataMap.delete(id);
    // 最后的 Map集合的数据
    this.tableDataLoad = this.tableDataLoad.filter(
      (item) => item[this.keyId] !== id
    );
    // 高亮第一条数据
    this.$nextTick(() => {
      // 如果没有数据的话,return
      if (!this.tableDataLoad.length) {
        return;
      } else {
        // 设置 rowclickid
        const keyId = AxComCore.getValueByAttr(
          this.tableDataLoad[0],
          this.totalColumn,
          this.keyId
        );
        this.rowClickIds = keyId ? [keyId] : [];
        this.idsLoad();
      }
      // 跳转
      this.setCurrentRow(this.ids[0]);
    });
  }

  /**
   * 删除 ids 对应的 Map 数据
   * @params ids 传入的多个 keyId,是数组的形式
   */
  public deleteDataByIds(ids: string[]): void {
    for (const iterator of ids) {
      //  删除对应的值
      this.handler.dataMap.delete(iterator);
    }
    // 最后的 Map 集合的数据
    this.tableDataLoad = this.tableDataLoad.filter(
      (item) => !ids.includes(item[this.keyId])
    );
    // 如果是没有数据, v-model 要变化
    if (!this.tableDataLoad.length) {
      this.rowClickIds = [];
      this.idsLoad();
      return;
    } else {
      // 有数据,v-model只有一条的情况下,v-model 要变成第一条
      // 高亮第一条数据
      // (this.$refs.elTable as Table).setCurrentRow(this.tableDataLoad[0]);

      // 如果 v-model 只有一条数据的话,就不会触发 selectionChange 事件了
      if (this.ids && this.ids.length === 1) {
        const keyId = AxComCore.getValueByAttr(
          this.tableDataLoad[0],
          this.totalColumn,
          this.keyId
        );
        this.rowClickIds = keyId ? [keyId] : [];
        this.idsLoad();
      }
    }
    this.$nextTick(() => {
      // 跳转到
      this.setCurrentRow(this.ids[0]);
    });
  }

  /**
   * 添加一条数据
   * @params value 一行row的值
   */
  public addData(value: any, index: number = 0, hasFlag: boolean = true): void {
    // 要把id分发出去哦
    const keyId = AxComCore.getValueByAttr(value, this.totalColumn, this.keyId);
    // 如果已经是有的话
    if (this.handler.dataMap.get(keyId)) {
      // 去除这条数据    this.tableDataLoad
      this.tableDataLoad = this.tableDataLoad.filter((item) => {
        return item[this.keyId + ''] !== keyId;
      });
    }
    // 数据集合
    const target = this.handler.setData(keyId, value);
    // 插入到某个位置,默认最上面
    this.tableDataLoad.splice(index, 0, target);
    // 设置 rowclickid
    this.rowClickIds = [keyId];
    this.idsLoad();

    setTimeout(() => {
      // 高亮当前数据
      // this.setCurrentRow(keyId);
      // 跳到行首  到顶
      (this.$refs.elTable as Table).setCurrentRow(target);
      const totalHeight = (this.$refs.elTable as Table).$el.querySelectorAll(
        '.el-table__body'
      )[0].clientHeight;
      (this.$refs.elTable as any).bodyWrapper.scrollTop = parseInt(
        ((index / this.tableDataLoad.length) * totalHeight).toString()
      );
      // 添加增加的红色小角标
      const html = (
        (this.$refs.elTable as Table).$el as HTMLElement
      ).querySelector(`tbody tr:nth-child(${index + 1}) td:first-child`);
      if (!html) {
        return;
      }
      // 如果有标志,就要给个小角标提示
      if (hasFlag) {
        html.classList.add('tri_up');
      }
    }, 50);
  }

  /**
   * 批量增加数据
   * @param data
   */
  public addMultiData(data: any[]): void {
    if (!data.length) {
      return;
    }
    for (const item of data) {
      // 要把id分发出去哦
      const keyId = AxComCore.getValueByAttr(
        item,
        this.totalColumn,
        this.keyId
      );
      this.handler.setData(keyId, item);
      this.tableDataLoad.unshift(item);
    }
    const firstKeyId = AxComCore.getValueByAttr(
      this.tableDataLoad[0],
      this.totalColumn,
      this.keyId
    );
    // 设置 rowclickid
    this.rowClickIds = [firstKeyId];
    this.idsLoad();
    // 高亮第一条数据
    (this.$refs.elTable as Table).setCurrentRow(this.tableDataLoad[0]);
    // 跳到行首  到顶
    (this.$refs.elTable as any).bodyWrapper.scrollTop = 0;
  }

  /**
   * 移动数据
   * @param down
   * @returns {boolean}
   */
  public moveData(down: boolean = true): boolean {
    if (this.ids.length !== 1) {
      return false;
    }
    return this.moveDataByKey(this.ids[0], down);
  }

  /**
   * 移动数据（有目标key）
   * @param key
   * @param down 是否下移
   * @return {boolean}
   */
  public moveDataByKey(key: string, down: boolean = true): boolean {
    // 获取目标index
    const index = this.tableDataLoad.findIndex(
      (item) => item[this.keyId || ''] === key
    );
    // 没找到
    if (index < 0) {
      return false;
    }
    // 最前不能上移
    if (!down && index === 0) {
      return false;
    }
    // 最底不能下移
    if (down && index === this.tableDataLoad.length - 1) {
      return false;
    }
    // 操作目标
    const target = this.tableDataLoad.splice(index, 1);
    // 目标位置
    const pos = down ? index + 1 : index - 1;
    // 再插入回去
    this.tableDataLoad.splice(pos, 0, ...target);
    // 设置选中
    this.$nextTick(() => {
      const targetEle = (this.$refs.elTable as Table).$el.querySelectorAll(
        '.el-table__body > tbody .current-row'
      )[0] as any;
      const offsetTop = targetEle.offsetTop;
      const offsetHeight = targetEle.offsetHeight;
      const bodyWrapper = (this.$refs.elTable as any).bodyWrapper;
      // 判断是否在视野内
      if (
        offsetTop - bodyWrapper.scrollTop > bodyWrapper.offsetHeight ||
        offsetTop - bodyWrapper.scrollTop < 0
      ) {
        if (down) {
          bodyWrapper.scrollTop =
            offsetTop - bodyWrapper.offsetHeight + offsetHeight;
        } else {
          bodyWrapper.scrollTop = offsetTop;
        }
      }
    });
    return true;
  }

  /**
   * 分页加载
   * @param page
   * @param isStart
   */
  public pageLoad(page?: number, isStart: boolean = false) {
    // 如果加载数量已经大于等于总数且不是初始获取，不再加载
    if (
      this.tableDataLoad.length &&
      this.tableDataLoad.length >= (this.pageConfig?.count || Infinity) &&
      !isStart
    ) {
      return;
    }
    // count不能小于等于0，且不是首次加载
    if (
      this.pageConfig &&
      this.pageConfig.count !== undefined &&
      this.pageConfig.count <= 0 &&
      !isStart
    ) {
      return;
    }
    // 没有页码当作下一页处理
    if (page === undefined) {
      this.pageData.page += 1;
    } else {
      this.pageData.page = page;
    }
    // 是否有配置
    if (this.pageConfig && this.pageLoader) {
      // 调用用户定义的loader
      return this.pageLoader(this.pageData.page).then((list) => {
        if (list) {
          if (isStart) {
            // 设置 map 数据
            this.handler.createMapData(list, this.totalColumn, this.keyId);
            // 给 table 的数据
            this.tableDataLoad = [...this.handler.dataMap.values()];
            // 清除修改痕迹
            this.clearCorrect();
          } else {
            list.forEach((value) => {
              // 要把id分发出去
              const keyId = AxComCore.getValueByAttr(
                value,
                this.totalColumn,
                this.keyId
              );
              // 如果已经是有的话
              if (this.handler.dataMap.get(keyId)) {
                // 去除这条数据
                this.tableDataLoad = this.tableDataLoad.filter((item) => {
                  return item[this.keyId + ''] !== keyId;
                });
              }
              // 数据集合
              const target = this.handler.setData(keyId, value);
              // 插入到某个位置,默认最上面
              this.tableDataLoad.push(target);
            });
          }
          // dom渲染之后你处理
          this.$nextTick().then(() => {
            if (isStart) {
              // 高亮第一条数据
              this.resetTopSelected();
            }
            // 获取容器的高度和列表的高度
            const eleWrapper = this.$el.querySelector(
              '.el-table__body-wrapper'
            );
            const eleTable = this.$el.querySelector(
              '.el-table__body-wrapper > table'
            );
            // 如果列表高度小于容器高度，会继续加载
            if (
              eleWrapper &&
              eleTable &&
              eleWrapper.clientHeight > eleTable.clientHeight
            ) {
              this.pageLoad();
            }
          });
        }
      });
    } else {
      return Promise.resolve();
    }
  }

  /**
   * 分页重载
   */
  public pageReload() {
    this.checkPageCtrl();
    if (this.pageConfig) {
      const { start } = this.pageConfig;
      this.pageLoad(start ?? 1, true);
    }
  }

  /**
   * 获取行单选选中信息
   * @returns {{id: T, row: any}}
   */
  public getRadioSelected<T>() {
    return {
      id: this.radioSelectedCurrent as T,
      row: this.getDataById(this.radioSelectedCurrent),
    };
  }
  //#endregion

  //#region 生命周期
  private async mounted() {
    if (this.pageConfig?.autoLoad) {
      this.pageReload();
    }
    if (this.radioSelectedDefault) {
      this.radioSelectedCurrent = this.radioSelectedDefault;
    }
  }

  private updated() {}
  //#endregion
}
</script>
