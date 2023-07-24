function first(x,y){
    //simulate code delay
    setTimeout(function(){
        console.log(1);
        x();
        y();
    },1000); //1sec = 1000 miliseconds
}
//first();
function second(){
    console.log(2);
}
first(function(){
    console.log(2);
},function(){
    console.log(3);
});
//second();


//O/P -> 2 1       ------ bcz its a asynchronous program