import { AxVuexApp, AxVuexUser } from '@ax/app-core-framework';
import { ActorBase } from '../core/actor';
import { HttpConfig } from '../core/config';
import ApiCore from '../core';
import { RequestConfig } from '../core/proxy';
import Request from '../core/request';

// 创建请求服务
export const service = new Request({
  baseURL: HttpConfig.host.HOST_DATA_TENANT,
  redirect(data: any) {
    ApiCore.Service.redirect(data);
  },
});

/**
 * 请求服务
 */
export default function request<T>(data: {
  cmd: string;
  args: any[];
  config?: RequestConfig;
}) {
  return service.http<T>(
    'post',
    `api/json/Data-Tenant/${data.cmd}`,
    {},
    JSON.stringify(data.args),
    {
      headers: ActorBase.mixinHeader(
        {
          'Accept-Language': AxVuexApp.lang,
          'AX-Token': AxVuexUser.token,
        },
        data.config?.headers || {}
      ),
    },
    data.config?.axiosConfig || {}
  );
}
