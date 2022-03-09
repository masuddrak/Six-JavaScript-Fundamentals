//1 how to Declaret a veriable const & let 
const fatherName="Abul Kalam Azad"
let color='red'
color="green"

// 2 basic 6 condition ===, !==, <, >, =<, >=
const number=4
const name='masud'

if(number===5){
    // console.log('this number 5')
}
else{
    // console.log('number is not equal 5')
}
// multiple condition &&,||
if(number===4 && name==='rakib'){
    // console.log('boat a maching')
}
else if(number===3 || name==='masud'){
    // console.log('just name is maching')
}
else{
    // console.log('not a mCHING')
}
// 3 Array declare
// Array index,length,push
const numbers=[25,45,7,56,8]
for(let i=0; i<numbers.length; i++){
    // console.log(numbers[i])
}


//5 function
function multiplay(num1,num2){
    const total=num1+num2;
    return total;
}
const result=multiplay(5,8)
// console.log(result)

//6 create a object
const student={
    name:'Masud Rana',
    roll:555,
    result:'GPA:5'
}
const output='result'
// console.log(student.result)
// console.log(student['result'])
console.log(student[output])