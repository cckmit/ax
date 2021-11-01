export default class DomUtils {
  protected constructor() {}

  /**
   * 浏览器类型对象
   */
  public static BROWSER = (() => {
    // 获取浏览器信息
    const ua = window.navigator.userAgent.toLowerCase();
    let s: RegExpMatchArray | null;
    const nav = { ie: 0, firefox: 0, chrome: 0, opera: 0, safari: 0 };
    // 初始化浏览器类型
    s = ua.match(/msie\s([\d.]+)/);
    if (s && s.length > 1) nav.ie = parseFloat(s[1]);
    s = ua.match(/trident.*rv:([\d.]+)/);
    if (s && s.length > 1) nav.ie = parseFloat(s[1]);
    s = ua.match(/firefox\/([\d.]+)/);
    if (s && s.length > 1) nav.firefox = parseFloat(s[1]);
    s = ua.match(/chrome\/([\d.]+)/);
    if (s && s.length > 1) nav.chrome = parseFloat(s[1]);
    s = ua.match(/opera.([\d.]+)/);
    if (s && s.length > 1) nav.opera = parseFloat(s[1]);
    s = ua.match(/version\/([\d.]+).*safari/);
    if (s && s.length > 1) nav.safari = parseFloat(s[1]);
    s = ua.match(/crios\/([\d.]+).*safari/);
    if (s && s.length > 1) nav.chrome = parseFloat(s[1]);
    // 返回对象
    return nav;
  })();

  /**
   * 获取当前浏览器多国语言标识（如：zh_CN, en_US...）
   * @returns {string} 语言标识
   */
  public static getDefaultLanguageKey(): string {
    // 获取浏览器语言
    let lang = window.navigator.language
      ? window.navigator.language
      : (window.navigator as any).browserLanguage;
    // 判断是否有效
    if (!lang || lang.length === 0) {
      lang = 'en_US';
    } else {
      // 替换分隔符
      lang = lang.replace('-', '_');
      const pos = lang.indexOf('_');
      if (pos !== -1)
        lang = lang.substring(0, pos) + lang.substring(pos).toUpperCase();
      if (lang === 'zh') lang = 'zh_CN';
      if (lang === 'en') lang = 'en_US';
    }
    // 返回数据
    return lang;
  }

  /**
   * 绑定处理方法（支持多个方法名称）
   * @param {HTMLElement | Window | Document} e HTML 元素
   * @param {string[]|string} methods 方法名称数组
   * @param {(event: Event) => any} handler 事件处理函数
   * @returns {boolean} 是否绑定成功
   */
  public static addDomEventListener(
    e: HTMLElement | Window | Document,
    methods: string | string[],
    handler: (event: Event) => any
  ): boolean {
    // 判断是否有效
    if (!e || !methods || !handler) return false;
    // 转换对象
    const ele = e as any;
    // 判断是否是数组
    if (!(methods instanceof Array)) {
      // 把字符串改为数组
      methods = methods.split(',');
    }
    // 遍历绑定方法
    for (let i = 0, c = methods.length; i < c; i++) {
      // 获取一个方法
      let m = methods[i];
      // 判断是否有效
      if (!m || m.length === 0) continue;
      // 转换为小写
      m = m.trim().toLowerCase();
      // 判断是否具有标准方法
      if (ele.addEventListener) {
        // 去除 on 前缀
        if (m.indexOf('on') === 0) m = m.substr(2);
        // 增加事件处理
        ele.addEventListener(m, handler, false);
      } else if (ele.attachEvent) {
        // 兼容 IE 浏览器
        if (m.indexOf('on') !== 0) m = 'on' + m;
        // 绑定方法
        ele.attachEvent(m, handler);
      }
    }
    // 返回成功
    return true;
  }

  /**
   * 解除绑定处理方法（支持多个方法名称）
   * @param {HTMLElement | Window | Document} e HTML 元素
   * @param {string[]|string} methods 方法名称数组
   * @param {(event: Event) => any} handler 事件处理函数
   * @returns {boolean} 是否解绑成功
   */
  public static removeDomEventListener(
    e: HTMLElement | Window | Document,
    methods: string[] | string,
    handler: (event: Event) => any
  ): boolean {
    // 判断是否有效
    if (!e || !methods || !handler) return false;
    // 转换对象
    const ele = e as any;
    // 判断是否是数组
    if (!(methods instanceof Array)) {
      // 把字符串改为数组
      methods = methods.split(',');
    }
    // 遍历绑定方法
    for (let i = 0, c = methods.length; i < c; i++) {
      // 获取一个方法
      let m = methods[i];
      // 判断是否有效
      if (!m || m.length === 0) continue;
      // 转换为小写
      m = m.trim().toLowerCase();
      // 判断是否具有标准方法
      if (ele.removeEventListener) {
        // 去除 on 前缀
        if (m.indexOf('on') === 0) m = m.substr(2);
        // 增加事件处理
        ele.removeEventListener(m, handler, false);
      } else if (ele.detachEvent) {
        // 兼容 IE 浏览器
        if (m.indexOf('on') !== 0) m = 'on' + m;
        // 绑定方法
        ele.detachEvent(m, handler);
      }
    }
    // 返回成功
    return true;
  }

  /**
   * 发布 DOM 事件处理
   * @param {HTMLElement} e HTML 元素
   * @param {string[]} methods 方法名称数组
   * @param {Event} [evt] 事件对象（可选）
   * @returns {boolean} 是否发布成功
   */
  public static dispatchDomEvent(
    e: HTMLElement,
    methods: string[],
    evt?: Event
  ): boolean {
    // 判断是否有效
    if (!e || !methods || methods.length === 0) return false;
    // 转换对象
    const ele = e as any;
    // 遍历发布事件
    for (let i = 0, c = methods.length; i < c; i++) {
      // 获取一个方法
      let m = methods[i];
      // 判断是否有效
      if (!m || m.length === 0) continue;
      // 转换为小写
      m = m.toLowerCase();
      // 判断是否存在 fireEvent 方法
      if (ele.fireEvent) {
        // 兼容 IE 浏览器
        if (m.indexOf('on') !== 0) m = 'on' + m;
        // 创建事件对象
        if (!evt) evt = (document as any).createEventObject();
        // 发布事件
        ele.fireEvent(m, evt);
      } else if (document.createEvent) {
        // 标准浏览器方法
        if (m.indexOf('on') === 0) m = m.substr(2);
        // 判断是否有效
        if (!evt) {
          // 创建对象
          evt = document.createEvent(
            m.indexOf('click') >= 0 || m.indexOf('mouse') >= 0
              ? 'MouseEvents'
              : 'HTMLEvents'
          );
        }
        // 初始化事件对象
        evt.initEvent(m, true, true);
        // 发布事件
        e.dispatchEvent(evt);
      }
    }
    // 返回成功
    return true;
  }

  /**
   * 获取事件目标对象
   * @param {Event} evt 事件对象
   * @returns {HTMLElement | null} 事件对象
   */
  public static getDomEventTarget(evt?: Event): HTMLElement | null {
    // 获取事件对象
    const ev = evt ? evt : window.event;
    // 获取事件对象
    return ev ? ((ev.target ? ev.target : ev.srcElement) as HTMLElement) : null;
  }

  /**
   * 获取事件按键代码（keyCode）
   * @param {Event} evt 事件对象
   * @returns {number} 按键值
   */
  public static getDomEventKeyCode(evt: Event): number {
    // 获取事件对象
    const ev = (evt ? evt : window.event) as KeyboardEvent;
    if (ev) {
      let kc = ev.keyCode || ev.which;
      if (!kc || isNaN(kc)) kc = 0;
      return kc;
    }
    return 0;
  }

  /**
   * 把事件的 KEYCODE 转换为字符串（无效返回 undefined ）
   * @param {Event} evt 事件对象
   * @param {boolean} [includeFuncKey] 是否包含功能按键字符串返回（如：F1, Esc 等；默认：false）
   * @returns {string|undefined} 按键字符串
   */
  public static keyCodeToString(
    evt: Event,
    includeFuncKey = false
  ): string | undefined {
    // 获取事件对象
    const ev = (evt ? evt : window.event) as KeyboardEvent;
    // 获取按键
    const key = ev.keyCode || ev.which;
    // 获取是否按下 shift 键
    const shiftKey = ev.shiftKey;
    // 定义字符
    let ch;
    if (key >= 65 && key <= 90) {
      // A-Z
      ch = String.fromCharCode(key);
      return shiftKey ? ch.toUpperCase() : ch.toLowerCase();
    } else if (key >= 48 && key <= 57) {
      // 0-9
      if (shiftKey)
        return [')', '!', '@', '#', '$', '%', '^', '&', '*', '('][key - 48];
      return String.fromCharCode(key);
    } else {
      // Num pad
      let ks = this.BROWSER.opera
        ? [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 78, 47, 42, 45, 43]
        : [
            96,
            97,
            98,
            99,
            100,
            101,
            102,
            103,
            104,
            105,
            110,
            111,
            106,
            109,
            107,
          ];
      let i = ks.indexOf(key);
      if (i !== -1)
        return [
          '0',
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '.',
          '/',
          '*',
          '-',
          '+',
        ][i];
      // Special keys
      ks =
        this.BROWSER.ie || this.BROWSER.chrome
          ? [192, 189, 187, 219, 221, 186, 222, 220, 188, 190, 191]
          : this.BROWSER.opera
          ? [96, 45, 61, 91, 93, 59, 39, 92, 44, 46, 47]
          : [192, 109, 61, 219, 221, 59, 222, 220, 188, 190, 191];
      i = ks.indexOf(key);
      if (i !== -1) {
        const kss = shiftKey
          ? ['~', '_', '+', '{', '}', ':', '"', '|', '<', '>', '?']
          : ['`', '-', '=', '[', ']', ';', "'", '\\', ',', '.', '/'];
        return kss[i];
      }
      if (includeFuncKey) {
        // Function key(e.g. F1, Esc)
        ks = [
          27,
          9,
          20,
          16,
          17,
          18,
          32,
          91,
          92,
          93,
          8,
          13,
          45,
          36,
          33,
          46,
          35,
          34,
          38,
          37,
          40,
          39,
          144,
          112,
          113,
          114,
          115,
          116,
          117,
          118,
          119,
          120,
          121,
          122,
          123,
          145,
          19,
        ];
        i = ks.indexOf(key);
        if (i !== -1)
          return [
            'Esc',
            'Tab',
            'Caps Lock',
            'Shift',
            'Ctrl',
            'Alt',
            'Space',
            'Win',
            'Win',
            'Menu',
            'Back Space',
            'Enter',
            'Insert',
            'Home',
            'Page Up',
            'Delete',
            'End',
            'Page Down',
            'Up',
            'Left',
            'Down',
            'Right',
            'Num Lock',
            'F1',
            'F2',
            'F3',
            'F4',
            'F5',
            'F6',
            'F7',
            'F8',
            'F9',
            'F10',
            'F11',
            'F12',
            'Scroll Lock',
            'Pause Break',
          ][i];
      }
    }
    // 默认返回无效
    return undefined;
  }

  /**
   * 取消事件
   * @param {Event} evt 事件对象
   * @param {boolean} cancelBubble 是否取消冒泡（可选；默认：true - 取消冒泡）
   * @returns {boolean} 是否允许事件继续
   */
  public static cancelDomEvent(evt: Event, cancelBubble = true): boolean {
    const ev: any = evt ? evt : window.event;
    if (!ev) return false;
    ev.returnValue = false;
    // keyCode只有getter
    // ev.keyCode = 0;
    ev.wheelDelta = 0;
    // ev.detail = 0;
    if (ev.preventDefault) {
      ev.preventDefault();
    }
    if (cancelBubble) {
      ev.cancelBubble = true;
      if (ev.stopPropagation) {
        ev.stopPropagation();
      }
    }
    return false;
  }

  /**
   * 禁止事件冒泡
   * @param {Event} evt 事件对象
   * @returns {boolean} 是否允许事件继续
   */
  public static cancelDomEventBubble(evt: Event): boolean {
    const ev = evt ? evt : window.event;
    if (ev) {
      if (ev.stopPropagation) {
        ev.stopPropagation();
      }
      ev.cancelBubble = true;
    }
    return true;
  }

  /**
   * 取消滚动冒泡
   * @param {Event} evt 事件对象
   * @param {HTMLElement} scrollElement 滚动元素对象（可选，不设置直接使用事件目标对象）
   * @returns {boolean} 是否允许事件继续
   */
  public static cancelDomWheelBubble(
    evt: MouseEvent,
    scrollElement: HTMLElement
  ): boolean {
    const ev: any = (evt ? evt : window.event) as MouseEvent;
    if (!ev) return false;
    let wheel = ev.detail ? ev.detail : ev.wheelDelta ? ev.wheelDelta * -1 : 0;
    if (this.BROWSER.firefox) wheel *= 30;
    if (isNaN(wheel)) wheel = 0;
    if (wheel === 0) return false;
    let e = scrollElement;
    if (!e) e = ev.target || ev.srcElement;
    let top = e.scrollTop + wheel;
    if (top < 0) top = 0;
    if (top > e.scrollHeight) top = e.scrollHeight;
    if (e.scrollTop !== top) {
      window.setTimeout(() => {
        e.scrollTop = top;
      }, 10);
    }
    return this.cancelDomEvent(evt);
  }

  /**
   * 判断是否是操作按键（非键盘输入键）
   * @param {number} k 键值（keyCode）
   * @returns {boolean} 是否是操作按键
   */
  public static isDomControlKey(k: number): boolean {
    const ks = this.BROWSER.opera
      ? [8, 9, 13, 16, 17, 18, 20, 27, 33, 34, 35, 36, 37, 38, 40, 144]
      : [
          8,
          9,
          13,
          16,
          17,
          18,
          20,
          27,
          33,
          34,
          35,
          36,
          37,
          38,
          40,
          144,
          45,
          46,
          91,
          93,
          39,
          92,
        ];
    return ks.indexOf(k) !== -1;
  }

  /**
   * 获取元素当前样式
   * @param {HTMLElement} e 元素对象或标识
   * @param {string} styleName 样式名称（如："border-color"）
   * @param {string} defaultStyle 默认返回样式
   * @returns {string} 获取到的样式字符串
   */
  public static getDomStyle(
    e: HTMLElement,
    styleName: string,
    defaultStyle: string
  ): string {
    if (!e || !styleName) return defaultStyle;
    let sty = null;
    if (
      document.defaultView &&
      typeof document.defaultView.getComputedStyle === 'function'
    ) {
      const csty = document.defaultView.getComputedStyle(e, null) as any;
      sty = csty[styleName];
    } else {
      const el = e as any;
      sty = el.currentStyle ? el.currentStyle[styleName] : null;
    }
    return sty && sty.length > 0 ? sty : defaultStyle;
  }

  /**
   * 获取元素在文档内的位置
   * @param {Element} e 元素对象或标识
   * @param {Element} limitParent 查找结束的上级对象（可选，默认不限制，查找时包含此对象）
   * @returns {object} {left:xxx,top:xxx}
   */
  public static getDomPosition(
    e: Element,
    limitParent?: Element
  ): { left: number; top: number } {
    if (!e) return { left: 0, top: 0 };
    let l = 0;
    let t = 0;
    let sl = 0;
    let st = 0;
    let bt;
    let bl;
    let p = e as HTMLElement;
    // 循环遍历数据
    do {
      // 判断是否限制了父节点
      if (limitParent && limitParent === p) break;
      // 增加滚动条位置
      if (p !== e) {
        sl = p.scrollLeft ? p.scrollLeft : 0;
        st = p.scrollTop ? p.scrollTop : 0;
        l -= sl;
        t -= st;
      }
      // 增加父级节点位置
      l += p.offsetLeft;
      t += p.offsetTop;
      // 判断是否浮动
      if (p !== e && this.getDomStyle(p, 'position', '') !== 'absolute') {
        // 增加边线宽度
        bt = this.getDomStyle(p, 'border-top-width', '0px');
        if (bt !== '0px') t += parseInt(bt, 10);
        bl = this.getDomStyle(p, 'border-left-width', '0px');
        if (bl !== '0px') l += parseInt(bl, 10);
      }
      // 获取父级元素
      p = p.offsetParent as HTMLElement;
    } while (p);
    // 返回数据
    return {
      left: l,
      top: t,
    };
  }

  /**
   * 判断当前对象是否是窗体对象
   * @param {object} obj 测试的对象
   * @returns {boolean} 是否是窗体对象
   */
  public static isDomWindow(obj: any): boolean {
    if (!obj) return false;
    const reg = /Window|global/;
    const inc = reg.test({}.toString.call(obj));
    const iec = obj === obj.document && obj.document !== obj;
    return inc || iec;
  }

  /**
   * 判断当前对象是否是文档对象
   * @param {object} obj 测试的对象
   * @returns {boolean} 是否是窗体对象
   */
  public static isDomDocument(obj: any): boolean {
    if (!obj) return false;
    return !!(obj.createElement && obj.documentElement);
  }

  /**
   * 获取滚动条信息，返回：{width:xxx,height:xxx,left:xxx,top:xxx}
   * @param {HTMLElement} e 元素对象或标识
   * @returns {Object} {width:xxx,height:xxx,left:xxx,top:xxx}
   */
  public static getDomScroll(
    e: HTMLElement | Window
  ): { width: number; height: number; left: number; top: number } {
    if (!e)
      return {
        width: 0,
        height: 0,
        left: 0,
        top: 0,
      };
    let t = 0;
    let l = 0;
    let w = 0;
    let h = 0;
    if (this.isDomWindow(e)) {
      let te;
      const win = e as any;
      if (win.innerWidth) {
        w = win.innerWidth + (win.scrollMaxX ? win.scrollMaxX : 0);
      }
      if (win.innerHeight) {
        h = win.innerHeight + (win.scrollMaxY ? win.scrollMaxY : 0);
      }
      te = win.document.documentElement;
      if (te && typeof te.scrollTop === 'number') {
        t = te.scrollTop;
        l = te.scrollLeft;
        w = Math.max(w, te.scrollWidth);
        h = Math.max(h, te.scrollHeight);
      }
      te = win.document.body;
      if (te) {
        t = Math.max(t, te.scrollTop);
        l = Math.max(l, te.scrollLeft);
        w = Math.max(te.scrollWidth);
        h = Math.max(te.scrollHeight);
      }
    } else {
      const el = e as any;
      t = el.scrollTop;
      l = el.scrollLeft;
      w = el.scrollWidth;
      h = el.scrollHeight;
    }
    return {
      width: Math.max(0, w),
      height: Math.max(0, h),
      left: Math.max(0, l),
      top: Math.max(0, t),
    };
  }

  /**
   * 获取浏览器窗口大小
   * @param {Window} win 窗口对象（可选）
   * @returns {Object} {width:xxx,height:xxx}
   */
  public static getWindowSize(win?: Window): { width: number; height: number } {
    if (!win) win = window;
    let w = 0;
    let h = 0;
    const doc = win.document;
    const te = doc.documentElement;
    if (te && (te.clientHeight || te.offsetHeight)) {
      h = Math.min(te.clientHeight, te.offsetHeight);
    }
    if (win.innerHeight) {
      h = h > 0 ? Math.min(h, win.innerHeight) : win.innerHeight;
    }
    if (te && (te.clientWidth || te.offsetWidth)) {
      w = Math.min(te.clientWidth, te.offsetWidth);
    }
    if (win.innerWidth) {
      w = w > 0 ? Math.min(w, win.innerWidth) : win.innerWidth;
    }
    if (w === 0 || h === 0) {
      const scroll = this.getDomScroll(win);
      if (w === 0) w = scroll.width;
      if (h === 0) h = scroll.height;
    }
    return {
      width: Math.max(0, w),
      height: Math.max(0, h),
    };
  }

  /**
   * 获取文档页面大小
   * @param {Window} win 窗口对象
   * @returns {Object} {width:xxx,height:xxx}
   */
  public static getDocumentSize(
    win?: Window
  ): { width: number; height: number } {
    let w = 0;
    let h = 0;
    let te;
    if (!win) win = window;
    const wins = win as any;
    const doc = win.document;
    if (win.innerHeight) {
      h = win.innerHeight + (wins.scrollMaxY ? wins.scrollMaxY : 0);
    }
    te = doc.documentElement;
    if (te && te.clientHeight) {
      h = Math.max(h, te.clientHeight);
    }
    te = doc.body;
    if (te) {
      h = Math.max(h, te.clientHeight);
    }
    if (win.innerWidth) {
      w = win.innerWidth + (wins.scrollMaxX ? wins.scrollMaxX : 0);
    }
    te = doc.documentElement;
    if (te && te.clientWidth) {
      w = Math.max(w, te.clientWidth);
    }
    te = doc.body;
    if (te) {
      w = Math.max(w, te.clientWidth);
    }
    const scroll = this.getDomScroll(win);
    w = Math.max(w, scroll.width);
    h = Math.max(h, scroll.height);
    return {
      width: Math.max(0, w),
      height: Math.max(0, h),
    };
  }

  /**
   * 获取事件鼠标滚轮操作值（返回值：>0 - 向下滚动；<0 - 向上滚动；0 - 不滚动）
   * @param {MouseEvent} evt 事件对象
   * @returns {number} 滚动值
   */
  public static getDomEventWheel(evt: MouseEvent): number {
    const ev: any = evt ? evt : window.event;
    if (ev) {
      let detail = parseInt(
        ev.detail ? ev.detail : ev.wheelDelta ? ev.wheelDelta * -1 : 0,
        10
      );
      if (this.BROWSER.firefox) detail *= 30;
      if (isNaN(detail)) detail = 0;
      return detail;
    }
    return 0;
  }

  /**
   * 查找上级对象（条件判断包含对象本身）
   * @param e 当前对象
   * @param idValue 上级对象标志值（可选，null 表示不查找）
   * @param nameValue 上级对象名称值（可选，null 表示不查找）
   * @param classNameValue 上级对象样式类值（可选，null 表示不查找）
   * @param tagNameValue 上级对象标签值（可选，null 表示不查找）
   * @param attributeName 上级对象属性名称（可选，null 表示不查找）
   * @param attributeValue 上级对象属性值（可选，null 表示不查找）
   * @param levels 向上查询最多级数（可选，达到该次数后不再向上查询，默认 0 表示不限制）
   * @param limitParent 查找结束的上级对象（可选，默认不限制）
   * @returns 上级对象（undefined 表示不存在）
   */
  public static getDomParent(
    e: HTMLElement,
    idValue?: string,
    nameValue?: string,
    classNameValue?: string,
    tagNameValue?: string,
    attributeName?: string,
    attributeValue?: any,
    levels = 0,
    limitParent?: HTMLElement
  ): HTMLElement | undefined {
    if (e && e.parentNode) {
      let i = 0;
      const p: any = e;
      if (tagNameValue) tagNameValue = tagNameValue.toUpperCase();
      do {
        if (levels > 0) {
          if (i > levels) break;
          i++;
        }
        if (limitParent && limitParent === p) break;
        if (idValue) {
          if (p.id !== idValue) continue;
        }
        if (nameValue) {
          if (p.getAttribute('name') !== nameValue) continue;
        }
        if (classNameValue) {
          if (p.className !== classNameValue) continue;
        }
        if (tagNameValue) {
          let tn = p.tagName;
          if (tn) tn = tn.toUpperCase();
          if (tn !== tagNameValue) continue;
        }
        if (attributeName) {
          const att = p.getAttribute(attributeName);
          if (attributeValue === true) {
            if (!att) continue;
          } else if (attributeValue === false) {
            if (att) continue;
          } else {
            if (att !== attributeValue) continue;
          }
        }
        return p;
      } while (p === p.parentNode);
    }
    return undefined;
  }

  /**
   * 判断是否溢出省略号
   * @param dom
   */
  public static isEllipsis(dom: HTMLElement) {
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
}
