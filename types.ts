//Primitive Types in TS
// let num:number=10;
// console.log(num);

// let str:string="Hello";
// console.log(str);

// let bool:boolean=true;
// console.log(bool);

//Speecial type
// let anyType:any="hi";
// console.log(anyType);

//String array
// let arrStr:string[]=["priyanka","sneha","pooja"];
// console.log(arrStr);

//Numeric array
// let arrNum:number[]=[10,12,43];
// console.log(arrNum);

//union type
let val:string|number;
val=10;
console.log("Numeric value:" +val);
val="Hello";
console.log("String value:"+val);

// type assertion
 let username:any="priyanka";
 let id=(<string>username);
 console.log(typeof(id));

 console.log((username as string).length);

