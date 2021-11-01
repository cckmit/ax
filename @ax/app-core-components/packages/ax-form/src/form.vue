<template>
  <div class="ax_form" :class="[presetStyle]" @keypress="handleKeypress">
    <slot :data="data"></slot>
    <span
      v-for="(item, key) of tipsmap"
      v-show="showTip && item.shown && !tooltip"
      :key="key"
      class="ax_err_tips"
      :style="`left: ${item.left}px; top: ${item.top}px;`"
    >
      {{ item.message }}
    </span>
  </div>
</template>

<script lang="ts">
import { AxDomUtils, AxStringUtils } from '@ax/app-core-framework';
import AxComCore from '@AxUI/ax-com-core';
import { TLangComKey } from '@AxUI/ax-com-core/locale/zh_CN';
import AxRadio from '@AxUI/ax-radio';
import dayjs from 'dayjs';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component({
  model: {
    // 设置 v-model 对应的数据及方法
    prop: 'data',
    event: 'change',
  },
  components: {},
})
export default class AxForm extends Vue {
  /**
   * 当前表单数据
   */
  @Prop({ default: () => ({}) })
  public data?: { [key: string]: any };

  /**
   * 表单配置数据
   */
  @Prop({ default: undefined })
  public config?: AxComCore.IFormConfig[];

  /**
   * 显示所有提示,默认显示 true
   */
  @Prop({ default: true, type: Boolean })
  public showTip?: boolean;

  /**
   * 是否是气泡提示
   */
  @Prop({ default: false, type: Boolean })
  public tooltip?: boolean;

  /**
   * 预设样式
   */
  @Prop({ default: 'form_table', type: String })
  public presetStyle?: string;

  // 配置数据集合
  private cmap: Map<string, AxComCore.IFormConfig> = new Map();
  // 表单下的组件集合
  private axmap: Map<string, AxComCore.AxUIComponent[]> = new Map();
  // 创建提示数据数组
  private tipsmap: { [key: string]: AxComCore.IFormTip } = {};

  /* -------------------------- TODO: 初始化数据处理 -------------------------- */

  /**
   * 组件创建完毕处理
   */
  public mounted() {
    // 初始化配置
    this.initConfig();
    // 侦听表单数据变化
    this.$on('form-item-change', this.handleFormItemChange);
  }

  /**
   * 处理表单数据变化
   * @param name
   * @param value
   */
  private handleFormItemChange(name: string, value: any) {
    // 获取配置数据
    const comps = this.axmap.get(name);
    // 判断是否有效
    if (!comps || comps.length === 0) return;
    // 获取数据配置对象
    const conf = this.cmap.get(name);
    // 判断是否有效
    if (!conf) return;
    // 把数据转换为类型数组
    // const cv = this.convertToType(conf.type, value);
    // 如果转换之后的数值和源数据不相同，更改源数据，再次执行
    // // XXX: 暂时不知道radio等组件会不会有问题
    // if (cv !== value) {
    //   value = cv;
    //   this.$nextTick(() => {
    //     this.handleFormItemChange(name, value);
    //   });
    //   return;
    // }
    // 定义是否遇到错误标识
    let hasErr = false;
    // 所有同名称的组件需保持一致的数据状态，遍历设置数据
    for (let i = 0, c = comps.length; i < c; i++) {
      // 获取组件对象
      const comp = comps[i];
      // 判断是否相同
      if (comp.modelValue !== value) {
        // 数据不同，修改同名称的数据（如：radio）
        comp.setFormItemValue(value);
      }
      // 针对组件验证数据是否正常
      if (!this.validateValue(conf, comp, value, 'change')) {
        // 设置遇到错误
        if (!hasErr) hasErr = true;

        // 发现错误后,显示气泡
        // 获取之前的数据
        const tip = this.tipsmap[conf.name];
        if (this.tooltip) {
          // 如果是气泡提示模式，显示气泡提示
          this.$emit('showTooltip', true, tip);
        } else {
          this.$set(this.tipsmap, conf.name, tip);
        }
      }
    }
    // 判断是否存在错误，无错误则隐藏提示
    if (!hasErr) {
      // 获取之前的数据
      const tip = this.tipsmap[conf.name];
      // 判断是否已经显示
      if (tip && tip.shown) {
        // 已经显示，取消显示
        tip.shown = false;
        // 重新设置数据
        this.$set(this.tipsmap, conf.name, tip);
      }
    }
    // 判断数据对象是否有效
    if (this.data !== undefined && this.data !== null) {
      // 设置数据
      this.$set(this.data, name, value);
      // 发布表单数据改变事件
      this.$emit('change', this.data);
    }
  }

