export function addInstall(name: string, nameCom: any) {
  // let com: any = {};
  nameCom.install = (Vue: any) => {
    Vue.component(name, nameCom);
  };
  return nameCom;
}
