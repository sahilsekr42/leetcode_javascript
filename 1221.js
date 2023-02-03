var balancedStringSplit = function (s) {
    let count = tot = 0;
    s.split('').forEach(char => {
        char === 'R' ? count++ : count--;
        if (count === 0) {
            tot++;
        }
    });
        return tot;
}