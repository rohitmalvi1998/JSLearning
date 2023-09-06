class Person{
    name;
    age;


    
constructor()
{
    console.log("Hello this is constructor function 2"); 
}


    play(){
        console.log("Hello Testing class");

    }
    eat()
    {
        console.log("Testing eating tab");
    }
    // Person() {

    //     console.log("Hello this is constructor function");
        
    // }

}
// if we want to access the methods/ Action / Behaviour of the class than we need to create a object by using 'new' 
//Reserve keyword and after we can call the methods/ Action / Behaviour of the class.

let classObject=new Person();
let classObject2=new Person();
classObject2.eat();
classObject2.play();
classObject.play();
