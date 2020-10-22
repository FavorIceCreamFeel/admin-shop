<template>
  <div id="login_header">
    <div class="login_box">
        <!-- 登录显示页面 行-->
        <h3>SMXR</h3>
            <!-- 表单  提交 -->
            <!--model 绑定对象属性，rules 绑定rules对象，ref="ruleForm" 获取form表单对象， -->
            <!-- 3个绑定，绑定表单 ref , 绑定数据  :mode , 绑定rules校验 :rules  -->
            <el-form ref="login_form" :model="loginForm" :rules="loginFormRules" 
              status-icon  label-width="100px" class="demo-ruleForm" >

              <el-form-item label="账号:" prop="account">
                <el-input prefix-icon="el-icon-user-solid" class="input_width" type="text" v-model="loginForm.account" autocomplete="off" autofocus></el-input>
              </el-form-item>

              <el-form-item label="密码:" prop="pass">
                <el-input show-password class="input_width" prefix-icon="el-icon-s-goods"  type="password" v-model="loginForm.pass" autocomplete="off" autofocus></el-input>
              </el-form-item>

              <div  class="form_div">
                <el-button @click="submitForm()">登录</el-button>
                <el-button @click="resetForm()">注册</el-button>
              </div>
            </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    // 密码校验
    var validatePass = (rule, value, callback) => {
      const reg = /^[a-z0-9]{6,12}$/;
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (!reg.test(value)) {
          callback(new Error("请输入正确6~12位字母,数字的密码"));
        }else{
        callback();
        }
      }
    };
    // 账户校验
    var validateAccount = (rule, value, callback) => {
      const reg = /^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/;
      if (value === "" || value === null) {
        callback(new Error("请输入邮箱账户"));
      } else if (!reg.test(value)) {
        callback(new Error("请输入正确的邮箱"));
      } else {
        // 正常接着往下走
        callback();
      }
    };
    return {
      loginForm: {
        pass: "",
        account: "",
      },
      loginFormRules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        account: [{ validator: validateAccount, trigger: "blur" }],
        name: [
          { required: true, message: '请输入账户', trigger: 'blur' },
          { min: 8, max: 12, message: '8到12个字符之间', trigger: 'blur' }
        ],
        // account: [{ validator: (rule,value,callback)=>{
        //   console.log(rule)
        // }, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm() {
      // 可以得到一个boolean 类型的值  form输入框内是否都有值，或者说都通过了校验
      // 把Boolean类型的值 传入 箭头函数 进行处理
      this.$refs.login_form.validate(async (valid) => {
        // console.log(this.loginForm)
        if (valid) {
        const result =await this.$axios.post('vue/signIn',this.$qs.stringify(this.loginForm));
        console.log(result);
          if(result.status===200&&result.data.code===1&&result.data.data!==null){
            window.sessionStorage.setItem('token', result.data.data)
            this.$router.push("/Home");
            this.success_open();
          }else{
            this.login_open("我记错了吗？");
          }
        } else {
          // 要加this.因为是挂在到(vue)原型上的 否则识别不了是谁的函数
          this.login_open("我记错了吗？");
        } 
      });
    },
    resetForm() {
      this.$refs.login_form.resetFields();
    },
    login_open(msg) {
      this.$notify.error({
        title: "啊！Σ( ° △ °|||)︴",
        message: msg,
        duration:'2000'
      });
    },
    success_open() {
        this.$notify({
          title: 'Success ♪(^∇^*)',
          message: '你好，登陆成功！',
          type: 'success',
          duration:'2000'

        });
      },
  },
};
</script>

<style lang="less" scoped>
#login_header {
  background-color: #f1f1f1;
  height: 100%;

  .login_box{
    width: 400px;
    height: 260px;
    background-color:#f1f1f1;
    border: 1px solid #705697;
    border-radius: 5px;
    // 阴影
    // box-shadow: 0 0 10px #f1f1f1;
    position: absolute;
    left: 50%;
    top: 35%;
    transform: translate(-50%,-50%);

    h3{
    text-align:center;
    }
  }
}
.input_width{
  width: 260px;
}
.form_div{
  display:flex;
   justify-content:center;

  div{
    margin: 0%;
    padding: 0%;
  }
}
</style>
