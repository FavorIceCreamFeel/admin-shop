<template>
  <div id="login_header">
    <div class="login_box">
        <!-- 登录显示页面 行-->
        <h3>SMXR</h3>
            <!-- 表单  提交 -->
            <!--model 绑定对象属性，rules 绑定rules对象，ref="ruleForm" 获取form表单对象， -->
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"
              label-width="100px" class="demo-ruleForm" >

              <el-form-item label="账号:" prop="account">
                <el-input class="input_width" type="text" v-model="ruleForm.account" autocomplete="off" autofocus></el-input>
              </el-form-item>

              <el-form-item label="密码:" prop="pass">
                <el-input class="input_width"  type="password" v-model="ruleForm.pass" autocomplete="off" autofocus></el-input>
              </el-form-item>

              <div  class="form_div">
                <el-button @click="submitForm('ruleForm')">登录</el-button>
                <el-button @click="resetForm('ruleForm')">注册</el-button>
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
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
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
      ruleForm: {
        pass: "",
        account: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
<<<<<<< HEAD
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }],
=======
>>>>>>> 0fa48ebdb9b34a50d02ba02d11098ca2944a071d
        account: [{ validator: validateAccount, trigger: "blur" }],
        // account: [{ validator: (rule,value,callback)=>{
        //   console.log(rule)
        // }, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      // 可以得到一个boolean 类型的值
      // var boos = this.$refs.ruleForm.validate()
      // console.log(boo)
      // 把Boolean类型的值 传入 箭头函数 进行处理
      this.$refs.ruleForm.validate((valid) => {
        valid=false;
        if (valid) {
<<<<<<< HEAD
          this.$router.push("/Home");
        } else {
          open6();
=======
          // alert("submit!");
          console.log(valid);
          this.$router.push("/Home");
        } else {
          // console.log("error submit!!");

          return false;
>>>>>>> 0fa48ebdb9b34a50d02ba02d11098ca2944a071d
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    open6() {
      this.$notify.error({
        title: "哦！NO",
        message: "你应该在尝试一下",
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
