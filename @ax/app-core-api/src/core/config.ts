// Http配置
class Config<Host> {
  constructor(options: { host: Host }) {
    // 配置host
    this.host = options.host;
    // 获取全局window对象
    const win: any = window;
    // 海阔去全局配置
    const host: Host | undefined = win.GLOBAL_CONFIG?.host;
    // 如果有全局的配置的情况下使用全局配置
    if (host) {
      Object.assign(this.host, host);
    }
  }

  // 请求host
  public host: Host;
}

// 默认配置地址
const hostConfigDefault = {
  // 上传接口请求地址
  HOST_UPLOAD: 'http://nncs-data-services-upload.staging.iot-city.net:31027/',
  // 应用支撑平台请求地址
  HOST_BACKSTAGE: 'http://backstage.staging.iot-city.net:31027/',
  // 数据中台-系统设置 服务器地址
  HOST_DATA_SETTING: 'http://m-data-settings-impl.staging.iot-city.net:31027/',
  // 数据中台-租户中心 服务器地址
  HOST_DATA_TENANT: 'http://m-data-tenant-impl.staging.iot-city.net:31027/',
  // 业务中台-数据中心 服务器地址
  HOST_BIZ_DATA: 'http://m-biz-data-impl.staging.iot-city.net:31027/',
  // 业务中台-用户中心 服务器地址
  HOST_BIZ_USER: 'http://biz-user.staging.iot-city.net:31027/',
  // 应用系统-智慧停车系统 服务器地址
  HOST_APP_PARKING: 'http://m-app-parking-impl.staging.iot-city.net:31027/',
  // 应用系统-智慧停车系统 推送服务器地址
  WS_APP_PARKING:
    'ws://m-app-parking-impl.staging.iot-city.net:31027/websocket/',
  // 应用系统-智慧停车系统 车辆接入
  WS_APP_PARKING_ACTION:
    'ws://m-app-parking-action.staging.iot-city.net:31027/websocket/',
  // 视频推流
  VIDEO_HTTP_FLV: 'http://srs-docker.dev.iot-city.net:31027/',
  // 推流配置
  VIDEO_CONFIG: 'http://srs-docker.ai.dev.iot-city.net:31027/',
};

// 设置请求配置
export const HttpConfig = new Config({
  host: hostConfigDefault,
});
