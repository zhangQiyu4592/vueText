const Mock =require('mockjs')
const Random = Mock.Random
Mock.setup({
  timeout: '200-600'
})
const proData  =() =>{
      let arr =[]
      for(let i=0; i<20;i++){
         let obj ={
           name:Random.cname(),
           age:Random.integer(),
           title:Random.ctitle(),
           date:Random.datetime(),
           img:Random.dataImage(),
           email:Random.email()
         }
         arr.push(obj)
      }
      return arr
}

Mock.mock('/api/someThing/','post',proData)