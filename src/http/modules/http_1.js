import { post } from "../config";

export function getlist(data){
  return new Promise((resolve,reject) =>{
    post('/api/someThing/',data).then(res =>{
        resolve(res)
   })
  })
}