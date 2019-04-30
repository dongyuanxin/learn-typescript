// 1. [类型 + 方括号]
let fibonacci: number[] = [1, 2, 3]

// 2. 泛型
let fibonacci2: Array<number> = [1, 2, 3]

// 3. 接口数组（不推荐）
interface NumberArray {
    [propName: number]: number
}
let fibonacci3: NumberArray = [1, 2, 3]