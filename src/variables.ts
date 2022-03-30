// var와 let의 차이는 스코프
// var는 함수단위, 해당 함수 밖에서는 접근 불가
var score1 = 0;
let score2 = 200;
const defaultScore = 0;

function outer(){

    /*
    function inner(){
        // fuction inner() 안에서 선언되었기 때문에 inner 밖에서는 접근이 불가하다
        var score = 0;
    }
    */
    if(true){
        // 여기서 사용한 var는 function outer()안에서 선언되었기 때문에
        // console.log(score)에 찍힌다.
        var score = 0;
    }
    for(var i=0; i<3; i++){
        setTimeout(function(){
            
            console.log(i);
        }, 100)
    }

    // score의 변수인 var는 함수단위이기 때문에 밖에서 접근이 불가하다
    // console.log(score);
}