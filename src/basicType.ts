let numValue: number;
let stringValue: string;
let booleanValue: boolean;
let undefinedValue: undefined;
let nullValue: null;
let objValue: object;
let symbolValue: symbol;
let anyValue: any;

numValue = 3.3;
// 문자열에는 ""와 ''모두 사용 가능하고 ``를 사용하면 개행도 사용 가능하다
stringValue = "hello";
stringValue = 'hello';
stringValue = `
hello
${1+1}
hi
`
booleanValue = true;
// undefined에 null도 입력 가능하다.
// undefined와 null은 모든 타입들의 하위타입으로 상위타입으로 정의된 변수에 할당될 수 있다.
undefinedValue = null;
numValue = null;
numValue = undefined;
// anyValue는 모든 타입들의 상위타입으로 하위타입들을 할당 할 수 있다.
anyValue = 1;
anyValue = "3";
anyValue = undefined;
anyValue = null;
anyValue = {};
// objValue는 객체만 할당할 수 있다.
objValue = { name: 'jay'};
objValue = new String('hello');
// symbolValue는 Symbol()이라는 함수만 할당 가능하다. new 이런거 안쓴다
symbolValue = Symbol();
// 배열을 정의할 땐 타입을 먼저 정의해야 한다.
let nameList: string[];
nameList = ["1", "3"];
nameList.push("333");
// 객체에 대한 타입을 정의한다 : inline 타입..
// 매번 사용해야하는 inline 타입은 매번 선언할 수 없기 때문에 다른 방법을 이용하기도 한다.
let user1: {name: string, score: number};
user1 = {
    name: 'jay',
    score: 30
}
// n개의 타입으로 구성된 배열을 정의한다.
let tuple2: [number, string];
let tuple3: [number, number, number];
tuple2 = [1,"hello"];
tuple3 = [1,2,3];
