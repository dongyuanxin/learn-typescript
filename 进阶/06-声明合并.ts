// 函数声明合并
function reverse(x: number): number;
function reverse(x: string): string {
    return x
}


// 接口声明合并
interface Alarm {
    price: number;
}
interface Alarm {
    // price: string; // 类型不一致会报错
    weight: number;
}

// 合并后的结果：
// interface Alarm {
//     price: number;
//     weight: number;
// }

// 类的合并与接口合并规则一致