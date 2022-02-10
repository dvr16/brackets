module.exports = function check(str, bracketsConfig) {
    let stek = [];

    if (str.length % 2 !== 0) return false;

    for (let i = 0; i < str.length; i++) {
        stek.push(str[i]);

        for (let j = 0; j < bracketsConfig.length; j++) {
            if (stek[stek.length - 1] === bracketsConfig[j][1] && stek[stek.length - 2] === bracketsConfig[j][0]) {
                stek.pop();
                stek.pop();
            }
        }
    }

    return stek.length === 0;
};