<template>
  <div class="login-container">
    <!--autocomplete自动补全-->
    <!--loginRules对验证规则进行了包裹，通过prop绑定内容进行验证-->
    <!--:model为v-blind:model 组件传递数据 区别v-model的动态双向绑定-->
    <el-form class="login-form" :model="loginForm" :rules="loginRules" ref="loginForm" autocomplete="on" label-position="left">

      <div class="title-container">
        <h3 class="title">Login Form</h3>
      </div>

      <!--prop属性,动态绑定需要校验的字段-->
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <!--tabindex,按tab键聚焦优先级-->
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="Username"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>

      <!--大小写提示-->
      <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right">
        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <!--@keyup.enter.native监听键盘事件-->
          <!--@keyup.native 组件得加上 .native 监听原生事件-->
          <!--@blur 失去焦点触发-->
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="Password"
            name="password"
            tabindex="2"
            autocomplete="on"
            @keyup.native="checkCapslock"
            @blur="capsTooltip = false"
            @keyup.enter.native="handleLogin"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </el-form-item>
      </el-tooltip>

      <!--loading:true or false, primary默认样式-->
      <!--@click.native.prevent 阻止默认行为-->
      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">Login</el-button>
    </el-form>

  </div>
</template>

<script>
  import { validUsername } from '@/utils/validate'

  export default {
    name: 'Login',
    components: {

    },
    data() {
      const validateUsername = (rule, value, callback) => {
        if (!validUsername(value)) {
          callback(new Error('Please enter the correct username'))
        } else {
          callback()
        }
      }
      const validatePassword = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error('The password can not be less than 6 digits'))
        } else {
          callback()
        }
      }
      return {
        loginForm: {
          username: 'user',
          password: '123456'
        },
        //trigger: 'blur'失去焦点触发;'change'改变触发
        loginRules: {
          username: [{ required: true, trigger: 'blur', validator: validateUsername }],
          password: [{ required: true, trigger: 'blur', validator: validatePassword }]
        },
        passwordType: 'password',
        capsTooltip: false,
        loading: false,
        redirect: undefined,
      }
    },
    watch: {

    },
    created() {

    },
    mounted() {
      if (this.loginForm.username === '') {
        this.$refs.username.focus()
      } else if (this.loginForm.password === '') {
        this.$refs.password.focus()
      }
    },
    destroyed() {

    },
    methods: {
      //大小写
      checkCapslock(e) {
        const { key } = e;
        this.capsTooltip = key && key.length === 1 && (key >= 'A' && key <= 'Z')
      },
      showPwd() {
        //passwordType=password隐藏密码,text或其他显示密码
        if (this.passwordType === 'password') {
          this.passwordType = ''
        } else {
          this.passwordType = 'password'
        }
        this.$nextTick(() => {
          // 对视图进行修改操作且获得焦点
          this.$refs.password.focus()
        })
      },
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.loading = true
            //this.$store.dispatch('user/login', this.loginForm)
              .then(() => {
                // this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
                this.loading = false
              })
              .catch(() => {
                this.loading = false
              })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
