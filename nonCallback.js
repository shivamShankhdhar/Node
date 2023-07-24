function first(){
    //simulate code delay
    setTimeout(function(){
        console.log(1);
    },1000); //1sec = 1000 miliseconds
}
//first();

function second(){
    console.log(2);
}
first();
second();


//O/P -> 2 1       ------ bcz its a asynchronous program