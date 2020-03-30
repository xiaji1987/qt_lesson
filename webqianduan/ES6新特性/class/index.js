var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.setAge = function (newAge) {
        console.log(this.age);
        this.age = newAge;
        console.log(this.age);
        console.log(this.name);
    };
    return Person;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.studentCount = 46;
        return _this;
    }
    Teacher.prototype.setStudentCount = function (newCount) {
        this.setStudentCount = newCount;
    };
    return Teacher;
}(Person));
var person = new Person;
console.log(person.name, person.setAge(21));
var teacher = new Teacher;
console.log(teacher.name, teacher.setAge(22));
