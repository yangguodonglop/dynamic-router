<template>
  <div class="home-con" style="height: 100%">
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
        <div class="logo"/>
        <a-menu theme="dark" mode="inline" :default-selected-keys="[1]">
          <template v-for="(item,index) in setFlyPoint">
            <a-sub-menu :key="index">
              <span slot="title"><a-icon type="user" />{{ item.name }}</span>
              <template v-for="(items,index) in item.children">
                <a-menu-item :key="items.name" @click="linkPath(items)">
                  {{items.name}}
                </a-menu-item>

              </template>

            </a-sub-menu>
          </template>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <div class="header-con">
            <a-icon
              class="trigger"
              :type="collapsed ? 'menu-unfold' : 'menu-fold'"
              @click="() => (collapsed = !collapsed)"
            />
            <div>
              {{setLayersPoint.accout}}
              <a-icon @click="logout()" type="logout" />
            </div>

          </div>

        </a-layout-header>
        <a-layout-content
          :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
        >
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import store from "../../store";
import {loginList2} from "../login/loginList";
export default {
  name: "Home",
  data() {
    return {
      collapsed: false,
    };
  },
  computed:{
    ...mapState({
      setFlyPoint: state => {
        return state.map.setFlyPoint
      },
      setLayersPoint: state => {
        return state.map.setLayersPoint
      },

    })
  },
  watch:{
    setFlyPoint(newValue){
      console.log(newValue)
    }
  },
  mounted() {
    console.log(this.setLayersPoint)
  },
  methods: {
    linkPath(item){
     console.log(item.name)
     this.$router.push({name:item.name})
    },
    logout(){
      store.dispatch('setFlyPoint', []);
      this.$router.push({name:'登录'})

    }
  }
}
</script>

<style lang="less" scoped>
.header-con{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
}
.home-con {
  /deep/ .ant-layout.ant-layout-has-sider {
    height: 100%;
  }
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
