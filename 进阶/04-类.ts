class Parent {
    name: string
    private id: string

    public constructor(name: string) {
        this.name = name
    }

    public sayHi(): string {
        return `My name is ${this.name}`
    }
}

class Children extends Parent{
    public constructor(name: string) {
        super(name)
        console.log(this.name)
    }
}

// 抽象类不能直接实例化
abstract class Animal {
    public name
    public constructor(name) {
        this.name = name
    }

    public abstract sayHi()
}

// 需要实例化抽象方法
class Cat extends Animal {
    public sayHi() {
        console.log(`${this.name} says: 'Hello world!'`)
    }
}