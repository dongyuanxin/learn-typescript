interface Alarm {
    alert()
}

interface Light {
    lightOn()
    lightOff()
}

class Door {

}

// 继承多个接口，个人观点：比抽象类更好用
class SecurityDoor extends Door implements Alarm, Light {
    alert() {
        console.log('Car alert')
    }

    lightOn() {
        console.log('Car light on')
    }
    lightOff() {
        console.log('Car light off')
    }
}
