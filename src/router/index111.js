import Vue from 'vue'
// import Router from 'vue-router'
import VueRouter from 'vue-router'

import Login from '@/pages/login/Login'
import Home from '@/pages/home/Home'
import UserInfo1 from '@/pages/user/UserInfo1'
import UserInfo2 from '@/pages/user/UserInfo2'
import UserInfo3 from '@/pages/user/UserInfo3'
import UserInfo4 from '@/pages/user/UserInfo4'
import store from "../store";
import {loginList1, loginList2} from '../pages/login/loginList'
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push (location) {

  return originalPush.call(this, location).catch(err => err)

}

const routes = [
//...这默认路由就是上面代码内的登录页/404页面...
    {
    path: '/',
    name: 'Login',
    component: ()=>import(`@/pages/login/Login`)
  },
  {
    path: '/home',
    name: 'Home',
    component: ()=>import(`@/pages/home/Home`)
  },
]
const router = new VueRouter({
  routes//默认渲染 -> 默认路由
})
// 路由拦截，在url地址跳转之前执行
router.beforeEach((to,from,next)=>{
  console.log(router)
// if(to.name=='Home'){
//   addRoutes();
//   next({replace: true })
// }else{
//   next()
// }
  addRoutes();
  next()

})

function addRoutes(){
  console.log(store.state.map.setLayersPoint.accout)
  if(store){
    if(store.state.map.setLayersPoint.accout=='一般管理员'){
      console.log("************")
      store.dispatch('setFlyPoint', loginList2)
      let data = routesData(loginList2);
      // 动态路由 addRoutes
      //router.matcher = new VueRouter().matcher
      router.addRoute(data[0]);
      console.log(router.getRoutes())
      console.log(router)
    }

  }
}
function routesData(menuList){
  let tempArr=[]
  let children=[]
      menuList.forEach((item)=>{
        let obj={
          path:item.path,
          name:item.name,
          component:()=>import(`@/pages/home/${item.componentLink}`),
          children:children
        }
        item.children.forEach((items)=>{
          let obj={
            path:items.path,
            name:items.name,
            component:()=>import(`@/pages/user/${items.componentLink}`),
          }
          children.push(obj)
        })
        tempArr.push(obj)
    })
  return tempArr;
}

export default router;




