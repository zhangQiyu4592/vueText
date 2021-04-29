<template>
  <div class="main-box">
    main11111111111111111111
  </div>
</template>


<script>
import { getDataHttp } from '@/request'
export default {
  name: '',
  components: {},
  data () {
    return {

    }
  },
  mounted () {
    // this.getData()
  },
  methods: {
    getData () {
      getDataHttp({}).then(res => {
        console.log(22, res)
      })
    },
  },
}
</script>

<style lang="less">
</style>
