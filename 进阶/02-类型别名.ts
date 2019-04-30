// 类型别名：用来给一个类型起个新名字。
// 常用于 “联合类型”
type StringOrNumber = string | number
function getOwn(m: StringOrNumber): StringOrNumber {
    return m
}

// 字符字面量类型：约束取值只能是某几个字符串中的一个
type EventNames = 'click' | 'srcoll' | 'mousemove'
function handleEvent(ele: Element, event: EventNames, callback?: Function) {
    // ...
}

handleEvent(document.querySelector('#qq'), 'click')