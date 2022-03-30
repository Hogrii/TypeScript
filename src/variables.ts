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
        // let score: number; : 숫자형 외에는 할당할 수 없게 만든다.

        // score="30"; : score가 int 타입임을 알고 있기 때문에 오류가 생성
        // 하지만 var score;로 선언이 되어있는 상태라면 오류가 발생하지 않는다.

        // const는 상수이기 때문에 선언될 때 타입을 선언해줘야 한다.
        // const score: number;
    }
    
    for(let i=0; i<3; i++){
        setTimeout(function(){            
            console.log(i);
        }, 100)
    }
    console.log(score);

    // score의 변수인 var는 함수단위이기 때문에 밖에서 접근이 불가하다
    // console.log(score);
}
outer();