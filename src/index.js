module.exports = function reverse(n) {
    let operator = "";
    if (n < 0) {
        operator = "-";
        n *= - 1;
    }
    const string = n.toString();
    return +Array.from(string).reverse().join("");
};
