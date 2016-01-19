/**
 * Created by Administrator on 1/12/2016.
 */
console.log('This is a Line From JS file')
localStorage.setItem('name','lucy');

/**
 * Return...
 * @param name
 * @returns {string}
 *  if(name === undefined)
 */
var sayHello = function(name){
    if(!name)
    {return 'Hello world';}
    return 'Hello '+ name;


};


var greeting = sayHello('Lucy');
console.log(greeting);
var age ='123';


var nano={//contexto de un jason/>JASON/>esto es para la instancia.
    name:'Nano',
    bark: function(){
        console.log(this.name+ 'is barking')}
};

/*var Pet=function(name){
    //Properties
    this.name=name;
    //Methods
    this.bark=function(){//Method public
        console.log(this.name + 'is barking')
    };
    var doSometihng=function(){};//Method private
};
*/

var Est = function(name, ci){
    //properties
    this.name = name;
    this.ci = ci;
    this.newname = function(){
        console.log(this.name + 'is name')
        console.log(this.ci + 'is ci')
    };
    this.newci = function(){
        console.log(this.ci + 'is name')

    };
};
// 2da way to create a class
var Person = function(){


};
var Pet=function(name){
    this.name = name;
    //var que=123;
};
Pet.prototype.bark = function() {
    console.log(this.ci + 'is name')

};
/*
var age = '';
function calculateAge(bornYear){
  var age = 2014 - bornYear;
          return age;
};*/
/*
var age = '';
var calculateAge = (bornYear){
     age = 2016 - bornYear;
    return age;
};*/
var numbers;
var doOperations=function(){

 //arguments
    //arguments = [4,5,6]
    numbers = arguments;

    console.log('Max is:',getMax() )
    console.log('Max is:',getMin() )
    console.log('Max is:',getAvg() )
    console.log('Max is:',getSum(0,numbers.length-1) )
    var max;
    var sum;
    var avg;

    var getSum= function( initialIndex,endIndex) {
    
    }
    var getMax1= function(){
         if (numbers[0] < numbers[1])
         {    max = numbers[1];
             if( numbers[2] < max )
             {  return max; }
             else
             { max = numbers[2];
             return max;}
         }
         else
         { max = numbers[0];
             if ( numbers[2]< max)
             { return max;}
             else
             { max = numbers[2];
                 return max
             }
         }

    };
    var getSum= function(){
        sum = numbers[0]+numbers[1]+numbers[2];
    }
    var getAvg=function(){
        avg = sum/(numbers.length-1);
    }


};