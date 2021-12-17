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

      let obj = {
        name: '111',
        age: '222',
        height: '180'
      }
      //对对象的取值  用结构
      const { name: mingz } = obj || {}

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
      // console.log(999, ...Object.values(deps).flat(1))




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
