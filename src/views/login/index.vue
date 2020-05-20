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

      <!--大小写提示Caps lock is On 右边-->
      <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <!--@keyup.enter.native监听键盘事件-->
          <!--@keyup.native 组件得加上 .native 监听原生事件-->
          <!--@blur 失去焦点触发不显示-->
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

      <!--:loading 成功提交转圈圈效果, primary默认样式-->
      <!--@click.native.prevent调用 event.preventDefault()-->
      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">Login</el-button>
    </el-form>
      <router-link to="/register">Don't have an account? register</router-link>
      <br>
      <router-link to="/findPassword">Forget password? find</router-link>
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
      };
      const validatePassword = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error('The password can not be less than 6 digits'))
        } else {
          callback()
        }
      };
      return {
        //模拟账号密码
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
        redirect:undefined
      }
    },
    watch: {
      $route: {
        handler: function(route) {
          this.redirect = route.query && route.query.redirect
        },
        immediate: true
      }
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
      //绑定keyup.native事件,触发就监听大小写,改变capsTooltip值,然后是否提示
      checkCapslock(e) {
        //取e对象中的key值
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
          //vue.js element ui 表单验证
           if (valid) {
          //   // this.loading = true
             console.log('dispatch');
             this.$store.dispatch('user/login',this.loginForm).then(() => {
               console.log('Cookie store');
          //     this.$router.push({ path: '/'})
          //     // this.loading = false
             })
          //     .catch(err => {
          //       // this.loading = false
          //       this.$message.error(err);
          //     })
          //  } else {
          //    console.log('error submit!!');
          //    return false
            }
        })
      }
    }
  }
</script>

<style scoped>

</style>
