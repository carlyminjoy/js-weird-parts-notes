b(); // runs
console.log(a); // undefined

var a = 'Hello World!';

function b() {
    console.log('Called b!')
}

function c() {

    function d() {
        console.log(a);
    }

    var a = 'hi';
    d();

}


c() // new execution context is created and placed in the execution stack