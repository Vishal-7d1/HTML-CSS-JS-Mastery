// using Array Literal
let fruits=["Apple","Banana","Mango"];

// Using Array Constructor
let fruit= new Array("Apple","Banana","Mango","Lichi","Watermelon");

// length of array
console.log(fruit.length);

// push
fruit.push("watermelon");
console.log(fruit);

//pop
fruit.pop("watermelon");
console.log(fruit);

// unshift
fruit.unshift("vishal");
console.log(fruit);

//shift
fruit.shift();
console.log(fruit);

//includes
console.log (fruit.includes("Mango"));
console.log (fruit.includes("watermelon"));

//indexof
console.log(fruit.indexOf("Mango"));

//join
console.log(fruit.join(""));

//slice
console.log(fruit.slice(1,3));

//splice
console.log(fruit.splice(1,4));


let array= new Array("Apple","Banana","Mango","Lichi","Watermelon");

//normal for loop
for(var i=0;i<fruit.length;i++){
    console.log(array[i]);
}
 
//for of loop
for(let i of array){
    console.log(i);
}

//for each
array.forEach(function(i){
    console.log(i);
});

// Advance Array Method
array=[1,2,3,4,5,6,7,8,9,10]

//map
// sare element par condition apply kar dega 
const double=array.map(function(x){
    return x*2;
});

const doubledemo=array.map(x=>x*2);
console.log(double);
console.log(doubledemo);

//filter
// tumhari condition check karega 
// jo bhi element condition pass karega oo new array me aa  jayega 
const even=array.filter(function(x){
    return x%2==0;
});
const odd=array.filter(x=>x%2!=0);
console.log(even);
console.log(odd);

//reduce
//sare element ko ek variable me convert kardega

const sum =array.reduce(function(sum,x){
    return sum+x;
},0);
const sum1=array.reduce(function(sum,x){
    return sum+x;
});
const sum2=array.reduce((sum,x)=>sum+x,0);
const sum3=array.reduce((sum,x)=>sum+x);
console.log(sum);
console.log((sum1));
console.log((sum2));
console.log((sum3));

//find
//jayse hi condition setify hue wase hi return kar dega 
const f=array.find(function(x){
    return x==3;
});
const fdemo=array.find(x=>x=>3);
console.log(f);
console.log(fdemo);

//some()
// some batata hai ki conditon element ko satify kar rha hai ki nahi 
const s=array.some(function(x){
    return x>3;
});
const sdemo=array.some(x=>x>3);
console.log(s);
console.log(sdemo);

//every()
const e=array.every(function(x){
    return x>5;
});
const edemo=array.every(x=>x>5);
console.log(e);
console.log(edemo);