  /**
   * 刷新表单元件处理
   */
  public refreshForm(): void {
    // 清理数据
    this.axmap.clear();
    // 查找表单子元件
    this.findComponents(this);
    // 判断是否存在配置数据
    if (this.config && this.config.length > 0) {
      // 遍历配置数据
      for (const conf of this.config) {
        // 获取配置名称
        const name = conf.name;
        // 判断是否有效
        if (!name || name.length === 0) continue;
        // 获取配置数据
        const comps = this.axmap.get(name);
        // 判断是否有效
        if (!comps || comps.length === 0) continue;
        // 遍历组件数据
        for (const comp of comps) {
          // 配置当前组件
          this.configComponent(conf, comp);
        }
      }
    }
    // 初始化数据
    this.initData(true);
  }

  /**
   * 根据当前绑定的数据刷新表单处理
   */
  public refreshData() {
    this.initData(false);
  }

  /**
   * 设置当前表单可用焦点
   */
  public focus() {
    // 定义需要获取焦点的对象
    let firstUI: AxComCore.AxUIComponent | undefined;
    let focusUI: AxComCore.AxUIComponent | undefined;
    // 遍历表单组件
    for (const [key, value] of this.axmap) {
      // 遍历数组
      if (!value) continue;
      // 遍历数组
      for (let index = 0; index < value.length; index++) {
        // 获取一个组件
        const axc = value[index];
        // 存储第一个组件
        if (firstUI === undefined) firstUI = axc;
        // 判断是否校验错误
        if (axc.validatePassed === false) {
          // 存在校验失败，设置失败对象
          focusUI = axc;
          // 退出
          break;
        }
      }
    }
    // 判断是否存在对象
    if (focusUI || firstUI) {
      // 延时设置焦点
      window.setTimeout(() => {
        // 设置焦点
        if (focusUI) {
          // 设置焦点
          focusUI.focus();
        } else if (firstUI) {
          // 设置第一个焦点
          firstUI.focus();
        }
      }, 100);
    }
  }

  /**
   * 查找组件下的子组件处理
   */
  private findComponents(vue: Vue): void {
    // 判断是否有效
    if (!vue) return;
    // 获取子元件
    const nodes = vue.$children;
    // 判断是否有效
    if (!nodes || nodes.length === 0) return;
    // 遍历组件的子组件处理
    for (let i = 0, c = nodes.length; i < c; i++) {
      // 获取一个对象
      const node = nodes[i];
      // 判断是否属于组件
      if (node && node instanceof AxComCore.AxUIComponent) {
        // 属于自定义组件，转换为组件对象
        const comp = node as AxComCore.AxUIComponent;
        // 获取组件名称
        const name = comp.name;
        // 判断是否有效
        if (!name || name.length === 0) continue;
        // 获取集合内数据
        let comps = this.axmap.get(name);
        // 判断是否有效
        if (!comps) {
          // 创建数组
          comps = [];
          // 增加到集合
          this.axmap.set(name, comps);
        }
        // 把组件增加到数组
        comps.push(comp);
      }
      // 搜索下一级元件
      this.findComponents(node);
    }
  }

  /* -------------------------- TODO: 配置组件方法 -------------------------- */

  /**
   * 配置组件处理
   */
  private configComponent(
    conf: AxComCore.IFormConfig,
    comp: AxComCore.AxUIComponent
  ) {
    // 需要验证，获取元素对象
    const ele: Element = comp.$el;
    // 判断是否有效
    // if (!ele || ele.getAttribute('hasAxFormConfig') === 'true') return;
    // 增加失去焦点时检测处理
    comp.$on('blur', this.handleComponentBlur.bind(this, conf, comp));
    // 设置已配置完成
    // ele.setAttribute('hasAxFormConfig', 'true');
    // 判断是否需要限制输入
    if (
      (conf.min !== undefined && !isNaN(conf.min)) ||
      (conf.max !== undefined && !isNaN(conf.max)) ||
      (conf.exreg && conf.exreg.length > 0)
    ) {
      // XXX: 暂时去掉输入长度回正
      // 配置单行输入框对象
      this.configTextInput(ele.getElementsByTagName('input'), conf);
      // 配置多行输入框对象
      this.configTextInput(ele.getElementsByTagName('textarea'), conf);
    }
  }

  /**
   * 处理失去焦点事件
   */
  private handleComponentBlur(
    conf: AxComCore.IFormConfig,
    comp: AxComCore.AxUIComponent
  ) {
    // 获取组件数据值
    // const value = this.convertToType(conf.type, comp.modelValue);
    const value = comp.modelValue;
    // 验证数据处理
    if (this.validateValue(conf, comp, value, 'blur')) {
      // 获取之前的数据
      const tip = this.tipsmap[conf.name];
      // 判断是否已经显示
      if (tip && tip.shown) {
        // 已经显示，取消显示
        tip.shown = false;
        // 重新设置数据
        this.$set(this.tipsmap, conf.name, tip);
      }
    }
  }

