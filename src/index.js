module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 != 0) return false;
    let controllArr = [];
    let arr1 = ['|', '(', '[', '{'];
    let arr2 = ['|', ')', ']', '}'];
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (str[i] == arr1[j]) controllArr.push(j);
            else if (str[i] == arr2[j]) controllArr.push((j) * (-1));
        }
    }
    for (let i = 0; i < controllArr.length; i++) {
        if (controllArr[i + 1] < 0) {
            if (controllArr[i] > 0 && (controllArr[i] * (-1)) == controllArr[i + 1]) {
                controllArr.splice(i, 2);
                i -= 2;
            } else return false;
        }
    }
    return true;
}
