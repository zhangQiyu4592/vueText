
export function outNum4String (char,string){  //获取字符在字符串中的出现的次数
       let num =0
       string.trim().split('').forEach(e =>{
          char === e && num++
       })
       return num
}

export function outNum4Object(param){   // 各种数据类型的去重
    let type = Object.prototype.toString.call(param)
     if(type === '[object Array]'){ 
        return [...new Set(param)]
     }else if(type === '[object String]'){
        return [...new Set( param.trim().split(''))].join('')
     }else if(type === '[object Number]'){
        return  Number([ ... new Set(param.toString().split(''))].join(''))
     }else{
        console.error('数据类型不合格，请检查',param)
     }
}
 
export function numToThousands(num) {  // 数字转千分位
  if(isNaN(num)) return ''
  if(Number(num) ==0) return '0.00'
  let str = num.toString(), integer = '', dec = ''
  if (str.indexOf('.') != -1) {  //包含小数
    integer = str.split('.')[0]
    dec = '.' + str.split('.')[1]
  }
  let arr = integer.split('')
  let newArr = []
  let c = 1
  arr.forEach((v, i) => {
    let e = v
    if (c * 3 - 1 == i) {
      e = v + ','
      c++
    }
    newArr.push(e)
  })
  return newArr.join('') + dec
}

export function thousandsToNum(str){ //  去除千分位
  if(String(str).trim() == '') return ''
  return String(str).trim().replace(/,/gi,'')
 }

export function reverseOrder(param){ // 反序
    if(param == '') return ''
    let type = Object.prototype.toString.call(param)
    if(type === '[object Array]'){ //数组
        return param.reverse()
    }else if(type === '[object String]'){ //字符串
      return  param.trim().split('').reverse().join('')
    }else if(type === '[object Numebr]'){ // 数字
         return Number(String(param).split('').reverse().join(''))
    }else{
      console.error('请检查数据类型')
    }
 }

export function deepClone (data){  //仅限于对象和数组的拷贝
   const obj = data.constructor === Array? [] :{} 
  for(let key in data){
     if(data.hasOwnProperty(key)){
         if(data[key] && typeof(data[key]) === 'object'){  //对象 
            // 如果值是对象，就递归一下
         obj[key] = data[key].constructor === Array ? [] : {};
         obj[key] = deepClone(data[key]);  
         }else{ //数组
          obj[key] =data[key]
         }
     }
  }
  return obj
 }

export  function strMostCount (str) {  //求字符串中出现最多的字符
  const arr = str.split('')
  let conArr = []
  arr.forEach((v, i) => {
    let count = 1
    arr.forEach((v2, i2) => {
      if (v === v2) count++
    })
    conArr.push(count)
  })
  return arr[conArr.indexOf(Math.max(...conArr))]
}

export  function maxDiffValue (ee) {  //数组最大差值
 return Number(Math.max(...ee) - Math.min(...ee))
}

export  function randomNumStr (num) {  //随机生成指定长度的字符串
  const str = 'abcdefghijklmnopqrstuvwsyz1234567890'
  let newStr = ''
  for (let i = 0; i < num; i++) {
    newStr += str.split('')[Math.ceil(Math.random() * 36)]
  }
  return newStr
}

export function randomNumber(min,max){ // 随机生成min--max之间的随机数
    return parseInt(Math.random()*(max-min+1)+min,10);
}













