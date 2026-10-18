class javascriptconstructor
{
    name ;
    age ;
    constructor(name, age)
    {
        this.name= name;
        this.age =age;
    }

    displayconstructorvalue()
    {
        console.log("Name value is passed though constructor "+ this.name)
        console.log("Name is is passed though constructor "+ this.age)    }
}
const objconstructor = new javascriptconstructor("Raj",30);
//console.log("Name value is passed though constructor "+ objconstructor.name)
//console.log("Name is is passed though constructor "+ objconstructor.age)
objconstructor.displayconstructorvalue();



