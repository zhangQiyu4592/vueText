

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













