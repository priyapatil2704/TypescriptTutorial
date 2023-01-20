
interface Person{
    firstname:string,
    lastname:string,
    age:number
}
//arrow function
let names=(dispName:Person) => {
    console.log(dispName.firstname);
    console.log(dispName.lastname);
}
names({
    firstname:"Priyanka",
    lastname:"Patil",
    age:22
});
//Normal function
// function disp(person:Person){
//     console.log(person.age);
// }
// disp("priyanka","patil",10);
