import { get, post } from '../config'

export function htttp1 (data) {
  return new Promise((resolve, rejest) => {
    post('/width-soft-webapi/AccountSubjectService/listAccountSubject.do', data).then(res => {
      resolve(res)
    }).catch(err => {
      rejest(err)
    })
  })
}