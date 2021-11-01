<template>
  <div ref="ax-search" class="ax_search">
    <div class="search_title">
      <!--      @focus.self="on"-->
      <ax-input
        ref="axInput"
        v-model="dataGet"
        type="text"
        :clearable="clearable"
        :placeholder="placeholderStr"
        @keyup.enter.native="clickSearch"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      >
        <i
          slot="inner-right"
          class="el-input__icon el-icon-search"
          @click="clickSearch"
        ></i>
      </ax-input>
    </div>
    <div v-show="historyVisible && history" class="search_history">
      <div class="history_title">
        <span>{{ UILang.t('search.search.history') }}</span>
        <span class="clear" @click="hisVisible = true">
          {{ UILang.t('search.clear.history') }}
        </span>
      </div>
      <div class="history_data">
        <span
          v-for="(item, index) in historyData"
          :key="index"
          :title="item.text"
          @click="setValue(item)"
        >
          {{ item.text }}
        </span>
      </div>
      <hr />
      <div class="history_title">
        <span>{{ UILang.t('search.search.result.history') }}</span>
        <span class="clear" @click="tagVisible = true">
          {{ UILang.t('search.clear.result.history') }}
        </span>
      </div>
      <div class="history_tag">
        <!-- 标签显示 -->
        <span
          v-for="(item, index) in historyTag"
          :key="index"
          :title="item.text"
          @click="selectTag(item)"
        >
          <i class="el-tag__close el-icon-close" @click="closeTag(item)"></i>
          {{ item.text }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { UILang} from '@AxUI/ax-com-core';
import AxInput from '@AxUI/ax-input';
import {Component, Model, Prop, Ref, Vue, Watch} from 'vue-property-decorator';
import {Input} from "element-ui";

@Component({
  // model: {
  //   // 设置 v-model 对应的数据及方法
  //   prop: 'data',
  //   event: 'change',
  // },
  components: { AxInput },
})
export default class AxSearch extends Vue {
  @Model('change', { type: String,default:'' })
  public searchData!: string;
  public dataGet: string ='';

@Watch('Watch')
  private   dataWatch(){
    this.dataGet = this.searchData;
  }
 //
 // private set  dataGet(val:string){
 //  this.searchData =val;
 //  }

  // 国际化
  private UILang = UILang;

  selectTag() {}

  closeTag() {}


  //
  // @Emit()
  // private modelChange(value: string) {
  //   return value;
  // }

  // 当前对象本身Ref
  @Ref('ax-search') readonly refSelf?: Node;

  // 搜索结果数据
  @Prop({ default: undefined })
  private resultData?: any[];

  // 是否使用历史记录模式
  @Prop({ default: false, type: Boolean })
  private history?: false;

  /**
   * 默认提示文本（占位符）
   */
  @Prop({ default: undefined })
  private placeholder?: string;

  /**
   * 是否允许清空组件内容
   */
  @Prop({ default: true })
  public clearable?: boolean;



  /**
   * placeholder的显示
   * @returns {string}
   */
  private get placeholderStr(): string {
    return this.placeholder === undefined
      ? UILang.t('search.placeholder')
      : this.placeholder;
  }

  // // 输入框变量 getter
  // private get value(): any {
  //   return this.data;
  // }
  //
  // // 输入框变量 setter
  // private set value(val: any) {
  //   this.$emit('change', val);
  // }

  // 清空结果历史记录弹框标识
  // private tagVisible?: boolean = false;

  // 清空历史记录弹框标识
  // private hisVisible?: boolean = false;

  // 是否请求过并在次显示搜索结果
  private isOnceResult?: boolean = false;

  // 是否请求标识
  private isRequest?: boolean = false;

  // 输入记录
  private historyData?: any[] = [];

  // 搜索记录
  private historyTag?: any[] = [];

  // 历史框
  private historyVisible?: boolean = false;

  // 搜索结果框
  private resultVisible?: boolean = false;

  // 搜索结果简况
  private resultTag?: boolean = false;

  // 分类显示
  // private isSort?: boolean = true;

  // private get getResultData() {
  //   if (this.resultData) {
  //     // 设置请求标识
  //     this.isRequest = true;
  //     // 关闭历史框
  //     this.historyVisible = false;
  //   }
  //   return this.resultData;
  // }

  /**
   * ???
   */
  private setValue() {}

  // 搜索方法
  private clickSearch() {
    // 去除空格
    // const term = (this.data + '').replace(/\s+/g, '');
    // 发布事件
    this.$emit('search', (this.dataGet + '').trim());
  }

  // 展示历史框
  private on() {
    if (!this.resultTag) {
      if (this.isOnceResult) {
        this.resultVisible = true;
        this.resultTag = false;
      } else {
        // 获取需要显示的历史记录
        /* list([this.$store.getters.language])
          .then(res => {
            // 判断是否请求成功
            if (res.code !== 1) return;
            this.historyData = res.data.searchHiss;
            this.historyTag = res.data.searchResults;
          })
          .catch(res => {
          }); */
        // 历史记录显示
        this.resultVisible
          ? (this.historyVisible = false)
          : (this.historyVisible = true);
        // 点击事件侦听
        document.addEventListener('click', this.off);
      }
    }
    if (this.resultTag) {
      this.resultVisible = true;
      this.resultTag = false;
    }
  }

  // 关闭历史框
  private off(e: any) {
    // 判断是否存在
    if (!this.refSelf) return;
    // 判断是否是搜索模块
    if (!this.refSelf.contains(e.target)) {
      // 判断是否是再次显示
      if (
        !this.isRequest &&
        this.resultVisible &&
        this.isOnceResult &&
        this.resultData &&
        this.resultData.length > 1
      ) {
        this.resultTag = true;
      }
      // 关闭面板
      this.historyVisible = false;
      this.resultVisible = false;
      // 判断是否已经请求
      if (this.isRequest && this.resultData && this.resultData.length > 1) {
        this.resultTag = true;
      }
    }
  }

  /**
   * 修改时的处理
   * @param event
   */
  private handleChange(val: string): void {
    this.$emit('change', val);
  }

  /**
   * 获取焦点处理
   * @param event
   */
  private handleFocus(event: Event): void {
    this.$emit('focus', event);
  }

  /**
   * 失去焦点处理
   * @param event
   */
  private handleBlur(event: Event): void {
    this.$emit('blur', event);
  }

  /**
   * 获取焦点方法
   */
  public focus(): AxSearch {
    // 调用组件的获取焦点方法
    (this.$refs.axInput as Input).focus();
    (this.$refs.axInput as Input).select();
    // 返回当前对象
    return this;
  }
}
</script>
