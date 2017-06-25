class Person {
  constructor(name) {
    this.name = name;
  }
  say(msg) {
    console.log(`${this.name}이 ${msg}라고 말합니다.`);
  }
}

class Student extends Person {
  constructor(name) {
    super(name);
  }
  study() {
    console.log('공부한다');
  }
}
const s1 = new Student('홍길동');

