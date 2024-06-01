var readlineSync=require('readline-sync');


//input
var userAnswerAge= readlineSync.question("Am I older than 25 ?");
console.log("You entered "+userAnswerAge);

//processing
if(userAnswerAge==="yes"){
    //output
    console.log("You are right!")
}
else{
    //output
    console.log("You are wrong!!!")

}

