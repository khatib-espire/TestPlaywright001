class Automation
{
    parentvariable ="khatib"
    displayparentmenthod()
    {
        console.log("Parent method");
        console.log("Parent variable"+this.parentvariable)
    }
}
class AutomatTool extends Automation
{
    childvariable ="Inaaaya and Maham"
    displaychildvariable()
    {
         console.log("Child  method");

    }
}
const obj = new AutomatTool();
//obj.displayparentmenthod();
obj.displaychildvariable();

