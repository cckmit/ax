import { AxLanguage } from '@ax/app-core-framework';

// 全局国际化实例
declare const AxGlobalLang: AxLanguage<AxGlobalLocale.LangType>;

// 国际化类型定义等
export declare namespace AxGlobalLocale {
  // 语言标识
  const GLOBAL_LANG_KEY = 'global';

  // 国际化文件类型
  type LangType = {
    // <空>
    'text.blank': string;
    // <无>
    'text.nothing': string;
    // 是
    'text.true': string;
    // 否
    'text.false': string;
    // 操作
    'operate.operation': string;
    // 创建
    'operate.create': string;
    // 新增
    'operate.new': string;
    // 增加
    'operate.add': string;
    // 下载
    'operate.download': string;
    // 查看
    'operate.view': string;
    // 预览
    'operate.overview': string;
    // 编辑
    'operate.edit': string;
    // 修改
    'operate.modify': string;
    // 删除
    'operate.delete': string;
    // 确认
    'operate.confirm': string;
    // 取消
    'operate.cancel': string;
    // 关闭
    'operate.close': string;
    // 打开
    'operate.open': string;
    // 返回
    'operate.back': string;
    // 启用
    'operate.enable': string;
    // 禁用
    'operate.disable': string;
    // 还原
    'operate.revert': string;
    // 应用
    'operate.apply': string;
    // 保存
    'operate.save': string;
    // 搜索
    'operate.search': string;
    // 管理
    'operate.manage': string;
    // 操作成功
    'operate.success': string;
    // 操作失败
    'operate.failed': string;
    // 导入
    'operate.import': string;
    // 导出
    'operate.export': string;
    // 刷新
    'operate.refresh': string;
    // 上线
    'operate.online': string;
    // 离线
    'operate.offline': string;
    // 退出
    'operate.exit': string;
    // 查看
    'operate.check': string;
    // 上移
    'operate.move.up': string;
    // 下移
    'operate.move.down': string;
    // 左移
    'operate.move.left': string;
    // 右移
    'operate.move.right': string;
    // 全选
    'operate.check.all': string;
    // 简体中文
    zh_CN: string;
    // 英文（美国）
    en_US: string;
    // 中文名称
    '$name:zh_CN': string;
    // 英文名称
    '$name:en_US': string;
    // 中文说明
    '$nameExplain:zh_CN': string;
    // 英文说明
    '$nameExplain:en_US': string;
    // 删除数据
    'dialog.delete.action': string;
    // 删除多条数据
    'dialog.delete.multiple': string;
    // 删除 {0}
    'dialog.delete.target': string;
    // 增加成功
    'tips.confirm.add': string;
    // 编辑成功
    'tips.confirm.edit': string;
    // 删除成功
    'tips.confirm.delete': string;
    // 请选择一条数据进行编辑。
    'tips.edit.check': string;
    // 请在删除前选中需要删除的数据。
    'tips.delete.check': string;
    // 您确定要删除 {0} 吗？
    'tips.delete.confirm.single': string;
    // 您确定要删除选中的 {0} 条数据吗？
    'tips.delete.confirm.multiple': string;
    // 您确定要启用{0}吗？
    'tips.operate.enabled': string;
    // 您确定要禁用{0}吗？
    'tips.operate.disabled': string;
    // 启用成功
    'tips.confirm.enabled': string;
    // 禁用成功
    'tips.confirm.disabled': string;
  };

  // 国际化文件支持的key
  type LangKey = keyof LangType;
}

export default AxGlobalLang;
