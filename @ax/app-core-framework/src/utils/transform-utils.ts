// 数据转换工具类
export default class TransformUtils {
  /**
   * 将返回的数组转换为树形数据
   * @param arr 要处理的数组
   * @param options 节点关系配置
   * @returns {T[]}
   */
  public static arrayToTree<T>(
    arr: T[],
    options?: {
      // 用来绑定关系的键
      key?: keyof T;
      // 用来绑定父节点key的键
      parent?: keyof T;
      // 子节点数的键
      children?: keyof T | string;
    }
  ): any[] {
    // 获取绑定参数
    const {
      key = 'id' as keyof T,
      children = 'children' as keyof T | string,
      parent = 'pid' as keyof T,
    } = options ?? {};
    // 转换为树数据
    return arr.reduce((tree: any[], node) => {
      // 是否有父级
      const p: any = arr.find((i) => i[key] === node[parent]);
      // 是顶层的话
      if (!p) {
        // 添加根节点到数中
        tree.push(node);
      } else {
        // 已经有子节点的情况下添加节点到子节点中
        if (p[children]?.length) {
          p[children].push(node);
        } else {
          // 设置子节点
          (p[children] as T[]) = [node];
        }
      }
      // 返回树数据
      return tree;
    }, []) as T[];
  }
}
