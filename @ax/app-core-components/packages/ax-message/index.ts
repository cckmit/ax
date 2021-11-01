import { showAlert, showNotify, showLoading } from './src/message';

export default class AxMessage {
  public static alert = showAlert;
  public static loading = showLoading;
  public static notify = showNotify;
}