  /**
   * 配置输入框对象
   */
  private configTextInput(inputs: any, conf: AxComCore.IFormConfig) {
    // 判断是否有效
    if (!inputs || inputs.length === 0) return;
    // 遍历配置限制
    for (const input of inputs) {
      // 设置输入法模式
      input.style.imeMode = 'disabled';
      try {
        // 兼容谷歌浏览器
        (input as any).autocomplete = 'off';
      } catch (ex) {}
      // 判断是否单行输入框
      if (input instanceof HTMLInputElement) {
        // 判断类型
        switch (input.type) {
          case 'text':
          case 'password':
            // 设置最大长度
            if (conf.max !== undefined && !isNaN(conf.max)) {
              // 设置最大长度
              input.maxLength = conf.max;
            }
            break;
          case 'number': {
            // 定义最大长度
            let len = 0;
            // 设置最小值
            if (conf.min !== undefined && !isNaN(conf.min)) {
              // 设置最小值
              input.min = conf.min + '';
              // 设置最小值长度
              len = (conf.min + '').length;
            }
            // 设置最大值
            if (conf.max !== undefined && !isNaN(conf.max)) {
              // 设置最大值
              input.max = conf.max + '';
              // 设置最大值长度
              len = Math.max((conf.max + '').length, len);
            }
            // 判断长度
            if (len > 0) input.maxLength = len;
            break;
          }
          default:
            continue;
        }
      } else {
        // 多行输入框，设置最大长度
        if (conf.max !== undefined && !isNaN(conf.max)) {
          // 设置最大长度
          input.maxLength = conf.max;
        }
      }
      // 判断是否需要限制输入
      if (conf.exreg && conf.exreg.length > 0) {
        // 绑定输入方法
        AxDomUtils.addDomEventListener(
          input,
          ['keydown', 'change', 'paste', 'compositionend'],
          this.handleInputEvent.bind(this, conf, input)
        );
      }
    }
  }

  /**
   * 处理输入框事件
   */
  private handleInputEvent(
    conf: AxComCore.IFormConfig,
    e: HTMLInputElement | HTMLTextAreaElement,
    evt: Event | any
  ): any {
    // 创建正则表达式对象
    const reg = new RegExp(conf.exreg || '', 'img');
    // 获取数据类型
    const isNum =
      (conf.type & AxComCore.FormValueType.INT) ===
        AxComCore.FormValueType.INT ||
      (conf.type & AxComCore.FormValueType.FLOAT) ===
        AxComCore.FormValueType.FLOAT ||
      (conf.type & AxComCore.FormValueType.DOUBLE) ===
        AxComCore.FormValueType.DOUBLE;
    // 判断事件类型
    switch (evt.type) {
      case 'keydown':
        // 处理按键
        const k = AxDomUtils.getDomEventKeyCode(evt);
        if (AxDomUtils.isDomControlKey(k) || evt.ctrlKey) return true;
        const cs = AxDomUtils.keyCodeToString(evt, false);
        if (!cs) return true;
        reg.lastIndex = 0;
        if (reg.test(cs)) return AxDomUtils.cancelDomEvent(evt);
        break;
      case 'paste':
        // 处理粘贴
        const win = window as any;
        if (win.clipboardData) {
          // 兼容 IE
          const t = win.clipboardData.getData('Text');
          win.clipboardData.setData('Text', t.replace(reg, ''));
          evt.returnValue = true;
          if (isNum) {
            window.setTimeout(() => {
              this.fixInputNumber(conf, e, e.value);
              this.handleFormItemChange(conf.name, e.value);
            }, 10);
          } else {
            this.handleFormItemChange(conf.name, e.value);
          }
          return true;
        } else {
          // 一般浏览器
          window.setTimeout(() => {
            reg.lastIndex = 0;
            if (e.value) e.value = e.value.replace(reg, '');
            if (isNum) this.fixInputNumber(conf, e, e.value);
            this.handleFormItemChange(conf.name, e.value);
          }, 10);
        }
        break;
      case 'change':
        // 处理改变
        reg.lastIndex = 0;
        if (e.value) e.value = e.value.replace(reg, '');
        if (isNum) this.fixInputNumber(conf, e, e.value);
        this.handleFormItemChange(conf.name, e.value);
        break;
      case 'compositionend':
        // 处理外部改变【输入法】
        reg.lastIndex = 0;
        if (e.value) {
          this.$nextTick(() => {
            e.value = e.value.replace(reg, '');
            if (isNum) this.fixInputNumber(conf, e, e.value);
            this.handleFormItemChange(conf.name, e.value);
          });
        }
        break;
      default:
        break;
    }
    return true;
  }

