class Student{
  static count = 0;
  constructor(name, age, pno, marks){
    this.name = name;
    this.age = age;
    this.phoneno = pno;
    this.marks = marks;
    Student.count++;
  }

  isEligibleCollege(){
    return this.marks >= 40 ? true : false;
  }

  isEligiblePlacement(minMarks){
    return (reqAge) => {
      return this.marks >= minMarks && this.age >= reqAge ? true : false;
    }
  }
}

const st1 = new Student("saurabh", 19, "3746734", 70);
const st2 = new Student("rohan", 18, "379734", 90);
const st3 = new Student("yathart", 20, "3746134", 30);
const st4 = new Student("rahul", 17, "1746734", 50);
const st5 = new Student("vijay", 21, "3946734", 80);

if(st1.isEligiblePlacement(70)(18)) console.log(st1.name);
if(st2.isEligiblePlacement(70)(18)) console.log(st2.name);
if(st3.isEligiblePlacement(70)(18)) console.log(st3.name);
if(st4.isEligiblePlacement(70)(18)) console.log(st4.name);
if(st5.isEligiblePlacement(70)(18)) console.log(st5.name);
