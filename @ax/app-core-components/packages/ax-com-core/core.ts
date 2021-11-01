import { Prop, Vue } from 'vue-property-decorator';

/**
 * AX 组件基类
 */
export abstract class AxUIComponent extends Vue {
  /**
   * 当前表单对象
   */
  private mform: any = undefined;

  /**
   * 内部临时值（解决未绑定 v-model 问题）
   */
  private mvalue: any = '';

  /**
   * 校验状态
   */
  private validate?: boolean = undefined;

  /**
   * 获取当前父表单对象（不存在则返回 null）
   */
  private get form(): any {
    // 判断是否存在
    if (this.mform !== undefined) return this.mform;
    // 定义父级对象
    let parent = this.$parent;
    // 不存在，遍历获取对象
    while (parent) {
      // 判断是否是表单对象
      if (parent.$options.name === 'ax-form') {
        // 表单对象，设置数据
        this.mform = parent;
        // 返回表单对象
        return this.mform;
      }
      // 未找到，继续查找
      parent = parent.$parent;
    }
    // 未找到，设置表单不存在
    this.mform = null;
    // 返回未找到
    return null;
  }

  /**
   * 设置当前数据校验状态
   */
  public set validatePassed(val: boolean | undefined) {
    this.validate = val;
    this.$forceUpdate();
  }

  /**
   * 获取当前数据校验状态
   */
  public get validatePassed(): boolean | undefined {
    return this.validate;
  }

  /**
   * 对外设置或提供的模块值
   */
  public get modelValue(): any {
    // 判断绑定的数据是否有效
    if (
      this.data !== undefined &&
      this.data !== null &&
      this.mvalue !== this.data
    ) {
      // 已绑定数据，设置临时值为绑定值
      this.mvalue = this.data;
    }
    // 返回值
    return this.mvalue;
  }

  /**
   * 更新值之后通知外部绑定的值变化
   * @param value
   */
  public set modelValue(value: any) {
    // 判断是否一致
    if (this.mvalue === value) return;
    // 设置临时数据
    this.mvalue = value;
    // 通知发布数据变化
    this.$emit('change', value);
    // 判断是否存在表单
    if (this.name && this.name.length > 0 && this.form) {
      // 发布表单事件
      this.form.$emit('form-item-change', this.name, value);
    }
    // 判断是否清空了数据
    if (
      this.clearable !== undefined &&
      this.clearable &&
      (!value || value.length === 0)
    ) {
      // 获取对象
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const self = this;
      // 延时设置焦点
      window.setTimeout(() => {
        self.focus();
      }, 10);
    }
  }

  /**
   * 设置表单项数据值处理
   * @param {*} value 当前表单数据值
   */
  public setFormItemValue(value: any): void {
    // 判断是否一致
    if (this.mvalue === value) return;
    // 设置临时数据
    this.mvalue = value;
    // 通知发布数据变化
    this.$emit('change', value);
  }

  /**
   * 当前组件数据值
   */
  @Prop({ default: undefined })
  public data?: any;

  /**
   * 默认提示文本（占位符）
   */
  @Prop({ default: undefined })
  public placeholder?: string;

  /**
   * 是否允许清空组件内容
   */
  @Prop({ default: true })
  public clearable?: boolean;

  /**
   * 是否被禁用
   */
  @Prop({ default: false })
  public disabled?: boolean;

  /**
   * 组件对象名称
   */
  @Prop({ default: undefined })
  public name?: string;

  /**
   * 获取焦点方法
   * @returns {AxUIComponent} 当前组件对象
   */
  public abstract focus(): AxUIComponent;
}
