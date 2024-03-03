// var student = { 

//     name: "Your name", 
    
//     age : 22, 
    
//     numbers: [89, 76, 56] ,

//     start: function (a,b,c){
//     var sum = a+b+c
//     var average = sum/3
//     console.log("Sum is", sum)
//     console.log("Average is ", average)
    
//     } 
// }
//     console.log(student.start(89,76,56))


let person = {
    name: "Tasnim",
    age: 26,
    occupation: "Student",
    personName: function(){
        return "My name is " +this.name
    },
    personAge: function(){
        return "My age is "+this.age
    },
    personOcc: function(){
        return "I am a "+this.occupation
    }

    }
person.name= "Rahman"
console.log(person.personName())
console.log(person.personAge())
console.log(person.personOcc())