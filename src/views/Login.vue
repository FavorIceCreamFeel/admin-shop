<template>
  <div id="login_header">
    <el-container>
      <!-- main 主页面 -->
      <el-main>
        <!-- 登录显示页面 行-->
        <h3>SMXR</h3>
        <el-row :gutter="24">
          <el-col :span="12" :offset="6">
            <!-- 表单  提交 -->
            <!--model 绑定对象属性，rules 绑定rules对象，ref="ruleForm" 获取form表单对象， -->
            <el-form
              :model="ruleForm"
              status-icon
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item label="账号:" prop="account">
                <el-input
                  type="text"
                  v-model="ruleForm.account"
                  autocomplete="off"
                  autofocus
                ></el-input>
              </el-form-item>
              <el-form-item label="密码:" prop="pass">
                <el-input
                  type="password"
                  v-model="ruleForm.pass"
                  autocomplete="off"
                  autofocus
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button
                  type="primary"
                  @click="submitForm('ruleForm')"
                  class="login_button"
                  >登录</el-button
                >
                <el-button class="button_sign_up" @click="resetForm('ruleForm')"
                  >注册</el-button
                >
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
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
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    var validateAccount = (rule, value, callback) => {
      const reg = /^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/;
      if (value === "" || value === null) {
        callback(new Error("请输入邮箱账户"));
      } else if (!reg.test(value)) {
        callback(new Error("请输入正确的邮箱"));
      }else{
        // 正常接着往下走
        callback();
      }

    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        age: "",
        account: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }],
        age: [{ validator: checkAge, trigger: "blur" }],
        account: [{ validator: validateAccount, trigger: 'blur' }],
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
        if (valid) {
          // alert("submit!");
          console.log(valid)
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
#login_header {
  background-color: #f1f1f1;
  margin-top: -10px;
  padding-bottom: 28%;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.el-col {
  border: 2px solid #705697;
  border-radius: 10px;
  padding: 1% 0 0 0;
  padding-top: 2%;
  // margin-top: 2%;

  .el-input {
    width: 96%;
  }
}
h3 {
  margin-left: 46%;
  font-family: "Courier New", Courier, monospace;
}
.login_button {
  margin-left: 23%;
}
.button_sign_up {
  margin-left: 10%;
}
</style>