  /**
   * 修正输入框数值类型
   */
  private fixInputNumber(
    conf: AxComCore.IFormConfig,
    e: HTMLInputElement | HTMLTextAreaElement,
    value: string
  ) {
    const n = parseFloat(value);
    if (!isNaN(n)) {
      if (conf.min !== undefined && n < conf.min) {
        e.value = conf.min + '';
      }
      if (conf.max !== undefined && n > conf.max) {
        e.value = conf.max + '';
      }
    } else {
      e.value = '0';
    }
    return;
  }

  /* -------------------------- TODO: 初始化数据方法 -------------------------- */

  /**
   * 初始化数据处理
   */
  private initData(eventEnabled: boolean): void {
    // 判断是否存在配置数据
    if (
      !this.data ||
      !this.config ||
      this.config.length === 0 ||
      this.axmap.size === 0
    )
      return;
    // 定义是否存在数据变化标识
    let hasChanged = false;
    // 遍历配置数据
    for (const conf of this.config) {
      // 获取配置名称
      const name = conf.name;
      // 判断是否有效
      if (!name || name.length === 0) continue;
      // 获取配置数据
      const comps = this.axmap.get(name);
      // 判断是否有效
      if (!comps || comps.length === 0) continue;
      // 获取数据值
      let value = this.data[name];
      // 判断是否存在数据
      if (value !== undefined && value !== null) {
        // 已经设置了数据，遍历相同名称的主键设置数据
        for (let i = 0, c = comps.length; i < c; i++) {
          // 获取一个组件
          const comp = comps[i];
          // 设置主键数据
          comp.setFormItemValue(value);
        }
      } else {
        // 未设置数据，遍历获取数据
        for (let i = 0, c = comps.length; i < c; i++) {
          // 获取一个组件
          const comp = comps[i];
          // 判断是否第一个单选框
          if (i === 0 && comp instanceof AxRadio) {
            // 转换为单选框
            const radio = comp as AxRadio;
            // 设置默认选中第一个
            radio.setFormItemValue(radio.label);
            // 保留数据
            value = radio.label;
            // 退出处理
            break;
          }
          // 获取组件数据值
          value = comp.modelValue;
        }
        // 设置初始化数据
        this.$set(this.data, name, value);
        // 设置标识
        if (!hasChanged) hasChanged = true;
      }
    }
    // 判断是否需要发布事件
    if (eventEnabled && hasChanged) {
      // 发布数据变化事件
      this.$emit('change', this.data);
    }
  }

  /* -------------------------- TODO: 验证组件方法 -------------------------- */

  /**
   * 响应按键处理
   */
  private handleKeypress(evt?: Event) {
    // 判断是否有效
    if (!evt) return;
    // 获取事件目标对象
    const el = AxDomUtils.getDomEventTarget(evt);
    // 判断是否是多行输入框（假如在 textarea 内按下 ctrl + enter 也执行提交）
    if (
      el &&
      el.tagName &&
      el.tagName.toUpperCase() === 'TEXTAREA' &&
      !(evt as KeyboardEvent).ctrlKey
    )
      return;
    // 获取按键码
    const kc = AxDomUtils.getDomEventKeyCode(evt);
    // 判断按键
    switch (kc) {
      case 13:
        // 发布提交事件
        this.$emit('submit');
        // 退出
        break;
      default:
        break;
    }
  }

