// 任意值类型可以改变
let anyType: any = 'string'
anyType = 123

// 任意值可以访问任何属性
console.log(anyType.name)

// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：

// 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：
