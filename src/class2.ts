interface Person{
    name: string;
    say(message: string): void;
}

interface Programmer {
    writeCode(requirement: string): string;
}

// 다중 interface 구현 가능
/*
class KoreanProgrammer implements Person, Programmer{
    constructor(public name: string){
        
    }

    say(message: string): void {
        console.log('hi');
    }

    writeCode(requirment: string): string{
        console.log(requirment);
        return requirment + '.....';
    }

    loveKimchi(){
        console.log('love~ kimchi~');
    }
}
*/

// 추상클래스이기 때문에 instance를 만들 수 없다.
abstract class Korean implements Person{
    public abstract jumin: number;
    constructor(public name: string){

    }

    say(msg: string){
        console.log(msg);
    }

    abstract loveKimchi(): void;
}

// 하위클래스에 추상클래스를 구현해서 instance를 만들어야 한다.
class KoreanProgrammer extends Korean implements Programmer{

    constructor(public name: string, public jumin: number){  
        // 부모클래스 Korean의 생성자를 호출
        super(name);      
    }

    say(message: string): void {
        console.log('hi');
    }

    writeCode(requirment: string): string{
        console.log(requirment);
        return requirment + '.....';
    }

    loveKimchi(): void{
        throw new Error("Method not implemented.");
    }
}

const jay = new KoreanProgrammer('jay', 2222);
// cost jay2 = new Korean('jay'); -> Korean이 추상클래스이기 때문에 인스턴스를 만들 수 없다.
