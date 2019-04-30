// 类型断言：手动指定一个值的类型
// 比如something有2中类型
// something as string：就是将其指定为string
function getLength(something: string | number): number {
    console.log(something as string)
    if(something as string) {
        return (something as string).length
    }
    // something as Array // 错误的做法，只能指定为联合类型中的其中一个
}