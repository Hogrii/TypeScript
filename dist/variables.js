var score1 = 0;
let score2 = 200;
const defaultScore = 0;
function outer() {
    if (true) {
        var score = 0;
    }
    for (var i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log(i);
        }, 100);
    }
}
//# sourceMappingURL=variables.js.map