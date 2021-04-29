import { get, post } from '../config'

export function getDataHttp (data) {
  return new Promise((resolve, rejest) => {
    post('/width-soft-webapi/AccountSubjectService/listAccountSubject.do', data).then(res => {
      resolve(res)
    }).catch(err => {
      rejest(err)
    })
  })
}