  /**
   * @params customTip 自定义的报错文字
   * 验证表单数据处理，成功则输出验证后的数据对象: resolve(data: { [key: string]: any })，失败则输出失败信息字符串: reject(msg: string)
   */
  public validate(customTip?: string): Promise<{ [key: string]: any }> {
    // 获取当前对象
    const self = this;
    // 返回异步处理对象
    return new Promise((resolve, reject) => {
      // 获取语言对象
      const axLang = AxComCore.getAxLang();
      // 判断是否存在配置数据
      if (self.data && self.config && self.config.length > 0) {
        // 获取当前数据
        const data: { [key: string]: any } = {};
        // 错误数量
        let errs = 0;

        // 遍历配置数据
        for (const conf of self.config) {
          // 判断是否禁用配置
          if (conf.disabled) continue;
          // 获取配置名称
          const name = conf.name;
          // 判断是否有效
          if (!name || name.length === 0) {
            // 数据无效，回调失败
            reject(customTip || axLang.text('form.config.invalid'));
            // 退出
            return;
          }
          // 获取配置数据
          const comps = self.axmap.get(name);
          // 判断是否有效
          if (!comps || comps.length === 0) {
            // 未找到组件，回调失败
            reject(customTip || axLang.text('form.comp.invalid', name));
            // 退出
            return;
          }
          // 获取组件数据值
          // const value = self.convertToType(conf.type, self.data[name]);
          const value = self.data[name];
          // 定义是否遇到错误标识
          let hasErr = false;
          // 存在提示对象，遍历验证数据
          for (let i = 0, c = comps.length; i < c; i++) {
            // 获取组件对象
            const comp = comps[i];
            // 分别为每个组件验证数据，验证失败则累加错误数量
            if (!self.validateValue(conf, comp, value, 'validate')) {
              // 设置遇到错误
              if (!hasErr) hasErr = true;
              // 增加错误次数
              errs++;
            }
          }
          // 判断是否存在错误，无错误则隐藏提示
          if (!hasErr) {
            // 获取之前的数据
            const tip = self.tipsmap[conf.name];
            // 判断是否已经显示
            if (tip && tip.shown) {
              // 已经显示，取消显示
              tip.shown = false;
              // 重新设置数据
              self.$set(self.tipsmap, conf.name, tip);
            }
          }
          // 设置值到对象
          data[name] = self.convertToType(conf.type, self.data[name]);
        }

        // 判断是否存在错误
        if (errs === 0) {
          // 回调成功
          resolve(data);
        } else {
          // 校验失败，返回失败信息
          reject(customTip || axLang.text('form.vlidate.failed'));
        }
      } else {
        // 数据无效，回调失败
        reject(customTip || axLang.text('form.config.invalid'));
      }
    });
  }

  /**
   * 隐藏所有验证结果提示文本
   */
  public hideValidateTips(): void {
    // 判断是否存在配置数据
    if (this.config && this.config.length > 0) {
      // 遍历配置数据
      for (const conf of this.config) {
        // 获取之前的数据
        const tip = this.tipsmap[conf.name];
        // 判断是否已经显示
        if (tip && tip.shown) {
          // 已经显示，取消显示
          tip.shown = false;
          // 重新设置数据
          this.$set(this.tipsmap, conf.name, tip);
        }
      }
    }
  }

  /**
   * 把数据转换为指定类型
   */
  private convertToType(type: number, value: any) {
    // 定义返回值
    let ret;
    // 判断数据类型
    if (
      (type & AxComCore.FormValueType.ARRAY) ===
      AxComCore.FormValueType.ARRAY
    ) {
      // 判断是否有效
      if (value === undefined || value === null) return null;
      // 判断是否是数组
      if (value instanceof Array) {
        // 获取异或结果，去除 ARRAY 数据，仅保留数组内部数据类型
        const stype = type ^ AxComCore.FormValueType.ARRAY;
        // 遍历数组处理
        for (let index = 0; index < value.length; index++) {
          // 处理数组数据
          value[index] = this.convertToType(stype, value[index]);
        }
        // 返回数组
        return value;
      } else {
        // 返回默认数组
        return null;
      }
    } else if (
      (type & AxComCore.FormValueType.STRING) ===
      AxComCore.FormValueType.STRING
    ) {
      // 转换为字符串
      ret =
        value === undefined || value === null
          ? null
          : value.replace(/^\s*/, '') + '';
    } else if (
      (type & AxComCore.FormValueType.INT) ===
      AxComCore.FormValueType.INT
    ) {
      // 转换为整数
      ret = parseInt(value + '', 10);
      // 判断是否有效
      if (isNaN(ret)) ret = 0;
    } else if (
      (type & AxComCore.FormValueType.FLOAT) ===
      AxComCore.FormValueType.FLOAT
    ) {
      // 转换为浮点数
      ret = parseFloat(value + '');
      // 判断是否有效
      if (isNaN(ret)) ret = 0;
    } else if (
      (type & AxComCore.FormValueType.DOUBLE) ===
      AxComCore.FormValueType.DOUBLE
    ) {
      // 转换为浮点数
      ret = +value;
      // 判断是否有效
      if (isNaN(ret)) ret = 0;
    } else if (
      (type & AxComCore.FormValueType.BOOLEAN) ===
      AxComCore.FormValueType.BOOLEAN
    ) {
      // 转换布尔值
      if (value === undefined || value === null) {
        ret = false;
      } else if (typeof value === 'string') {
        ret = value.toUpperCase();
        ret = ret === 'TRUE' || ret === 'Y' || ret === '1';
      } else {
        ret = !!value;
      }
    } else if (
      (type & AxComCore.FormValueType.DATE) ===
      AxComCore.FormValueType.DATE
    ) {
      // 日期类型
      ret = dayjs(value).toDate();
    } else {
      // 其它情况
      ret = value;
    }
    // 返回数据
    return ret;
  }

