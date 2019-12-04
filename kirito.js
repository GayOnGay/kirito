//=========================================== arr==============================================
// 1、arrAndSet 并集
export const arrAndSet = (arrOne, arrTwo) => {
    return arrOne.concat(arrTwo.filter(v => !arrOne.includes(v)))
}
// 2、arrIntersection 交集
export const arrIntersection = (arrOne, arrTwo) => {
    return arrOne.filter(v => arrTwo.includes(v))
}
// 3、arrDifference 差集
export const arrDifference = (arrOne, arrTwo) => {
    return arrOne.concat(arrTwo).filter(v => !arrOne.includes(v) || !arrTwo.includes(v))
}
// 4、arrTwoToArrObj 两个数组合并成一个数组对象
// @param {oneKey} oneKey 选填，如果两个都未传,直接以 arrOne 的值作为 Key ，arrTwo 作为 value 
export const arrTwoToArrObj = (arrOne, arrTwo, oneKey, twoKey) => {
    if(!oneKey && !twoKey){
        return arrOne.map((oneKey, i) => ({[oneKey]: arrTwo[i]}))
    }
    else{
        return arrOne.map((oneKey, i) => ({oneKey, twoKey: arrTwo[i]}))
    }
}
// 5、arrObjSum 数组对象求和
// @param {Object} arrObj 数组对象
// @param {String} Key 数组对应的 Key 值
export const arrObjSum = (obj, key) => {
    return arrObj.reduce((prev, cur) => prev + cur.key, 0)
}
// 6、arrConcat 数组合并
export const arrConcat = (arrOne, arrTwo) => {
    return [...arrOne, ...arrTwo]
}
// 7、arrSum 数组求和
export const arrSum = arr => {
    return arr.reduce((prev, cur) => {
        return prev + cur
    }, 0)

}
// 8、arrIncludeValue 数组是否包含某值
export const arrIncludeValue = (arr, value) => {
    return arr.includes(value)
}
// 9、arrMax 数组最大值
export const arrMax = arr => {
    return Math.max(...arr)
}
// 10、arrRemoveRepeat 数组去重
export const arrRemoveRepeat = arr => {
    return Array.from(new Set(arr))
}
// 11、arrOrderAscend 数组排序
// @param {Boolean} ascendFlag 升序，默认为true
export const arrOrderAscend = (arr, ascendFlag=true) => {
    return arr.sort((a, b) => {
        return ascendFlag ? a - b : b - a
    })
}


// ========================================storage===========================================
// 1、localStorage 存储 目标对象值如果是函数、RegExp等特殊对象存储会被忽略
export const localStorageSet = (key,value) => {
    if(typeof (value) === 'object') value = JSON.stringify(value)
    localStorage.setItem(key,value)
}
// 2、localStorageGet   获取
export const localStorageGet = (key) => {
    return JSON.parse(localStorage.getItem(key))
}
// 3、localStorageRemove  移除
export const localStorageRemove = (key) => {
    localStorage.removeItem(key)
}
// 4、localStorageSetExpire 存储某一段时间失效
export const localStorageSetExpire = (key, value, expire) => {
    if (typeof (value) === 'object') value = JSON.stringify(value)
    localStorage.setItem(key, value)
    setTimeout(() => {
        localStorage.removeItem(key)
    },expire)
} 


// =========================================str==========================================
// 1、strToCapital 将字母全部转化成大写
export const strToCapital = (str) => {
    return str.toupperCase()
}
// 2、strToLowercase 将字母全部转化成小写
export const strToLowercase = (str) => {
    return str.toLowercase()
}
//3、strTocapitalLetter 将字母全部转化成以大写开头
export const strToCapitalLetter = (str) => {
    const strOne = str.toLowercase()
    return strOne.charAt(0).toUpperCase() + strOne.slice(1)
}


//==========================================thrDeb===========================================
//throttle 节流
export const throttle = function(func, delay){
    let timer = null
    return function() {
        if (!timer) {
            timer = setTimeout(() => {
                func.apply(this, arguments)
                timer = null
            },delay)
        }
    }
}
//debounce 防抖
export const debounce = function(fn, wait) {
    let timeout = null
    return function() {
        if (timeout !== null) clearTimeout(timeout) //如果多次触发将上次记录延迟清除掉
        timeout = setTimeout(() => {
            fn.apply(this, arguments)
            timeout = null
        },wait)
    }
}