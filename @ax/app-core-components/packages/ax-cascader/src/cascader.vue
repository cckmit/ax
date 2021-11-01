<template>
  <div
    class="ax_cascader"
    :class="[
      { validate_passed: validatePassed === true },
      { validate_failed: validatePassed === false },
    ]"
    :style="props.multiple ? 'height:auto;' : ''"
  >
    <!-- v-model="elValueArr" -->
    <!-- v-model="modelValue" -->
    <ax-tooltip
      v-if="showTooltip"
      placement="bottom"
      :tips="tooltipText"
      :disabled="disabledGet"
    >
      <el-cascader
        ref="el_cascader"
        v-model="modelValue"
        placement="bottom-start"
        :show-all-levels="showAllLevels"
        :collapse-tags="collapseTags"
        :placeholder="placeholderStr"
        :disabled="disabled"
        :clearable="clearable"
        :popper-class="popperClass"

        :name="name"
        :options="options"
        :props="props"
        v-bind="$attrs"
        v-on="$listeners"
        @change="nodeChange"
        @expand-change="expandChange"
      >
        <template slot-scope="{ node, data }">
          <slot :node="node" :data="data"></slot>
        </template>
      </el-cascader>
    </ax-tooltip>

    <el-cascader
      v-else
      ref="el_cascader"
      v-model="modelValue"
      placement="bottom-start"
      :show-all-levels="showAllLevels"
      :collapse-tags="collapseTags"
      :popper-class="popperClass"

      :placeholder="placeholderStr"
      :disabled="disabled"
      :clearable="clearable"
      :name="name"
      :options="options"
      :props="props"
      v-bind="$attrs"
      v-on="$listeners"
      @change="nodeChange"
      @expand-change="expandChange"
    >
      <template slot-scope="{ node, data }">
        <slot :node="node" :data="data"></slot>
      </template>
    </el-cascader>
  </div>
</template>

<script lang="ts">
import AxComCore, { UILang } from '@AxUI/ax-com-core';
import AxTooltip from '@AxUI/ax-tooltip';
import { Cascader } from 'element-ui';
import { CascaderNode } from 'element-ui/types/cascader';
import { Component, Prop, Ref, Vue } from 'vue-property-decorator';
import CascaderProps = AxComCore.CascaderProps;

@Component({
  model: {
    // 设置 v-model 对应的数据及方法
    prop: 'data',
    event: 'change',
  },
  inheritAttrs: false,
  components: {
    [Cascader.name]: Cascader,
    AxTooltip,
  },
})
export default class AxCascader extends AxComCore.AxUIComponent {
  //#region Refs
  @Ref('el_cascader') refCascader!: any;
  //#endregion

  //#region Props
  /**
   * 过长是否省略显示
   */
  @Prop({ default: true, type: Boolean })
  public showEllipsis?: boolean;

  /**
   * 组件对象名称
   */
  @Prop({ default: undefined })
  public declare name?: string;

  /**
   * 输入框文本占用
   */
  @Prop({ default: undefined })
  public declare placeholder?: string;

  /**
   * 是否禁用
   */
  @Prop({ default: false, type: Boolean })
  public declare disabled?: boolean;
  /**
   * DatePicker 下拉框的类名 (可选)
   */
  @Prop({ default: 'ax_cascader_popper' })
  public popperClass?: string;

  /**
   * 是否支持清空选项
   */
  @Prop({ default: false, type: Boolean })
  public declare clearable?: boolean;

  /**
   * 是否支持只显示最后一列
   */
  @Prop({ default: true, type: Boolean })
  public showAllLevels?: boolean;

  /**
   * 是否显示提示
   */
  @Prop({ default: false, type: Boolean })
  public showTooltip?: boolean;

  /**
   * 多选时是否将选中值按文字的形式展示
   */
  @Prop({ default: false, type: Boolean })
  public collapseTags?: boolean;

  /**
   * 组件对象名称
   */
  @Prop({
    default: () => [],
  })
  public options?: any[];

  /**
   * 配置选项
   */
  @Prop({
    default: (): CascaderProps => ({
      value: undefined,
      label: undefined,
      children: undefined,
      disabled: undefined,
      expandTrigger: 'hover',
      multiple: false,
    }),
  })
  private props!: CascaderProps;
  //#endregion

  //#region Data
  // 提示文字
  private tooltipText: string = '';

  // 记录第一次 v-model 的值,主要是记录类型,注意不要浅拷贝
  private firstValue: any = null;
  //#endregion

  //#region Computed
  /**
   * 不显示提示
   * @returns {boolean}
   */
  private get disabledGet(): boolean {
    return this.tooltipText === '';
  }

  /**
   * placeholder的显示
   * @returns {string}
   */
  private get placeholderStr(): string {
    return this.placeholder === undefined
      ? UILang.t('select.placeholder')
      : this.placeholder;
  }
  //#endregion

  //#region Methods
  /**
   * 各父级选项值组成的数组
   */
  private expandChange(list: any[], ...arg: any) {
    this.$emit('expandChange', list, arg);
  }

