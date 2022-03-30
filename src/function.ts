// 함수의 매개변수에 타입 어노테이션을 작성한다
// return 값의 타입 어노테이션을 작성해도 된다
function add(x:number, y:number):number{
    return x + y;
}
// add 함수를 사용할 때 다른타입의 매개변수를 입력할 수 없다.
// add(1, "2");
const result = add(1, 2);

// 매개변수에 ?를 붙여 optional한 매개변수로 만들어 주면 매개변수를 넣지 않아도 동작한다.
// optional한 매개변수에 default 값을 입력해줄 수도 있다.
function buildUserInfo(name?: "-"/*string*/, email?: "-"/*string*/){
    return {name, email};
}
const user = buildUserInfo();

const add2 = (a:number, b:number) => a + b;

interface Stroage{
    a: string;
}
interface ColdStroage{
    b: string;
}
// 문자열을 타입 어노테이션에 명시해도 된다.
// 통조림이라는 문자열이 오면 Storage를 출력, 아이스크림은 ColdStorage를 출력한다.
// 매개변수가 다르기 때문에 같은 이름도 사용 가능 : 함수 오버로드
function store(type: "통조림"): Stroage;
function store(type: "아이스크림"): ColdStroage;
function store(type: "통조림" | "아이스크림"){
    if(type=="통조림"){
        return {a: "통조림"}
    }else if(type == "아이스크림"){
        return {b: "아이스크림"}
    }else{
        throw new Error('unsupported type');
    }
}

const s = store('통조림');
s.a