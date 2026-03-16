// let date=new Date;
// console.log(date);

// let date=new Date(`2026-02-25`);
// date.setMonth(1);
// console.log(date);

// let user={
//     name:"ABC",
//     age:34,
//     address:{
//         city:"Delhi",
//         pincode:110001
//     }
// };
// let copyuser={...user};

// copyuser.address.city="mumbai";
// console.log(user);
// console.log(copyuser);
//////////////////////////////////////////////////////
// let student={
//     name:"ABC",
//     marks:{
//         maths:90,
//         science:80
//     }
// };
// let copystudent=Object.assign({},student);
// copystudent.marks.maths=100;
// ///////////////////////////////////////////////////
// let arr=[1,2,3];

// let arrcopy=[...arr];
// arrcopy[0]=10;
// console.log(arr);
///////////////////////////////////////////////////////
//deep copy
// let user={
//     name:"ABC",
//     age:34,
//     address:{
//         city:"Delhi"
//     }
// };
// let deepcopy=JSON.parse(JSON.stringify(user));
// deepcopy.address.city="mumbai";
// console.log(user);
// console.log(deepcopy);
// //using structuredClone
// let deepcopy2=structuredClone(user);
// deepcopy2.address.city="chennai";
// console.log(user);
// console.log(deepcopy2);
////////////////////////////////////////////////////////
// promise
let promise=new Promise((resolve,reject)=>{