<template>
  <div class="register-container">
    <el-form class="register-form" :model="registerForm" :rules="registerRules" ref="registerForm" autocomplete="on" label-position="left">

      <div class="title-container">
        <h3 class="title">Register Form</h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>

        <el-input
          ref="username"
          v-model="registerForm.username"
          placeholder="Username"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>

      <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>

          <el-input
          :key="passwordType"
          ref="password"
          v-model="registerForm.password"
          :type="passwordType"
          placeholder="Password"
          name="password"
          tabindex="2"
          autocomplete="on"
          @keyup.native="checkCapslock"
          @blur="capsTooltip = false"
          @keyup.enter.native="handleRegister"
        />
          <el-input
            :key="passwordType2"
            ref="password2"
            v-model="registerForm.password2"
            :type="passwordType"
            placeholder="PasswordAgain"
            name="password2"
            tabindex="3"
            autocomplete="on"
            @keyup.native="checkCapslock"
            @blur="capsTooltip = false"
            @keyup.enter.native="handleRegister"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </el-form-item>
      </el-tooltip>

      <!--:loading 成功提交转圈圈效果, primary默认样式-->
      <!--@click.native.prevent调用 event.preventDefault()-->
      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleRegister">Register</el-button>
    </el-form>
</div>
</template>

<script>
  export default {
    name: "register",
    data() {
      const validateUsername = (rule, value, callback) => {
        if (!validUsername(value)) {
          callback(new Error('Please enter the correct username'))
        } else {
          callback()
        }
      };
      const validatePassword = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error('The password can not be less than 6 digits'))
        } else {
          callback()
        }
      };
      const validatePassword2 = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error('The password can not be less than 6 digits'))
        } else {
          callback()
        }
      };
      return {
        //模拟账号密码
        registerForm: {
          username: 'admin',
          password: '123456',
          password2: '123456'
        },
        //trigger: 'blur'失去焦点触发;'change'改变触发
        registerRules: {
          username: [{ required: true, trigger: 'blur', validator: validateUsername }],
          password: [{ required: true, trigger: 'blur', validator: validatePassword }],
          password2: [{ required: true, trigger: 'blur', validator: validatePassword2 }]
        },
        passwordType: 'password',
        passwordType2: 'password2',
        capsTooltip: false,
        loading:false
      }
    },
    methods:{
      checkCapslock() {

      },
      handleRegister() {

      },
      showPwd() {

      }
    }
  }
</script>

<style scoped>

</style>
