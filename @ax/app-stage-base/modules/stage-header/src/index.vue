<template>
  <div class="stage_header">
    <div class="stage_header_left">
      <div class="stage_header_logo">
        <img src="../../core-module/src/assets/image/logo.png" />
      </div>
      <div class="stage_header_title">{{ title }}</div>
    </div>
    <div class="stage_header_right">
      <a class="stage_header_link" @click="switchThemeMode">
        <template v-if="themeMode === themeModeList.LIGHT">🌞</template>
        <template v-if="themeMode === themeModeList.DARK">🌚</template>
      </a>
      <a class="stage_header_link" target="_blank" :href="`${registry}${name}`">
        {{ version }}
      </a>
      <div class="theme_switch">
        <a class="stage_header_link">主题</a>
        <div class="header_dropdown">
          <ul>
            <li
              v-for="(theme, index) in themeOptions"
              :key="index"
              @click="onThemeChange(theme.key)"
            >
              {{ theme.text }}
            </li>
          </ul>
        </div>
      </div>
      <div class="lang_switch">
        <a class="stage_header_link">国际化</a>
        <div class="header_dropdown">
          <ul>
            <li
              v-for="(lang, index) in langOptions"
              :key="index"
              @click="onLangChange(lang.key)"
            >
              {{ lang.text }}
            </li>
          </ul>
        </div>
      </div>
      <a
        v-if="!showSlider"
        class="stage_header_link"
        @click="showSlider = true"
      >
        基准
      </a>
      <input
        v-if="showSlider"
        v-model="rootFontSize"
        type="number"
        class="root_font"
        @change="rootFontChange"
        @blur="showSlider = false"
      />
      <a
        v-for="(panel, index) in panels"
        :key="index"
        class="stage_header_link"
        @click="switchPanel(panel)"
      >
        {{ panel.text }}
      </a>
      <div v-if="showLogin" class="user_info">
        <a v-if="!userInfo.isLogin" class="stage_header_link" @click="onLogin">
          登录
        </a>
        <a v-if="userInfo.isLogin" class="stage_header_link">
          {{ userInfo.name }}
        </a>
        <div v-if="userInfo.isLogin" class="header_dropdown">
          <ul>
            <li @click="onLogout">登出</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  AxStorageUtils,
  AxVueBase,
  AxVuexApp,
  AxVuexUser,
} from '@ax/app-core-framework';
import AxGlobalLang from '@ax/app-core-language';
import AxStageBase, { IHeaderPanel, ThemeMode } from '@modules/core-module';
import { Component, Emit, Prop, PropSync } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class StageHeader extends AxVueBase {
  // 当前版本
  @Prop({ default: '0.0.1', type: String })
  private version?: string;

  // 发布到npm的包名称
  @Prop({ default: '', type: String })
  private name?: string;

  // npm服务器地址
  @Prop({ default: 'http://192.168.2.202:4873/-/web/detail/', type: String })
  private registry?: string;

  // 根节点字体大小， 默认14
  @Prop({ default: 14, type: Number })
  private rootFont?: number;

  // 项目名称
  @Prop({ default: '项目名称', type: String })
  private title?: string;

  // 显示登录模块
  @Prop({ default: false, type: Boolean })
  private showLogin!: boolean;

  // 当前页面
  @PropSync('panelCurrent', { default: '文档', type: String })
  private panelCur?: string;

  // 页面列表
  @Prop({
    default: () => [
      { path: '/test', text: '测试' },
      { path: '/', text: '文档' },
    ],
    type: Array,
  })
  private panels?: IHeaderPanel[];

  @Emit('login')
  private onLogin() {
    return true;
  }

  @Emit('logout')
  private onLogout() {
    return true;
  }

  // 显示基准滑块
  private showSlider: boolean = false;

  // 当前国际化语言
  private langCurrent: string = AxVuexApp.lang;

  // 当前国际化描述
  private langCurrentText: string = '';

  // 根节点字体大小
  private rootFontSize: number = 14;

  // 当前用户信息
  private userInfo = AxVuexUser;

  // 国际化选项
  private langOptions: {
    key: string;
    text: string;
  }[] = AxVuexApp.localeList.map((locale) => ({
    key: locale.code,
    text: locale.name,
  }));

  // 主题可选项
  private themeOptions: {
    key: string;
    text: string;
  }[] = AxVuexApp.themeList.map((theme) => ({
    key: theme.code,
    text: theme.name,
  }));

  // 主题模式
  private themeMode: ThemeMode = ThemeMode.LIGHT;

  // 主题可选
  private themeModeList = ThemeMode;

  /**
   * 修改当前主题
   */
  private onThemeChange(theme: string) {
    AxVuexApp.setTheme(theme).then(() => {
      this.$router.go(0);
    });
  }

  /**
   * 修改国际化语言
   */
  private onLangChange(lang: string) {
    AxVuexApp.setLang(lang).then(() => {
      this.$router.go(0);
    });
  }

  /**
   * 基准改变
   */
  private rootFontChange() {
    document.getElementsByTagName(
      'html'
    )[0].style.fontSize = `${this.rootFontSize}px`;
  }

  /**
   * 切换面板
   * @param panel
   */
  private switchPanel(panel: IHeaderPanel) {
    this.panelCur = panel.text;
    this.$emit('switch-panel', panel);
    if (this.$router) {
      this.$router.push(panel.path);
    }
  }

  /**
   * 切换主题模式
   */
  private switchThemeMode() {
    if (this.themeMode === ThemeMode.LIGHT) {
      this.themeMode = ThemeMode.DARK;
    } else if (this.themeMode === ThemeMode.DARK) {
      this.themeMode = ThemeMode.LIGHT;
    } else {
      this.themeMode = ThemeMode.LIGHT;
    }
    AxStorageUtils.localSave('stage', 'themeMode', this.themeMode);
    AxStageBase.setThemeMode(this.themeMode);
  }

  /**
   * 初始化主题模式
   */
  private initThemeMode() {
    // 从存储中读取主题模式
    let themeMode = AxStorageUtils.localRead(
      'stage',
      'themeMode',
      ThemeMode.LIGHT
    ) as ThemeMode;
    if (!Object.values(ThemeMode).includes(themeMode)) {
      themeMode = ThemeMode.LIGHT;
    }
    this.themeMode = themeMode;
    AxStageBase.setThemeMode(this.themeMode);
  }

  private created() {
    // 默认国际化显示
    this.langCurrentText = AxGlobalLang.t(this.langCurrent);
    // 默认根节点字体大小显示
    this.rootFontSize = this.rootFont ?? 14;
    this.initThemeMode();
  }
}
</script>

