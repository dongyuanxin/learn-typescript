// 多余属性不能添加
interface Person {
    name: string,
    readonly id: number, // 只读属性: 第一次给对象赋值的时候赋值
    age?: number, // 可选属性
    [propName: string]: any // 允许任意属性
}

// 必须有确定属性
let tom: Person = {
    name: 'Tom',
    id: 123,
    sex: 'male'
}