<template>
  <div>
    <div class="login-contain">
      <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
        <a-form-item label="账户">
          <a-input
            v-decorator="['accout', { rules: [{ required: true, message: 'Please input your note!' }] }]"
          />
        </a-form-item>
        <a-form-item label="密码">
          <a-input
            v-decorator="['password', { rules: [{ required: true, message: 'Please input your note!' }] }]"
          />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="submit">
            登录
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import {apiAddress, apiLogin} from "@/request/api"; // 导入我们的api接口
import store from "../../store";
import {loginList1, loginList2} from './loginList'

export default {
  name: "Login",
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, {name: 'coordinated'}),
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          const param = {
            account: values.accout,
            code: "123456",
            menuType: "app",
            password: "Cjwsjy@ddk_%8"
          };
          apiLogin(param).then(res => {
            if (res) {
              if (values.accout == 'akt') {
                store.dispatch('setLayersPoint', {accout:'超级管理员'});
              } else {
                store.dispatch('setLayersPoint', {accout:'一般管理员'});
              }
              console.log(this.$router.getRoutes())
              this.$router.push({name: '首页'});
            } else {
              this.$message.error("密码错误，请重新登陆！");
            }
          });
        }
      });
    },
  }
}
</script>

<style scoped>
.login-contain {
  width: 500px;
  margin: 0 auto;
  margin-top: 200px;

}
</style>
