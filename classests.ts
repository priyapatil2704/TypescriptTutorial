class person{
    firstname:string;
    lastname:string;
    age:number;

    //constructor
    constructor(firstname:string,lastname:string,age?:number){
        this.lastname=lastname;
        //this.age=age;
    }
    getFirstName(){
        
    }
    getLastName(){
        console.log("last: "+this.lastname);
    }
    getAge(){
        console.log("Age: "+this.age);
    }
   
}

    let obj1=new person("priyanka","patil");
    // obj1.lastname="priyanka";
     obj1.getLastName();
     obj1.getAge();

    

    
