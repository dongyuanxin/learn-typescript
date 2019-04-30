// 联合类型（Union Types）表示取值可以为多种类型中的一种。
let favoriteNumber: string | number
favoriteNumber = '111'
favoriteNumber = 123

// 访问联合类型属性/方法时候
// 如果ts无法确定是什么类型，只能访问两种类型的“共有”的
function getLength(something: string | number): string {
    // return something.length // 会报错
    return something.toString()
}