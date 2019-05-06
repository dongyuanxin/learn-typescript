// 泛型：在定义函数、接口或者类的时候，不预先指定类型，在使用时候再指定
// 对于强类型约束的语言非常重要，比如一个接口，可以有多种数据类型，不要写很多次了
// 默认类型，当实际值参数无法推测类型，就有用
function createArray<T = string> (length: number, value: T): Array<T> {
    let result: T[] = []
    for (let i = 0; i < length; ++i) {
        result[i] = value
    }

    return result
}

const arr: string[] = createArray<string>(3, 'x')

console.log(arr)

// 多个泛型参数
function swap<T, U> (tuple: [T, U]): [U, T] {
    return [
        tuple[1],
        tuple[0]
    ]
}

console.log(swap([7, 'seven']))

// 泛型约束: 泛型不一定包含某一属性，但是函数中就只需要带有某种属性的泛型
interface LengthWise {
    length: number
}
function loggingIdentity <T extends LengthWise> (arg: T): T {
    console.log(arg.length)
    return arg
}
// 调用时候，传入的参数必须有length属性
loggingIdentity({length: 1})

// 互相约束
// T是U的超集，并且在赋值的时候，需要强制转化类型
function copyFields <T extends U, U> (target: T, source: U): T {
    for (let id in source) {
        target[id] = (<T>source)[id]
    }
    return target
}
let x = { a: 1, b: 2, c: 3, d: 4 }
copyFields(x, {b: 10, d: 20})