  /**
   * 验证数据是否有效
   */
  private validateValue(
    conf: AxComCore.IFormConfig,
    comp: AxComCore.AxUIComponent,
    value: any,
    eventType: string
  ): boolean {
    // 判断是否禁用了配置
    if (conf.disabled) return true;

    // 判断是否存在外部验证方法
    if (typeof conf.validator === 'function') {
      // 调用外部验证方法验证
      const vres = conf.validator(value, conf, comp, eventType);
      // 判断是否有效
      if (vres) {
        // 存在验证结果，判断是否成功
        if (vres.passed) {
          // 如果是成功,而且tooltip是开着的话
          if (this.tooltip) {
            // 关闭气泡提示
            this.$emit('showTooltip', false);
          }
          // 返回成功
          return (comp.validatePassed = true);
        } else {
          // 验证失败，显示错误信息
          const tip = this.tipsmap[conf.name];
          // 判断是否已经显示
          if (tip) {
            // 获取组件相对位置
            const pos = AxDomUtils.getDomPosition(comp.$el, this.$el);
            // 已经显示，取消显示
            tip.top =
              pos.top +
              (comp.$el ? (comp.$el as HTMLElement).offsetHeight : 0) +
              2;
            tip.left = pos.left;
            tip.message = vres.message;
            tip.shown = true;
            // 重新设置数据
            this.$set(this.tipsmap, conf.name, tip);
          }
          // 返回失败
          return (comp.validatePassed = false);
        }
      }
    }

    // 不存在外部验证，判断是否数组
    if (
      (conf.type & AxComCore.FormValueType.ARRAY) ===
      AxComCore.FormValueType.ARRAY
    ) {
      // 判断数据是否有效
      if (
        conf.required &&
        !(value && value instanceof Array && value.length > 0)
      ) {
        // 显示错误信息
        this.showTypeErrMessage(comp, 'form.array.required', conf);
        // 返回无效
        return (comp.validatePassed = false);
      }
      // 数组类型，遍历验证数据
      for (let index = 0; index < value.length; index++) {
        // 获取一个数值
        const v = value[index];
        // 验证数据
        if (
          !this.validateType(
            conf.type ^ AxComCore.FormValueType.ARRAY,
            conf,
            comp,
            v
          )
        ) {
          // 返回失败
          return (comp.validatePassed = false);
        }
      }
      // 返回成功
      return (comp.validatePassed = true);
    } else {
      // 其它类型，直接校验类型
      return (comp.validatePassed = this.validateType(
        conf.type,
        conf,
        comp,
        value
      ));
    }
  }

  /**
   * 验证类型数据是否有效
   */
  private validateType(
    type: number,
    conf: AxComCore.IFormConfig,
    comp: AxComCore.AxUIComponent,
    value: any
  ): boolean {
    // 如果不是必填项，而且是空值时，判断为有效  HACK: 逻辑有待商榷 ❓
    if (!conf.required && !value) {
      return true;
    }

    // 先进行输入值判断，检查输入值是否允许
    if (!this.validateInput(type, conf, comp, value)) {
      return false;
    }

    // 转换后的数据
    value = this.convertToType(conf.type, value);

    // 不需要判断布尔值和再次判断数组
    if (
      (type & AxComCore.FormValueType.BOOLEAN) ===
        AxComCore.FormValueType.BOOLEAN ||
      (type & AxComCore.FormValueType.ARRAY) === AxComCore.FormValueType.ARRAY
    )
      return true;
    // 判断类型
    if (
      (type & AxComCore.FormValueType.STRING) ===
        AxComCore.FormValueType.STRING ||
      (type & AxComCore.FormValueType.PASSWORD) ===
        AxComCore.FormValueType.PASSWORD
    ) {
      // 字符串类型，判断是否有效
      if (conf.required && !value) {
        // 无效，显示错误
        this.showTypeErrMessage(comp, 'form.string.required', conf);
        // 返回无效
        return false;
      } else if (
        !this.checkNumber(
          AxStringUtils.getBytesLength(value),
          conf.min,
          conf.max
        )
      ) {
        // 验证失败，获取提示文本
        const msg: TLangComKey =
          conf.min !== undefined && conf.max !== undefined
            ? 'form.string.invalid'
            : conf.min !== undefined
            ? 'form.string.min.invalid'
            : 'form.string.max.invalid';
        // 显示提示信息
        this.showTypeErrMessage(comp, msg, conf);
        // 返回失败
        return false;
      }
    } else if (
      (type & AxComCore.FormValueType.DATE) ===
      AxComCore.FormValueType.DATE
    ) {
      // 日期类型，判断是否有效
      if ((conf.required && value === undefined) || value === null) {
        // 无效，显示错误
        this.showTypeErrMessage(comp, 'form.date.required', conf);
        // 返回无效
        return false;
      } else if (
        !this.checkNumber(
          value === undefined || value === null ? 0 : (value as Date).valueOf(),
          conf.min,
          conf.max
        )
      ) {
        // 验证失败，获取提示文本
        const msg: TLangComKey =
          conf.min !== undefined && conf.max !== undefined
            ? 'form.date.invalid'
            : conf.min !== undefined
            ? 'form.date.min.invalid'
            : 'form.date.max.invalid';
        // 显示提示信息
        this.showTypeErrMessage(comp, msg, conf);
        // 返回失败
        return false;
      }
    } else if (
      (type & AxComCore.FormValueType.FLOAT) ===
        AxComCore.FormValueType.FLOAT ||
      (type & AxComCore.FormValueType.DOUBLE) === AxComCore.FormValueType.DOUBLE
    ) {
      // 浮点数
      if (conf.digits || conf.digits === 0) {
        // 小数位判断
        const reg: RegExp = new RegExp(
          `^([+-]?)[0-9]+([.][0-9]{0,${conf.digits}})?$`
        );
        if (!reg.test(value)) {
          // 显示提示信息
          this.showTypeErrMessage(comp, 'form.num.digits.invalid', conf);
          // 返回失败
          return false;
        }
      } else if (!this.checkNumber(value, conf.min, conf.max)) {
        // 验证失败，获取提示文本
        const msg: TLangComKey =
          conf.min !== undefined && conf.max !== undefined
            ? 'form.num.invalid'
            : conf.min !== undefined
            ? 'form.num.min.invalid'
            : 'form.num.max.invalid';
        // 显示提示信息
        this.showTypeErrMessage(comp, msg, conf);
        // 返回失败
        return false;
      }
    } else {
      // 其它为数值类型，判断是否有效
      if (!this.checkNumber(value, conf.min, conf.max)) {
        // 验证失败，获取提示文本
        const msg: TLangComKey =
          conf.min !== undefined && conf.max !== undefined
            ? 'form.num.invalid'
            : conf.min !== undefined
            ? 'form.num.min.invalid'
            : 'form.num.max.invalid';
        // 显示提示信息
        this.showTypeErrMessage(comp, msg, conf);
        // 返回失败
        return false;
      }
    }
    // 默认返回成功
    return true;
  }

