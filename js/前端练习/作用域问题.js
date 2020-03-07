var value = 1;

function foo() {
    console.log(value);
}

function bar() {
    value = 2;
    foo();
}

bar();