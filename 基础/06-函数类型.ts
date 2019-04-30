// 函数表达
let mySum = function (x: number, y: number): number {
    return 1
}

// => 在ts中表示函数定义，左边是输入类型，右边是输出类型，
// 和 es6 的 => 不一样
let mySum2: (x: number, y: number) => number = function (x: number, y: number): number {
    return 1
}

// 可选参数，方参数队列最后
function buildName(firstName: string = '默认值', lastName?: string) {

}

// 剩余参数: 是个数组，可以用数组类型定义它
function push(array: any[], ...items: any[]) {
    items.forEach(function(item) {
        array.push(item)
    })
}

// 函数重载：这个定义和普通的函数重载还不一样
// 这里还是编译成一个函数（c语言等是编译成不同函数）
// 它的目的是为了提供编译器进行类型判断，而不需要使用“类型断言”技术
// 请按照 精确 => 宽泛的级层来定义函数
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
