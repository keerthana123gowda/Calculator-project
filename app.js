 let expression = document.getElementById('txt').value;
    function take(value) {
        expression = expression + value;
        document.getElementById('txt').value = expression;

    }
    function solve() {
        document.getElementById('txt').value = eval(expression);

    }

    function clean() {
        expression = "";
        document.getElementById('txt').value = expression;

    }