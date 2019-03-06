
import { registerApplication, start } from 'single-spa';

registerApplication('home', () => import('./src/home/home.app.js'), (location) => location.pathname === "" || location.pathname === "/" || location.pathname.startsWith('/home'));
registerApplication('navBar', () => import('./src/navBar/navBar.app.js').then(mod => mod.navBar), () => true);
registerApplication('lists', () => import('./src/listData/listData.app.js'), (location) => location.pathname.startsWith('/lists'));
registerApplication('tabs', () => import('./src/tabs/tabs.app.js'), (location) => location.pathname.startsWith('/tabs'));
registerApplication('sideBar', () => import('./src/sideBar/sideBar.app.js').then(mod => mod.sideBar), () => true);

registerApplication('angularJS', () => import('./src/angularJS/angularJS.app'), pathPrefix('/angularJS'));


start();

function pathPrefix(prefix) {
  return function (location) {
    return location.pathname.startsWith(`${prefix}`);
  }
}
