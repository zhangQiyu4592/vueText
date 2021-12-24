<template>
  <div class="main-box">
    <!-- main11111111111111111111 -->
    <!-- 顶部标题 -->
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <div class=""></div>
          <el-menu mode="vertical" :unique-opened="true" :collapse="isMenu">
            <!-- <el-submenu v-for="(item,i) in MenuList" :key="i">
              <template slot="title">{{item.title}}</template>
              <el-menu-item-group>

                <el-menu-item v-for="(v,i) in item.child" :key="i">{{v.title}}</el-menu-item>
              </el-menu-item-group> -->
            <!-- </el-submenu> -->
            <input size="small" id="input1" />
            <input size="small" id="input2" />

          </el-menu>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>

  </div>
</template>


<script>
import Vue from 'vue'
import { getlist } from '../http'
import { outNum4String, outNum4Object, numToThousands, thousandsToNum, deepClone } from '@/utils'

export default {
  name: '',
  components: {},
  data () {
    return {
      isMenu: false,
      MenuList: [
        { title: '菜单一', value: 1, child: [{ title: '菜单一child1' }, { title: '菜单一child2' }] },
        { title: '菜单二', value: 2, child: [{ title: '菜单2child1' }, { title: '菜单2child2' }] },
        { title: '菜单三', value: 3, child: [{ title: '菜单3child1' }, { title: '菜单3child2' }] },
      ]
    }
  },
  mounted () {
    this.getData()
    this.text()
    this.algo()


  },
  methods: {
    getData () {
      getlist({ pageNo: 1 }).then(res => {
      })
    },


    text () {
      let arr = [
        { id: 2, name: '部门2', pid: 1 },
        { id: 3, name: '部门3', pid: 1 },
        { id: 5, name: '部门5', pid: 4 },
        { id: 4, name: '部门4', pid: 3 },
        { id: 1, name: '部门1', pid: 0 },
      ]
      const { age: aa } = obj || {}
      let obj = {
        name: '111',
        age: '222',
        height: '180'
      }
      //对对象的取值  用解构
      const { name } = obj || {}
      //对象 合并    用 Object.assign(目标对象,。。)
      const a = {
        name: 1,
        arr: {
          gg: 'gg'
        }
      }
      const b = {
        age: 22
      }
      const c = Object.assign(a, b)
      // 循环对象---》 返回所有的属性值的数组  
      // Object.values(obj)
      // 获取 嵌套对象的属性值
      //  n_val = obj?.attr1?.attr2
      //  const val = a ?.arr ?.gg


      // 数组合并    用拓展运算符 
      const aaa = [{ id: 2, name: '部门233', pid: 1 }]
      // const bbb = [...arr, ...aaa]

      // 去重   ... set
      let bbb = [...new Set(bbb), ...new Set(arr)]
      //数组中是否包含某个元素  
      const ccc = [2, 34, 3, 5]
      ccc.includes(2)   //   ccc.indexOf(2) find() filter()
      //数组筛选
      // filtre((v) =>{ return v.a === b})
      //    find()

      // 数组扁平化 多维变一维  flat(1)  
      // 字符串拼接  模板字符串  `${}` 
      const cc = '小明'
      const dd = 66
      const rs = `${cc}的成绩${dd >= 60 ? '合格' : '不合格'}`


      const deps = {  //扁平化数组   flat(1)
        '采购部': [1, 2, 3],
        '人事部': [5, 8, 12],
        '行政部': [5, 14, 79],
        '运输部': [3, 64, 105],
      }

      // js 基础

      // var   全局 可跨作用域访问（除了函数）可重复变量名 变量提升 
      // let   局部 不可跨作用域访问 可以修改变量 不可重复变量名
      // const 局部 不能跨域 不能改变变量 不可重复变量名


      // 1 对object的操作
      // (1)解构   
      const obj2 = {
        name: '小李',
        age: '20',
        male: '男'
      }
      const { name: a2, age: b2, male: c2 } = obj2 || {}  //解构并赋值给新的变量
      // (2)循环
      for (const key in obj2) { } //会循环到原型链上的属性
      Object.keys(obj2)   //对象key(可枚举)组成的数组
      Object.values(obj2) // 对象value组成的数组
      Object.getOwnPropertyNames(obj2) //对象key组成的数组 (包括不可枚举的属性)
      Object.entries(obj2)  // 二位数组  [[key,value],[key,value]]   
      Object.hasOwnProperty('a') // 对象中是否包含Key 
      // (3) 修改
      // Object.defineProperty(obj2, 'class', {
      //   configurable: false, //能否被删除
      //   enumerable: false, //能否被枚举
      //   writable: false, //能否被改变
      //   value: '', //属性值

      //   get: function () {
      //   },
      //   set: function (val) {
      //   }
      // })
      // (4) 删除
      delete obj2.name

      // 2 对Array的操作
      //  (1) 解构
      const [a3, b3, c3, d3] = [1, 2, 3, 4]
      // (2) 循坏
      // for(可打断循环) for(of 只能循坏数组 可打断循环) forEach()  map() every() some() reduce() find() filter() isArray() 
      // ...new Set(arr)  去重    sort((a,b) =>{ return a-b }) 排序
      //  return 跳出方法体  breack 结束整个循坏体  continue 结束本次循坏，开始下次循坏

      //(3)增删改查
      //增 shift() pop() 
      //删 unshift() push()
      //改 concat()合并  join('-') toString() 数组转字符串   reverse() sort((a,b) =>{return a-b})  slice(startIndex,endIndex)截取
      //查 indexOf()  lastIndexOf()  此方法也可用于去重
      // splice(index,number,itemx)增删改皆可   index规定添加/删除项目的位置  number 要删除的项目数量。如果设置为 0，则不会删除项目。itemX 添加的新项目



      // 3  对String的操作
      //  (1) 解构
      const [s1, s2, s3, s4, s5, s6] = 'string'
      // (2) 基本方法
      //  split()  字符串转数组     
      //  replace(目标字符,替换字符)替换  
      //  concat()合并 
      //  slice(startIndex,endIndex) 截取  substring(startIndex,endIndex)  截取
      //  charAt(index) 根据下标找字符  charCodeAt(index) 获取字符串ascii码
      //  indexOf('str') 是否包含某段字符串  返回在字符串中的位置
      //  trim() 去除字符串两端的空格
      console.log(999999, parseInt(Math.random() * 2))
      Math.random() //生成0-1的随机数






    },
    algo () {
      //  xiaoshuo-ss-sfff-fe  变为驼峰xiaoshuoSsSfffFe
      let a = ' xiaoshuo-ss-sfff-fe '

      function changStr (str) {
        let newStr = ''
        str.trim().split('-').forEach((v, i) => {
          if (i > 0) {
            let newV = v.split('')
            newV[0] = newV[0].toUpperCase()
            v = newV.join('')
          }
          newStr = newStr + v
        })
        return newStr.trim()
      }
      // 统计字符串中出现最多的字母
      outNum4String(a)
      function outNum4String (str) {
        let strArr = str.trim().split('')
        let countArr = []
        strArr.forEach((v, i) => {
          let count = 1
          strArr.forEach((v2, i2) => {
            if (v === v2) {
              count++
            }
          })
          countArr.push(count)
        })
        return strArr[countArr.indexOf(Math.max(...countArr))]

      }

      // .字符串反序
      // console.log(1122, a.trim().split('').reverse().join('-'))

      // 用window.open()打开新页面 
      // 但是用window.location.href＝"" 却是在原窗口打开的
      let cc = [[1, 2], [3, 4], [5]]
      console.log(78, cc.flat(1))

      //  判断字符串是否存在回文
      function isReText (str) {    //  mam  从左到右
        return str === str.split('').reverse().join('')
      }
      //  去掉一组整型数组重复的值
      let ee = [4, 3, 1, 23, 4]
      console.log(99, quC(ee))
      function quC (params) {
        const arr = params
        let newArr = []
        arr.forEach((v, i) => {
          if (!newArr.includes(v)) {
            newArr.push(v)
          }
        })
        return newArr
      }

      // 随机生成指定长度的字符串 我本将心向明月 奈何明月照沟渠
      randomNumStr(8)
      function randomNumStr (num) {
        const str = 'abcdefghijklmnopqrstuvwsyz1234567890'
        let newStr = ''
        for (let i = 0; i < num; i++) {
          newStr += str.split('')[Math.ceil(Math.random() * 36)]
        }
        return newStr
      }








    },


  },
}
</script>

<style lang="less">
@view-height:calc (~'100vh - 60px');
.main-box {
  .el-header {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    height: calc (~"100vh - 60px");
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
}
</style>
