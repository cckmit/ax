import { generateActor, generateTest, RequestConfig } from '../../core/proxy';
import request from '../request';

// 生成正式api
export const actor = generateActor(request);

// 生成测试api
export const test = generateTest(request);

// 生成通用api
export const http = generateTest(request, false);

// 需要配置的模式
export const config = (config: RequestConfig) => {
  return {
    actor: generateActor(request, config),
    test,
    http,
  };
};
