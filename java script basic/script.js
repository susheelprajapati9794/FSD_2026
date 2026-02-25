    let a = 10;
    const b = 20;
    var c = 30;
    let bool=true;
    console.log(a, b, c);
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
    console.log(typeof bool);

    let x=5;
    let y=10;
    console.log(x+y);
    console.log(x*y);
    console.log(x/y);
    console.log(x%y);   

    let age=25;
    if(age>=18){
        console.log("You are eligible to vote.");
    } else{
        console.log("You are not eligible to vote.");
    }
    //array
    let day=2;
    switch(day){
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid day number.");
    }
    //array 
    let array=[10,20,30,40,50];
    console.log(array);
    console.log(array[0]);
    console.log(array.length);
    array.push(60);
    console.log(array);
    array.pop();
    console.log(array);

    //object
    let student={
        name: "Sujeet",
        age: 21,
        course: "FSD"
    };
    console.log(student);
    console.log(student.name);
    console.log(student.age);
    console.log(student.course);

 //function 
 function add(p,q){
    return p+q;
 }
 console.log(add(5,10));

 //arrow function
 const multiply = (m,n) => m*n;
 console.log(multiply(5,10));
 //maths
    console.log(Math.sqrt(16));
    console.log(Math.pow(2,3));
    console.log(Math.random());

    //strings
    str="Hello, World!";
    console.log(str.length);