  /**
   * 检查输入值是否有效
   * @param type
   * @param conf
   * @param comp
   * @param value
   */
  private validateInput(
    type: number,
    conf: AxComCore.IFormConfig,
    comp: AxComCore.AxUIComponent,
    value: any
  ): boolean {
    if (
      (type & AxComCore.FormValueType.FLOAT) ===
        AxComCore.FormValueType.FLOAT ||
      (type & AxComCore.FormValueType.DOUBLE) === AxComCore.FormValueType.DOUBLE
    ) {
      // 判断输入是否是数字
      if (!/^[+\-]?\d+(\.\d+)?$/.test(`${value}`)) {
        // 验证失败，获取提示文本
        const msg: TLangComKey =
          conf.min !== undefined && conf.max !== undefined
            ? 'form.num.invalid'
            : conf.min !== undefined
            ? 'form.num.min.invalid'
            : 'form.num.max.invalid';
        // 显示提示信息
        this.showTypeErrMessage(comp, msg, conf);
        // 返回失败
        return false;
      }
    } else if (
      (type & AxComCore.FormValueType.INT) ===
      AxComCore.FormValueType.INT
    ) {
      // 判断输入是否是数字
      if (!/^[+\-]?\d+$/.test(`${value}`)) {
        // 验证失败，获取提示文本
        const msg: TLangComKey =
          conf.min !== undefined && conf.max !== undefined
            ? 'form.num.invalid'
            : conf.min !== undefined
            ? 'form.num.min.invalid'
            : 'form.num.max.invalid';
        // 显示提示信息
        this.showTypeErrMessage(comp, msg, conf);
        // 返回失败
        return false;
      }
    }
    return true;
  }

  /**
   * 检查数值是否在最大值与最小值之间
   * @param {number} num 需检查的数值
   * @param {number} min 最小值
   * @param {number} max 最大值
   * @returns {boolean} 是否成功
   */
  private checkNumber(num?: number, min?: number, max?: number): boolean {
    // 判断是否有效
    if (num === undefined || isNaN(num)) return false;
    // 判断是否符合最小条件
    if (min !== undefined && !isNaN(min)) {
      // 设置了最小值且小于最小值则返回失败
      if (num < min) return false;
    }
    // 判断是否符合最大条件
    if (max !== undefined && !isNaN(max)) {
      // 存在最大检测并大于最大数值则返回失败
      if (num > max) return false;
    }
    // 符合条件则返回校验成功
    return true;
  }

