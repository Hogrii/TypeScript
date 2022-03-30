// typescript의 확장자는 .ts
// 상단의 Terminal -> New Terminal을 통해 Terminal을 열 수 있다
// tsc 프로젝트명.ts를 입력하면 .js 파일이 만들어진다 : 컴파일러 실행
// 명령 : tsc [option] [file]

var hello = "hello";
let hello2 = "hello2";

// tsc hello.ts 입력 시 hello.js에 js코드가 만들어진다.
// tsc hello.ts --target es6 입력 시 변수타입도 그대로 만들어진다.

let timeoutPromise = new Promise((reslove, reject) => {
setTimeout(() =>  {
    reslove("1 sec");
}, 1000);
})
timeoutPromise.then(console.log);
// tsc hello.ts -> es5
// es5로 입력하면 Promise를 찾을 수 없다는 오류가 나온다.
// tsc hello.ts --lib es5,es2015.promise
// tsc hello.ts --lib es5,es2015.promise,es2015.iterable
// tsc hello.ts --lib es5,es2015.promise,es2015.iterable,dom
//-----------------------------------------------------------
// util.ts에서 메소드 가져와서 쓰기
import add from './util.js';
const value = add(1,2);
console.log(value);
// hello.ts --lib es2015,dom 은 축약형!
