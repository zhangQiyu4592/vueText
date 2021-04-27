<template>
  <!-- 登录页 -->
  <div class="login-box">
    <img src="../assets/loginBg.jpeg" class="login-bg">
    <div class="login-from">
      <el-row>
        <el-form :model="loginData" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-row type="flex" justify="center" style="margin-top:20px">
            <el-form-item label="用户名：" prop="userName">
              <el-input type="text" v-model.trim="loginData.userName" autocomplete="off"></el-input>
            </el-form-item>
          </el-row>
          <el-row type="flex" justify="center">
            <el-form-item label="密码：" prop="passWord">
              <el-input type="password" v-model.trim="loginData.passWord" autocomplete="off"></el-input>
            </el-form-item>
          </el-row>
          <el-row type="flex" justify="center">
            <el-form-item label="验证码：" prop="code">
              <el-input type="text" v-model.trim="loginData.code"></el-input>
            </el-form-item>
          </el-row>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-row>
    </div>
  </div>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'

export default {
  name: 'Login',
  components: {},
  data () {
    return {
      loginData: {
        userName: '',
        passWord: '',
        code: ''
      },
      rules: { //验证规则
        userName: [  //用户名
          {
            validator: (rule, value, callback) => {
              if (value == '') {
                callback(this.$message.error('请输入用户名'))
              }
            }, trigger: 'blur'
          }
        ],
        passWord: [ //密码
          {
            validator: (rule, value, callback) => {
              if (value == '') {
                callback(this.$message.error('请输入密码'))
              }
            }, trigger: 'blur'
          }
        ],
        code: [ //密码
          {
            validator: (rule, value, callback) => {
              if (value == '') {
                callback(this.$message.error('请输入密码'))
              }
            }, trigger: 'blur'
          }
        ]
      }

    }
  },
  computed: {

  },
  watch: {

  },
  created () {

  },
  beforeMounted () {

  },
  mounted () {

  },
  methods: {
    submitForm (formName) {  //提交验证
      console.log(33,)

      this.$refs[formName].validate((valid) => {
        console.log(33, valid)
        if (valid) {
          this.httpLogin()
        } else {
          this.$message.error('222')
          return false;
        }
      });
    },
    resetForm (formName) { //清空
      this.$refs[formName].resetFields();
    },
    httpLogin () { // 登录请求
      this.$router.push({ name: 'Main' })
    },


  },


}
</script>

<style lang="less">
@login-from-bg: #fff;
.login-box {
  .login-bg {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
  .login-from {
    width: 400px;
    height: 300px;
    background: @login-from-bg;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    border-radius: 10px;
    padding: 15px;
  }
}
</style>