  /**
   * 节点选择事件
   * @param ids
   */
  private nodeChange(ids: string[]) {
    this.$emit('nodeChange', ids);
    // 如果是有要求,需要显示...的话
    if (this.showEllipsis) {
      setTimeout(() => {
        const limit: number = 3;
        // 多选的话
        if (this.props?.multiple) {
          // 遍历 presentTags
          this.refCascader.presentTags.forEach((item: { text: string }) => {
            const arr: string[] = item.text.split('/');
            if (arr.length > limit) {
              const final: string = arr.slice(0 - limit).join('/');
              // 设置名称
              item.text = '.../' + final;
            }
          });
        } else {
          const str: string = this.getPresentText();
          // 如果没有文字的话
          if (!str) {
            return;
          }
          // str=>arr  split
          const arr: string[] = str.split('/');
          // 如果是超长的话  ('/'>3)
          if (arr.length > limit) {
            const final: string = arr.slice(0 - limit).join('/');

            // 设置名称
            this.setPresentText('.../' + final);
          }
        }
      }, 50);
    }

    // 提示文字修改
    setTimeout(() => {
      this.tooltipText = this.getPresentText();
    }, 200);
  }

  /**
   * 改变 ax组件的 v-model 值
   */
  private proxyChange(val: any) {
    this.$emit('change', val);
  }
  //#endregion

  //#region 公共方法
  /**
   * 隐藏菜单
   */
  public setMenuVisible(visible: boolean = false) {
    // 隐藏菜单
    this.refCascader.toggleDropDownVisible(visible);
  }

  /**
   * 获取焦点方法
   */
  public focus(): AxCascader {
    // 获取元素对象
    const el = this.$refs['el-cascader'];
    // 判断是否是 HTML 元素
    if (el instanceof Vue) {
      // 获取元素对象
      const e = (el as Vue).$el;
      // 判断是否是 HTML 元素
      if (e && e instanceof HTMLElement) {
        // 设置焦点
        (e as HTMLElement).focus();
      }
    }
    // 返回当前对象
    return this;
  }

  /**
   * 更换名称显示
   * @param str
   */
  public setPresentText(str: string) {
    // 多选的话
    if (this.props?.multiple) {
      const list: string[] = str.split(',');
      list.forEach((item: string, index: number) => {
        this.refCascader.presentTags[index].text = item;
      });
    } else {
      this.refCascader.presentText = str;
    }
  }

  /**
   * 获取名称显示
   * @returns {any}
   */
  public getPresentText(): string {
    return this.props?.multiple
      ? this.refCascader.presentTags
          .map((item: { text: string }) => item.text)
          .join('  ,  ')
      : this.refCascader.presentText;
  }

  /**
   * 清除lazyload数据的节点
   */
  public clearLazyNode(cb: () => void) {
    if (cb) {
      cb();
      // 更换 lazyLoad
      // 清除 v-model
      // (this.$refs.ax_cascader as any).$refs.el_cascader.$refs.panel.checkedValue();
    }
    const panel = this.refCascader.$refs.panel;
    // 存储数据 menus
    panel.menus = [];
    // 存储数据 menus
    // 清除 refs 的所有 menu 节点
    panel.$refs = {};
    panel.lazyLoad();
    // panel.initStore();
  }

  /**
   * 获取选中的节点数组
   * @param leafOnly 是否只是叶子节点，默认值为 false
   * @returns {any}
   */
  public getCheckedNodes<V extends any, D extends any>(
    leafOnly: boolean = false
  ): CascaderNode<V, D>[] {
    return this.refCascader.getCheckedNodes(leafOnly);
  }
  //#endregion

  //#region elementui 的 v-model 响应
  /**
   * 绑定 elementui 的 v-model
   */
  public get elValueArr(): any[] {
    const data = this.data;
    // 如果是已经有记录,就 return
    // if (this.firstValue !== null) {
    //   return this.firstValue;
    // }
    // 如果是字符串的话
    if (typeof data === 'string') {
      this.firstValue = data;
      // 转成 数组
      return data.split('/');
    } else if (Array.isArray(data)) {
      this.firstValue = data.map((item: string) => item);
      // 如果是数组的话
      return this.firstValue;
    } else {
      return [];
    }
  }

  /**
   * 绑定 elementui 的 v-model
   * @param val
   */
  public set elValueArr(val: any[]) {
    if (typeof this.firstValue === 'string') {
      // 数组=>字符串
      const str = val.join('/');
      this.proxyChange(str);
    } else if (Array.isArray(this.firstValue)) {
      // 如果是数组的话
      this.proxyChange(val);
    }
  }
  //#endregion

  //#region 生命周期
  /**
   * created
   */
  private created() {
    // 设置默认触发类型
    if (!this.props?.expandTrigger) {
      this.props.expandTrigger = 'hover';
    }
  }

  /**
   * mounted
   */
  private mounted() {
    // 提示文字修改
    this.tooltipText = this.getPresentText();
  }
  //#endregion
}
</script>