<style lang="scss" scoped>
@import '../../core-module/src/assets/style/var';

.header_dropdown {
  display: none;
  position: absolute;
  width: 150px;
  background: white;
  box-shadow: 0 0 3px 3px rgba(165, 159, 159, 0.22);
  border-radius: 3px;

  > ul {
    padding: 0;
    margin: 5px 0;
    li {
      height: 35px;
      line-height: 35px;
      cursor: pointer;
      list-style: none;
      padding-left: 20px;
      font-size: 14px;

      &:hover {
        background: #e7f3fd;
      }
    }
  }
}

.stage_header {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  height: $header-height;
  line-height: $header-height;
  background-color: #fff;
  box-sizing: border-box;
  transition: all 0.3s ease;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: space-between;

  &_right {
    display: flex;
    align-items: center;

    .root_font {
      width: 50px;
      height: 30px;
      line-height: 30px;
      border: 1px solid #999999;
      border-radius: 3px;
      font-size: 14px;
      text-indent: 5px;

      &:focus {
        outline: none;
      }
    }

    > * {
      margin-right: 20px;
    }
  }

  &_logo {
    float: left;
    padding-left: 25px;
    overflow: hidden;
    cursor: pointer;

    > img {
      height: 32px;
      vertical-align: middle;
      border-style: none;
    }
  }

  &_title {
    height: $header-height;
    line-height: $header-height;
    font-size: 25px;
    display: inline-block;
    padding-left: 12px;
    font-weight: 700;
  }

  &_link {
    font-size: 16px;
    color: #2f4ae4;
    cursor: pointer;
  }
}

.theme_switch {
  position: relative;
  &:hover {
    .header_dropdown {
      display: block;
    }
  }

  .header_dropdown {
    left: -20px;
  }
}

.lang_switch {
  position: relative;
  &:hover {
    .header_dropdown {
      display: block;
    }
  }

  .header_dropdown {
    left: -20px;
  }
}

.user_info {
  position: relative;
  &:hover {
    .header_dropdown {
      display: block;
    }
  }

  .header_dropdown {
    width: 100px;
    right: 0;
  }
}
</style>
