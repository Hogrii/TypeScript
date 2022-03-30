// 행위를 기술할 뿐, 동작(행위)이 없다.
interface TV {
    turnOn(): boolean;
    // 아무것도 안적으면 default가 void다
    turnOff(): void;
}
const myTV: TV = {
    turnOn(){
        return true;
    },
    turnOff(){

    }
}
function tryTurnOn(tv:TV){
    tv.turnOn();
}
tryTurnOn(myTV);


interface Cell{
    row: number;
    col: number;
    // ?를 붙여주면 타입을 갖지 않아도 Cell에 포함 되어있음을 알려준다
    piece?: Piece;
}

interface Piece{
    move(from: Cell, to: Cell): boolean;
}

function createBoard(){
    const cells: Cell[] = [];
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 3; col++) {
            cells.push({row,col})
        }
    }
    return cells;
}

const board = createBoard();
board[0].piece = {
    move(from: Cell, to: Cell){
        return true;
    }
}

// typescript에서 interface를 정의하면 개발하는 시점에서만 체킹하기 위해 존재하고
// 실제 런타임, 프로그램이 실행될 때에는 사라지게 된다.
// 따라서 interface를 이용해 만들게 되면 견고한 프로그램을 만들 수 있다.

interface SignUp {
    email: string;
    id: string;
    password: string;
}
function ajaxSignup(data: SignUp){}