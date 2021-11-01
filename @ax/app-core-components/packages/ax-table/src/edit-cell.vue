<template>
  <!-- 可以编辑--非编辑状态 -->
  <span
    v-if="editMode && column.isEdit && !editFlag"
    class="editable_cell"
    :class="[`align_${align}`]"
    @dblclick="dblclick"
    v-html="
      column.translate
        ? column.translate(scope.row[getAttr('name')], scope.row)
        : scope.row[getAttr('name')]
    "
  >
    <span class="editable_cell_box">
      <span v-show="correctFlag" class="editable_cell_triangle"></span>
    </span>
  </span>

  <!-- 可以编辑--编辑状态 -->
  <div
    v-else-if="editMode && column.isEdit && editFlag"
    class="cell_edit_input"
  >
    <!--编辑状态-->
    <ax-form
      :ref="`${scope.column[keyId]}_row_${scope.$index}`"
      :data="scope.row"
      :config="column.editConfig"
      :tooltip="true"
      @showTooltip="showTooltip"
    >
      <ax-tooltip
        ref="tooltip"
        :tips="tipText"
        :placement="'bottom'"
        :manual="true"
        :offset="tipOffset"
        :show="tipShow"
      >
        <ax-input
          ref="axInput"
          v-model="scope.row[getAttr('name')]"
          :name="column.name"
          :placeholder="`请输入内容`"
          :clearable="false"
          :autofocus="true"
          @blur="elInputBlur(column.name, scope.row[getAttr('name')])"
        ></ax-input>
      </ax-tooltip>
    </ax-form>
  </div>

  <!-- 不可编辑-正常状态 -->
  <span
    v-else-if="!editMode || (!column.isEdit && !column.isImage)"
    :class="[column.isLink ? 'table_underline' : '', `align_${align}`]"
    @click="cellLinkClick"
    v-html="
      column.translate
        ? column.translate(scope.row[getAttr('name')], scope.row)
        : scope.row[getAttr('name')]
    "
  ></span>

  <!-- 图片 -->
  <div v-else-if="column.isImage" class="table_img">
    <img :src="scope.row[getAttr('name')]" />
  </div>
</template>

<script lang="ts">
import AxForm from '@AxUI/ax-form';
import AxInput from '@AxUI/ax-input';
import AxTooltip from '@AxUI/ax-tooltip';
import AxComCore from '@AxUI/ax-com-core';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'edit-cell',
  components: {
    AxInput,
    AxForm,
    AxTooltip,
  },
})
export default class EditCell extends Vue {
  /*******************************输入******************************/

  // 每条数据的行标识,唯一标识
  @Prop({ default: 'id' })
  private keyId?: string;

  // 当前列序号
  @Prop({ default: 0 })
  private index?: number;

  // 模式转换
  @Prop({ default: false })
  private editMode?: boolean;

  // 全部字段
  @Prop({ default: () => [] })
  private totalColumn?: string[];

  // 某些行的数据是不能修改的,传入ids
  @Prop({ default: () => [] })
  private noEditIds?: string[];

  @Prop({ default: undefined })
  private editrowconfig?: any;

  // tooltip组件偏移量，默认不偏移
  @Prop({ default: 0 })
  private tipOffset?: number;

  // 对齐
  @Prop({ default: '', type: String })
  private align?: string;

  private isNoEdit() {
    // 如有这个id的话,那么 column.isEdit 就要是false了
    if (!this.noEditIds || !this.keyId) {
      return false;
    }

    if (this.editrowconfig && !this.isCellEdit()) {
      return true;
    }
    const noEditIds = this.noEditIds;
    const row = (this.scope as AxComCore.IScope).row;

    // 匹配当前行的数据
    if (Array.isArray(row)) {
      //  有交集的话
      return !!row.filter((v) => noEditIds.includes(v)).length;
    } else {
      const keyId = this.keyId;
      return !!noEditIds.find((item: any) => item === row[keyId]);
    }
  }

  // 总的数据
  @Prop({ default: () => ({}) })
  private scope?: AxComCore.IScope;

  // cloumn列的数据,关于某个字段的
  @Prop({ default: () => ({}) })
  private column?: AxComCore.ITableColumns;

  /*******************************输出******************************/

  /**
   * input 失去焦点的时候,emit 回调
   */
  private async elInputBlur(attr: string, value: any) {
    if (!this.scope || !this.column || !this.totalColumn || !this.keyId) {
      return;
    }
    const refName = `${this.scope.column[this.keyId]}_row_${this.scope.$index}`;
    this.$emit('cellBlur', this, refName, attr);
  }

  /**
   * 点击链接进行跳转
   */
  private cellLinkClick() {
    // 如果是可以跳转 做点事情的话
    if (!this.column) {
      return;
    }
    if (this.column.isLink) {
      this.$emit('cellLinkClick', this.scope, this.index);
    }
  }

  /**
   * 清除修改痕迹
   */
  public clearCorrect() {
    this.correctFlag = false;
    this.editFlag = false;
  }
  /*******************************组件内部******************************/
  private editFlag = false;
  public correctFlag = false;
  private tempValue: any = '';
  private dblclick() {
    // 先做判断能不能打开
    if (this.isNoEdit()) {
      // 不能修改的 cell 双击暂时不做提示
      // showNotify('修改受限制');
      return;
    }
    // 先关闭 tooltip 气泡
    this.showTooltip(false);

    this.editFlag = true;
    // 临时输入框的值
    this.tempValue = (this.scope as AxComCore.IScope).row[
      this.getAttr('name') as string
    ];
    // 当生成input组件后,让input组件获取焦点
    this.$nextTick(() => {
      (this.$refs.axInput as AxInput).focus();
    });
  }
  /**
   * 获取正确的属性,用于拿到正确的界面显示内容
   */
  private getAttr(attr: keyof AxComCore.ITableColumns) {
    if (!this.totalColumn || !this.column || !this.scope) {
      return undefined;
    }
    // 判断当前行的数据是数组
    if (Array.isArray(this.scope.row)) {
      const target = this.column[attr];
      // 返回的是这个字段的 index 索引
      return this.totalColumn.findIndex((item) => target === item);
    } else {
      // 如果当前行的数据是对象,就返回 参数id这个字段
      return this.column[attr];
    }
  }

  // ------------------- 气泡提示 -------------------

  // 气泡提示内容
  private tipText: string = '';
  // 气泡提示显示
  private tipShow: boolean = false;

  /**
   * 气泡提示显示控制
   * @param show
   * @param tip
   */
  private showTooltip(show: boolean, tip?: AxComCore.IFormTip) {
    // 提示开关
    this.tipShow = show;
    // 提示内容
    this.tipText = tip && show ? tip.message || '' : '';
  }

  /**
   * 输入改变
   * @param data
   */
  // private inputChange(data: any) {
  //   // 输入改变时隐藏气泡提示
  //   this.showTooltip(false);
  // }
  private isCellEdit() {
    if (!this.column || !this.scope) {
      return '';
    }
    const row = (this.scope as AxComCore.IScope).row;
    const configkey = row[this.editrowconfig.key];
    const config: any[] = this.editrowconfig.filterconfig[configkey] || [];
    if (config.indexOf(this.column.name) !== -1) {
      this.$emit('cellDbClick', row);
      return false;
    } else {
      return true;
    }
  }
}
</script>
