import { AxMessage } from './index';
import Vue from 'vue';

declare module 'vue/types/vue' {
  interface Vue {
    $AxMessage: AxMessage;
  }
}