  /**
   * 校验失败后显示提示信息处理
   */
  private showTypeErrMessage(
    comp: AxComCore.AxUIComponent,
    message: TLangComKey,
    conf: AxComCore.IFormConfig
  ): void {
    // 判断是否存在元件
    if (!this.$el || !comp.$el) return;
    // 字符串文本模式：0 - 名称；1 - 最小值；2 - 最大值；3 - 半数最大值；4 - 正则表达式
    // 修正最小值
    const mins =
      conf.min !== undefined && !isNaN(conf.min)
        ? this.getDateString(conf, conf.min)
        : '';
    // 修正最大值
    const maxs =
      conf.max !== undefined && !isNaN(conf.max)
        ? this.getDateString(conf, conf.max)
        : '';
    // 获取语言对象
    const axLang = AxComCore.getAxLang();
    // 获取提示文字
    let text = axLang.text(message, conf.text.toLowerCase(), mins, maxs);
    // 获取排除的正则表达式字符串
    if (conf.exreg && conf.exreg.length > 0) {
      // 获取正则表达式文本
      text = text + this.getExRegText(conf.exreg);
    } else if (
      conf.max !== undefined &&
      !isNaN(conf.max) &&
      (conf.type & AxComCore.FormValueType.PASSWORD) === 0
    ) {
      // 具有最大数值，增加双字节信息
      text = text + axLang.text('form.string.miltiword', conf.max);
      // FIX: /2 的汉字 ,改成 字符
    }
    // 获取浮点的小数位限制
    if (conf.digits || conf.digits === 0) {
      // 获取正则表达式文本
      text = axLang.text(message, conf.digits);
    }
    // 如果有自定义描述，使用自定义描述
    if (conf.spText) {
      text = conf.spText;
    }
    // 获取之前的数据
    const tip = this.tipsmap[conf.name];
    // 判断是否已经显示
    if (tip) {
      // 获取组件相对位置
      const pos = AxDomUtils.getDomPosition(comp.$el, this.$el);
      // 已经显示，取消显示
      tip.top =
        pos.top + (comp.$el ? (comp.$el as HTMLElement).offsetHeight : 0);
      tip.left = pos.left;
      tip.message = text;
      tip.shown = true;
      // 重新设置数据
      if (this.tooltip) {
        // 如果是气泡提示模式，显示气泡提示
        this.$emit('showTooltip', true, tip);
      } else {
        this.$set(this.tipsmap, conf.name, tip);
      }
    }
  }

  /**
   * 判断并转换为日期格式，非日期格式则返回原始数据字符串
   */
  private getDateString(conf: AxComCore.IFormConfig, value: number): string {
    // 判断是否是日期格式
    if (
      (conf.type & AxComCore.FormValueType.DATE) ===
      AxComCore.FormValueType.DATE
    ) {
      // 日期类型，格式化处理
      return dayjs(new Date(value)).format('yyyy-mm-dd');
    }
    // 默认返回数据
    return value + '';
  }

  /**
   * 分析正则表达式，转换为文本信息
   */
  private getExRegText(regstr: string): string {
    // 获取语言对象
    const axLang = AxComCore.getAxLang();
    // 处理正则表达式
    const sps = axLang.text('form.reg.separator');
    // 检查特殊符号
    const spSymbol = /[\[\]\^\(\)\*]/g;
    const isInclude: boolean = (regstr.match(spSymbol) || []).includes('^');
    let note = regstr.replace(spSymbol, '');
    note = note.replace(/\\w/g, axLang.text('form.reg.words') + sps);
    note = note.replace(/\\d/g, axLang.text('form.reg.numbers') + sps);
    note = note.replace(/\\s/g, axLang.text('form.reg.spaces') + sps);
    note = note.replace(/\\/g, sps);
    note = note.replace(new RegExp('(' + sps + '){2,}', 'img'), sps);
    note = note.replace(new RegExp('(' + sps + ')+$', 'img'), '');
    // 根据不同的情况返回对应的描述 p.s. 只支持简易正则
    return axLang.text(
      isInclude ? 'form.reg.noteInclude' : 'form.reg.noteExclude',
      note
    );
  }

  /* -------------------------- TODO: 监测数据变化 -------------------------- */

  /**
   * 监测配置变化
   */
  @Watch('config')
  private initConfig(): void {
    // 清理集合
    this.cmap.clear();
    // 重置数据
    this.tipsmap = {};
    // 判断是否存在数据
    if (!this.config || this.config.length === 0) return;
    // 遍历设置数据
    for (const conf of this.config) {
      // 增加到集合
      this.cmap.set(conf.name, conf);
      // 增加错误提示配置数据
      this.$set(this.tipsmap, conf.name, {
        top: 0,
        left: 0,
        message: '',
        shown: false,
      });
    }
    // 刷新表单信息
    this.refreshForm();
  }
}
</script>
