// boolean !== Boolean , 其他基础类型与构造函数也是如此
let right: boolean = new Boolean(1) 

function returnVoid(): void {
    console.log('void 表示没有任何返回值的函数')
}
// void 类型没用，只能是 null | undefined
let unusable: void = null 

// 这里普及一个子类型的概念
// null 和 undefined 是所有类型的子类型
// 也就是说所有类型都能初始化为 null | undefined
let num: number = null