console.log(this);

function foo() {
    console.log(this);
}

foo();

function logThis() {
    console.log('Is this === window?' + (this === Window));
}

logThis();
var fooOb = {
    logThis: logThis
}
fooOb.logThis();