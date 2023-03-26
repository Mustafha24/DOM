//    ---------------ONE----------------------
// try {
//   function change(str) {
//     num = Number(str);
//     if (isNaN(num)) {
//         throw new Error('Invalid Number')
//     } else {
//       console.log(num, typeof num);
//     }
//   }
// } catch (e) {
//   console.log(e.Error);
// }
// change(123)
// change("abc");

//--------------------TWO-----------------------

// try {
//   function getName(obj) {
//     if (obj.Name == undefined || obj.Age == undefined) {
//       throw new Error("Missing some values");
//     } else {
//       console.log(`Name: ${obj.Name},Age :${obj.Age}`);
//     }
//   }
// } catch (e) {
//   console.log(e.Error);
// }

// getName({ Name: "Ahmad", Age: 19 });
// getName({ Name: "Ahmad" });
// getName({ Age: 19 });

//-----------------Three--------------
// class Car{
//     constructor(name,manfc_year){
//         this.name=name
//         this.year=manfc_year
//     }
//     details(){
//         console.log(`The name of car is ${this.name} and the year of manufacturing is ${this.year}`);
//     }
//     age(){
//         var date=new Date()
//         console.log(`The age of car is ${date.getFullYear()-this.year}`);
//     }
// }

// obj=new Car("Skoda",2012)
// obj.details()
// obj.age()
// console.log(obj);

//------------------FOUR------------
// class Employee{
//     constructor(name,position,salary){
//         this.name=name
//         this.position=position
//         this.salary=salary
//     }
//     getSalary(){
//         console.log(`The salary of employee is ${this.salary}`);
//     }
// }
// obj=new Employee("Ravi","Developer",20000)
// obj.getSalary()


//--------------------------------FIVE----------------------


// class Person {
//   constructor(name, age) {
//     if (name == undefined || age == undefined) {
//       this.name = "Unknown";
//       this.age = 0;
//     } else {
//       this.name = name;
//       this.age = age;
//     }
//   }
//   getDetails() {
//     console.log(`Name: ${this.name}, Age: ${this.age}`);
//   }
// }

// obj1 = new Person("Ahmad", 17);
// obj2 = new Person();
// obj1.getDetails()
// obj2.getDetails()


// ------------------------SIX-----------------------


// class Calculator{
//     static add(a,b){
//         console.log(a+b);
//     }
// }

// Calculator.add(4,5)


//-------------------SEVEN--------------------

// Object.prototype.details=function(){
//     console.log(`Hi ${this.name}`);
// }

// class sam{
//     constructor(name){
//         this.name=name
//     }

// }
// obj=new sam("Ahmad")
// console.log(obj);


//----------------------Nine----------------------
// function outer() {
//     return function inner() {
//         if (arr.includes(num,0)) {
//             console.log('yes');
//         } else {
//             console.log('no');
//         }
//     }
// }
// const arr=[1,2,3,4,5]
// var num=3
// outer(arr)(num)


//--------------------Ten----------------
// var products = [
//     { name: "Shirt", category: "Clothing" },
//     { name: "Hat", category: "Accessories" },
//     { name: "Pants", category: "Clothing" },
//     { name: "Sunglasses", category: "Accessories" },
//   ];
  
//   function outer(products) {
//     return function inner(cat) {
//       var filtered_arr = products.filter((ele) => {
//         if (ele.category == cat) {
//           return true;
//         }
//       });
//       console.log(filtered_arr);
//     };
//   }
//   outer(products)("Clothing");
  


