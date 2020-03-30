class Person {
  public name : String = '刘海兵'
  private age : Number = 20

  public setAge(newAge) : void {
    console.log(this.age)
    this.age = newAge
    console.log(this.age)
    console.log(this.name)
  }
}

class Teacher extends Person {
  private studentCount : Number = 46
  private setStudentCount(newCount) : void {
    this.setStudentCount = newCount
  }
}

const person = new Person
console.log(person.name, person.setAge(21))
const teacher = new Teacher
console.log(teacher.name, teacher.setAge(22))