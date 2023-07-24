//promise is a object in javascript
function myPromise(name){
   return new Promise(function(resolve,reject){
        if(name=='shivam'){
            resolve("Promise resolved");
        }else{
            reject("Promise rejected");
        }
    });
}
myPromise('shiva').then(function(val){
    console.log(val);
},function(val){
    console.log(val);
});