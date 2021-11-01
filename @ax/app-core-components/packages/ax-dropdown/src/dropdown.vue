<template>
  <el-dropdown
    ref="el-dropdown"
    :trigger="trigger"
    class="ax_dropdown"
    :placement="placement"
    :tabindex="1"
    :hide-on-click="hideOnClick"
    @command="handleCommand"
    @visible-change="handleVisibleChange"
  >
    <template v-if="this.$slots.default && this.$slots.default.tag">
      <slot></slot>
    </template>
    <template v-else>
      <span>
        <slot></slot>
      </span>
    </template>
    <el-dropdown-menu
      slot="dropdown"
      :class="
        menuClass === undefined ? 'dropdown_menu' : 'dropdown_menu ' + menuClass
      "
    >
      <el-dropdown-item
        v-for="item in options"
        :key="item.key"
        :class="'dropdown_item'"
        :command="item.key"
        :disabled="item.disabled"
        :divided="item.text === '-'"
      >
        <slot v-if="item.text !== '-'" name="option" :item="item">
          {{ item.text }}
        </slot>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script lang="ts">
import AxButton from '@AxUI/ax-button';
import AxComCore from '@AxUI/ax-com-core';
import { Dropdown, DropdownItem, DropdownMenu } from 'element-ui';
import { Component, Emit, Prop, Ref, Vue } from 'vue-property-decorator';

@Component({
  model: {
    // 设置 v-model 对应的数据及方法
    prop: 'data',
    event: 'change',
  },
  components: {
    [Dropdown.name]: Dropdown,
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem,
    AxButton,
  },
})
export default class AxDropdown extends Vue {
  //#region Refs
  @Ref('el-dropdown') refDropdown?: Dropdown;
  //#endregion

  //#region Props
  /**
   * 触发下拉的行为
   */
  @Prop({ default: 'hover', type: String })
  public trigger?: string;

  /**
   * 下拉菜单样式
   */
  @Prop({ default: undefined, type: String })
  public menuClass?: string;

  /**
   * 点击是否隐藏菜单，默认 true
   */
  @Prop({ default: true, type: Boolean })
  public hideOnClick?: boolean;

  /**
   * 菜单弹出位置
   */
  @Prop({ default: AxComCore.DropdownPosition.BOTTOM_END })
  public placement?: string;

  /**
   * 设置当前下拉框数据
   */
  @Prop({ default: undefined })
  public options?: AxComCore.IOptionData[];
  //#endregion

  //#region public方法
  /**
   * 获取焦点方法
   */
  public focus(): AxDropdown {
    // 判断是否是 HTML 元素
    if (this.refDropdown) {
      // 获取元素对象
      const e = this.refDropdown.$el;
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
   * 关闭下拉框处理
   */
  public close(): AxDropdown {
    (this.refDropdown as any).hide();
    // 返回当前对象
    return this;
  }
  //#endregion

  //#region Emit
  /**
   * 菜单下拉框事件
   */
  private handleCommand(key: string | number): any {
    // 触发的 `options 选项的key
    this.$emit(
      'change',
      key,
      this.options?.find((option) => option.key === key)
    );
  }

  /**
   * 下拉框出现/隐藏时触发
   */
  @Emit('visible-change')
  private handleVisibleChange(visible: boolean): boolean {
    return visible;
  }
  //#endregion

  //#region 生命周期
  /**
   * 初始化数据处理
   */
  private created() {}
  //#endregion
}
</script>
