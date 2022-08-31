import Vue from 'vue'
import Router from 'vue-router'
import store from "../store";
import {loginList1, loginList2} from '../pages/login/loginList'

Vue.use(Router);
const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {

  return originalPush.call(this, location).catch(err => err)

}
export const defaultRoutes = [
  //...这默认路由就是上面代码内的登录页/404页面...
  {
    path: '/',
    name: '登录',
    component: () => import(`@/pages/login/Login`)
  },
  {
    path: '/home',
    name: '首页',
    component: () => import(`@/pages/home/Home`)
  },
];
const router = new Router({
  routes: [
    ...defaultRoutes
  ]


});
router.beforeEach((to, from, next) => {
  // 当路由没被配置的时候，meta 中的 require 字段为 undefined

  if (to.name !== '登录') {
    if (to.name == '首页' && store.state.map.setFlyPoint.length == 0) {
      if (store.state.map.setLayersPoint.accout == '超级管理员') {
        store.dispatch('setFlyPoint', loginList1);

        routesData(loginList1)
        let data = routesData(loginList1);
        console.log(data)
        data.forEach((item)=>{
          router.addRoute(item)
        })

        console.log(router)
        // 路由 options 并不会随着 addRoutes 动态响应，所以要在这里进行设置
        // router.options.routes = defaultRoutes.concat(data);
        next({...to})
      } else {
        store.dispatch('setFlyPoint', loginList2);
        routesData(loginList2)
        let data = routesData(loginList2);
        console.log(data)
        router.addRoute(data[0]);
        // 路由 options 并不会随着 addRoutes 动态响应，所以要在这里进行设置
        // router.options.routes = defaultRoutes.concat(data);
        next({...to})
      }
    } else {
      next()
    }
  } else next();
});

function routesData(menuList) {
  let tempArr = []

  menuList.forEach((item) => {
    let children = []
    let obj = {
      path: item.path,
      name: item.name,
      component: () => import(`@/pages/home/${item.componentLink}`),
      children: children
    }

    item.children.forEach((items) => {
      let obj = {
        path: items.path,
        name: items.name,
        component: () => import(`@/pages/user/${items.componentLink}`),
      }
      children.push(obj)
    })
    tempArr.push(obj)
  })

  return tempArr;
}

export default router
