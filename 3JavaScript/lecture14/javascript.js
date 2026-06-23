// //callback

// function greet(name,callback){
//     console.log('hello ${name}');
//     callback();
// }

// function goodbye(){
//     console.log("goodbye")
// }
// // greet("Vishal",goodbye);
// console.log("Download started");
 
// setTimeout(()=>{
//     console.log("Download Completed")
// },2000);
// console.log("Show Data");

// // Callback Hell



// promise

const promise= new Promise ((res,rej)=>{
    let s=false;
    if(s){
        res("fulfilled");
    }
    else{
        rej("tera password glat hai");
    }
});
promise.then(result=>{
    console.log(result);
})
.catch(error=>{
    console.log(error);
})
.finally(()=>{
    console.log("Ho gaya ab ");
})


