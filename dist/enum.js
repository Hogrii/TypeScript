var StarbuksGrade;
(function (StarbuksGrade) {
    StarbuksGrade["WELCOME"] = "WELCOME";
    StarbuksGrade[StarbuksGrade["DIAMOND"] = 3] = "DIAMOND";
    StarbuksGrade[StarbuksGrade["GREEN"] = 1] = "GREEN";
    StarbuksGrade[StarbuksGrade["GOLD"] = 2] = "GOLD";
})(StarbuksGrade || (StarbuksGrade = {}));
function getDicound(v) {
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
//# sourceMappingURL=enum.js.map