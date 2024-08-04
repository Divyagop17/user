console.log('my first code');


//functions
function display(fname) {
    console.log('welcome '+fname+ ' to functions');
}
display('Divya');
// function to add 2 numbers
function add_val(a,b) {
    var sum = a+b;
  //  console.log(sum)
  return sum;
}
var result=add_val(10,20);
console.log('The sum is '+result);

// multiplication 
function mult_val(a,b) {
    var mult = a*b;
    return mult;
}
var reslt=mult_val(10,20);
console.log('The multiplication is '+reslt);
//operators
var ab=7;
var abc=ab++;//post increment
console.log(ab);
console.log(abc);
//comparison operator
var exp =(4*7)-8**2+9
console.log(exp)

if(exp>0){
    console.log('value is greater than zero');
}
else if(exp==0)
{
    console.print('value is equal to zero');
}
else{
    console.log('value is less than zero');
}

var tt = 56;
var tm = '56';
// conditional statement
if(tm>tt & tm===tt)
{
    console.log('value is greater or equal')
}
else{
    console.log('value is less')
}
var result1 = exp>-30? 'value is greater than zero':'value is less than zero';
console.log(result1)

//looping statements
// print numbers from 1 to 10
for (let i = 0; i<10; i++) {
    console.log(i+1);
    
}

