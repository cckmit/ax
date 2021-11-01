/**
 * 节流
 * @param func
 * @param wait
 * @returns {() => void}
 */
// tslint:disable-next-line:ban-types
export function throttle(this: any, func: Function, wait: number) {
  let timeout: any = null;
  let callbackArgs: IArguments | null = null;
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const context = this;

  const later = () => {
    func.apply(context, callbackArgs);
    timeout = null;
  };

  // tslint:disable-next-line:only-arrow-functions
  return function () {
    if (!timeout) {
      // eslint-disable-next-line prefer-rest-params
      callbackArgs = arguments;
      timeout = setTimeout(later, wait);
    }
  };
}

/**
 * 防抖
 * @param func
 * @param wait
 * @param immediate
 * @returns {(this:any) => void}
 */
// tslint:disable-next-line:ban-types
export const debounce = (func: Function, wait: number, immediate?: boolean) => {
  let timeout: any;
  return function (this: any) {
    // tslint:disable-next-line:one-variable-per-declaration
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this,
      // eslint-disable-next-line prefer-rest-params
      args = arguments;
    const later = () => {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
};
/**
 * 延后
 * @param time 时间毫秒
 */
export const sleep = (time: number): Promise<any> => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

/**
 * 判断是否溢出省略号
 * @param dom
 */
export function isEllipsis(dom: HTMLElement) {
  // 拷贝一份,用于对比
  const checkDom = dom.cloneNode() as HTMLElement;
  checkDom.style.width = dom.offsetWidth + 'px';
  checkDom.style.height = dom.offsetHeight + 'px';
  checkDom.style.overflow = 'auto';
  checkDom.style.position = 'absolute';
  checkDom.style.zIndex = '-1';
  checkDom.style.opacity = ' 0';
  checkDom.style.whiteSpace = 'nowrap';
  checkDom.innerHTML = dom.innerHTML;

  const parent = dom.parentNode;
  if (parent === null) {
    return false;
  }
  parent.appendChild(checkDom);
  const flag = checkDom.scrollWidth > checkDom.offsetWidth;
  parent.removeChild(checkDom);
  return flag;
}

/**
 * 通过任意属性,获取每一条数据源对应的值
 * @param row 当前行数据
 * @param column 全部的列数据  要传入 this.totalColumn
 * @param attr 根据这个属性那数据,默认'id'
 * @return 返回 属性(id) 的值
 */
export function getValueByAttr(
  row: any,
  column: string[],
  attr: string = 'id'
): string {
  if (!row) {
    return '';
  }
  // 如果每一条数据是 Array 的话
  if (Array.isArray(row)) {
    // 返回的是 id 字段的 index 索引
    const index = column.findIndex((item: any) => attr === item);
    return row[index];
  } else {
    // 如果当前行的数据是对象,
    // 返回当前行的 id 属性的值
    return row[attr];
  }
}
