// 全局中文语言
const zh_CN = {
  //#region 文本显示
  // 空值
  'text.blank': '<空>',
  'text.nothing': '<无>',
  'text.true': '是',
  'text.false': '否',
  //#endregion

  //#region 操作
  // 基本操作
  'operate.operation': '操作',
  'operate.create': '创建',
  'operate.new': '新增',
  'operate.add': '增加',
  'operate.download': '下载',
  'operate.view': '查看',
  'operate.overview': '预览',
  'operate.edit': '编辑',
  'operate.modify': '修改',
  'operate.delete': '删除',
  'operate.confirm': '确认',
  'operate.cancel': '取消',
  'operate.close': '关闭',
  'operate.open': '打开',
  'operate.back': '返回',
  'operate.enable': '启用',
  'operate.disable': '禁用',
  'operate.revert': '还原',
  'operate.apply': '应用',
  'operate.save': '保存',
  'operate.search': '搜索',
  'operate.manage': '管理',
  'operate.success': '操作成功',
  'operate.failed': '操作失败',
  'operate.import': '导入',
  'operate.export': '导出',
  'operate.refresh': '刷新',
  'operate.online': '上线',
  'operate.offline': '离线',
  'operate.exit': '退出',

  'operate.check': '查看',

  // 移动
  'operate.move.up': '上移',
  'operate.move.down': '下移',
  'operate.move.left': '左移',
  'operate.move.right': '右移',

  // 选择
  'operate.check.all': '全选',
  //#endregion

  //#region 国际化
  // 语言种类
  zh_CN: '简体中文',
  en_US: '英文（美国）',

  // 名称
  '$name:zh_CN': '中文名称',
  '$name:en_US': '英文名称',

  // 说明
  '$nameExplain:zh_CN': '中文说明',
  '$nameExplain:en_US': '英文说明',
  //#endregion

  //#region 弹窗
  // 删除
  'dialog.delete.action': '删除数据',
  'dialog.delete.multiple': '删除多条数据',
  'dialog.delete.target': '删除 {0}',
  //#endregion

  //#region 提示语
  'tips.confirm.add': '增加成功',
  'tips.confirm.edit': '编辑成功',
  'tips.confirm.delete': '删除成功',
  'tips.edit.check': '请选择一条数据进行编辑。',
  // 删除
  'tips.delete.check': '请在删除前选中需要删除的数据。',
  'tips.delete.confirm.single': '您确定要删除 {0} 吗？',
  'tips.delete.confirm.multiple': '您确定要删除选中的 {0} 条数据吗？',
  // 启用、禁用
  'tips.operate.enabled': '您确定要启用{0}吗？',
  'tips.operate.disabled': '您确定要禁用{0}吗？',
  'tips.confirm.enabled': '启用成功',
  'tips.confirm.disabled': '禁用成功',
  //#endregion
};

export default zh_CN;

export type TLangGlobal = typeof zh_CN;

export type TLangGlobalKey = keyof TLangGlobal;
