// 元组:合并了不同类型的对象
// 不同于数组

let yuanzu: [string, number] = ['CaiXunkun', 25]

// 只给其中一个赋值
yuanzu[0] = 'Xcat Liu' 

// 添加元素，自动限制：联合类型
// 不推荐：会越界
yuanzu.push(123)
yuanzu.push(123)

enum Days {
    Sun,
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat
}

console.log(Days[0], Days['Sun'])

// 后续未手动赋值的递增步数为1
enum Days2 {
    Sun = 7, 
    Mon = 1.5, 
    Tue, 
    Wed, 
    Thu, 
    Fri, 
    Sat
}

// 无视类型检查, 可以赋值除了数字外的
enum Days3 {
    Sun = 7,
    Mon,
    Tue,
    Sat = <any>'S'
}

// 常数枚举: Directions.Up 不可变
const enum Directions {
    Up,
    Down,
    Left,
    Right
}

// 计算所得项，必须放在常数项后面
enum Color {Red, Green, Blue = "blue".length}

console.log(Color.Blue)