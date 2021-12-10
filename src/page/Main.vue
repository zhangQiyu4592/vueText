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
  },
  methods: {
    getData () {
      getlist({ pageNo: 1 }).then(res => {
        console.log(22, res)
      })
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
