enum StarbuksGrade{
    // welcome부터 0,1,2라는 인덱스가 자동으로 입력된다.
    // 따라서 StarbukcsGrade.GREEN을 출력하면 1이 출력된다.
    // 중간에 순서가 바뀌면 index 값이 바뀌기 때문에 주의하거나 초기값을 설정한다.
    // 인덱스를 문자열로 입력할 수 있다.
    WELCOME = "WELCOME",
    DIAMOND = 3,
    GREEN = 1,
    GOLD = 2
}

function getDicound(v: StarbuksGrade): number{
    switch (v) {
        case StarbuksGrade.WELCOME:
            return 0;
        case StarbuksGrade.GREEN:
            return 5;
        case StarbuksGrade.GOLD:
            return 10;
    }
}
console.log(getDicound(StarbuksGrade.GREEN));
console.log(StarbuksGrade);
console.log(StarbuksGrade["3"]);
console.log(StarbuksGrade["GOLD"]);
console.log(StarbuksGrade.WELCOME == "WELCOME");