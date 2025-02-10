
//standerd function
//1.  What is Function Statement ?
//A.  A normal function that we create using Naming convention. & By this we can do the Hoisting.
//----------------------------------------------------------------------
function add(a, b) {
  return a + b;
}

add(10, 20);

var mySum = add(10, 20);
//alert("total is "+ mySum);
console.log("total is " + mySum);

//----------------------------------------------------------------------
function mySub(num1, num2) {
  return num1 - num2;
}

mySub(20, 10);
//----------------------------------------------------------------------

//######################################################//######################################################
//2.  What is Function Expression ?
//A.  When we assign a function into a variable that is Function Expression. & We can not do Hoisting by this becz it acts like variable.
    var anyVariable = function () {
      console.log("Function Expression");
    };

    anyVariable();
//######################################################//######################################################
//3.  What is Anonymous Function ?
//A.  A Function without the name is known as Anonymous Function. & It is used in a place where function are treated as value.
    

      let Anonymous = function (num1,num2) {
        return num1 - num2;
      };


      Anonymous(20, 10);

//######################################################//######################################################
//4.  What is Named Function Expression ?
//A.  A function with a name is known as Named Function Expression.
     var namedFunction = function xyx(a,b){

                            console.log("Named  Function Expression "  + a + b);
                     }

        namedFunction(2,3);
//######################################################//######################################################
// 5.  Difference b/w Parameters and Arguments ?
// A.  When we creating a function  & put some variabels in this ( ) that is our Parameters.
//        For Ex - function ab( param1, param2 ){
//                               console.log("
//                       }
//        & When we call this function & pass a variabel in this ( ) that is our Arguments
//        For Ex - ab( 4, 5 );
//######################################################//######################################################
//6.  What is First Class Function Or First class citizens?
//A.   The Ability of use function as value,
//*     Can be passed as an Argument,
//*     Can be executed inside a closured function &
//*     Can be taken as return form.
//      // will return function
        var FirstClassFunction = function (param) {
          return function xyz() {
            console.log(" First Class Function ");
          };
        }; 

        FirstClassFunction()();

        let fnc = FirstClassFunction();
        fnc();

        console.log("FirstClassFunction "+ FirstClassFunction() );
        
        console.log( "FirstClassFunction call " + fnc());
    
//######################################################//######################################################
//7. Function are heart of JS. They are called first class citizens or first class functions because they have the ability to be stored in the variables, passed as parameters and arguments. They can also be returned in the function.
//######################################################//######################################################
//8.  Arrow function

let ArrowFunction = (a, b) => {
  return console.log("Arrow Function " + (a + b));
};

ArrowFunction(10, 20);

//------------------------------------------------------------
let ArrowFunction1 = () => {
 console.log("Arrow Function1 ");
};

//------------------------------------------------------------
let ArrowFunction2 = (a, b) => a + b;
let ArrowFunction3 = (a, b) => (a + b);
console.log("Arrow Function2 " + ArrowFunction2(10, 20));
//------------------------------------------------------------


//######################################################//######################################################

