function first(x){
    //simulate code delay
    setTimeout(function(){
        console.log(1);
        console.log('Call back function');
        x();
        //second(); // callback function
    },1000); //1sec = 1000 miliseconds
}
//first();

function second(){
    console.log(2);
    //third();
}

function third(){
    console.log(3);
}
first(second); // here second is the callback function 



