class methodpractice
{
   p ;
   q ;  
    sum( x,  y)
    {
        this.p = x;
        this.q = y;
        return (this.p +this.q);
    }
    sub( x, y)
    {
        this.p = x;
        this.q = y;
        return (this.p - this.q);
    }
    mul ( x, y)
    {
        this.p = x;
        this.q = y;
        return (this.p * this.q);
    }
    div (x, y)
    {

        this.p = x;
        this.q = y;
        return (this.p / this.q);
    }  
   static staticmethod()
    {
        console.log("this is static method");

    }
}

const  obj = new methodpractice();
//obj.defaultmethod();
//obj.parametrizedmethod("khatibullah")
// Assignment 1 -- 

let sum =obj.sum(10,2)
let sum1 = obj.sum(sum,2)
console.log("sum is --: "+sum1)
let sub = obj.sub(sum1, 2)
console.log("subtraction  of expression is--: "+sub)
let mul = obj.mul(sub, 2)
console.log("Multtiplication  of expression is--: "+mul)
let div = obj.div(mul, 2)
console.log("final result of expression is--: "+div)

// Assignment 2 -- 








