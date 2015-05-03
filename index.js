//////console.log('Hello World!');
////
////var x = 3,
////    y = true,
////    z = undefined,
////    u = null,
////    t = 'SDU',
////    r = new String(t);
////
//////console.log(typeof String, t.slice(1));
//////console.log(r instanceof String);
////
////var o = {
////    prop1: 'first',
////    prop2: 'second'
////};
////
////o.prop1;
////
////var keyPrefix = 'pr';
////var keySuffix = 'op';
////
////for (var i = 1; i < 3; i++) {
////    var value = o[keyPrefix + keySuffix + i];
////    //console.log(value);
////}
////
////var arr = [];
////arr.push(3);
////arr.push('str');
////
////var arr2 = [3, 'str', true, undefined, o, [1, 2, 3],
////    function(a) {
////        // COK COK COK UZUN VE ZORLU BIR MATEMATIK PROBLEMI
////        console.log('maker ', a);
////        return function(b) {
////            console.log(a + ', ' + b + ' is very good!');
////        };
////    }
////];
////
////var fn = arr2[6];
//////var makeGood = fn('Hey');
//////var makeBad = fn('Very, very bad');
//////
//////makeGood('JavaScript');
//////makeGood('Google');
//////makeBad('PHP');
//////makeBad('Java');
////
////function adder(first) {
////    return function(second) {
////        console.log(first + second);
////    }
////}
////
////var add2 = adder(2);
////
//////add2(12431);
//////add2(15);
//////adder(4)(5);
////
////function fnx() {
////    var a = 3;
////    var b = 5;
////    console.log(o);
////
////    return function t() {
////        var o = 'yeni';
////        //console.log(b);
////
////        return function u() {
////            var z = 2;
////
////            console.log(o, a, b, z);
////        }
////    }
////}
////
////fnx()()();
////console.log(o)
//
//
//function rv() {
//    return {
//        print: function(message) {
//            console.log(message);
//        },
//        laugh: function() {
//            console.log('jajaja');
//        },
//        printObjectMessage: function(o) {
//            console.log(o.message);
//        },
//        stringify: function(o) {
//            console.log(o.toString());
////        }
////    }
////}
////
////var printer = rv();
//////printer.laugh();
//////printer.print('hello world');
//////rv()['print']('hello world');
////
////var o2 = {
////    message: 'mustafa keser',
////    toString: function() {
////        return 'mustafa sandal'
////    }
////};
////
//////printer.printObjectMessage(o2);
//////printer.printObjectMessage('hello');
//////printer.stringify('hello');
//////printer.stringify(o2);
////
////var total = 20;
////
////var accumulator = (function() {
////    var total = 0;
////    var discount = 0;
////
////    return {
////        add: function(number) {
////            total = total + number;
////            return total;
////        },
////        getTotal: function() {
////            return total * (1 - discount);
////        },
////        setDiscount: function(newValue) {
////            discount = newValue;
////        }
////    };
////})();
////
//////console.log(accumulator.toString());
////
//////accumulator(5);
//////total = 43;
//////console.log(accumulator(3));
//////console.log('total', total);
////accumulator.add(5);
////accumulator.add(8);
////accumulator.add(10);
////accumulator.add(2);
////
////console.log(accumulator.getTotal());
////
////accumulator.setDiscount(0.20);
////console.log(accumulator.getTotal());
////
////
//
//var arr = [{ a: 0 }, { a: 1 }, { a: 2 }, { a: 3 }, { a: 4 } , { a: 5 }];
////
////var arr2 = [];
////for (var i = 0; i < arr.length; i++) {
//    //arr[i] = arr[i] * arr[i];
//    //arr2[i] = { b: arr[i].a };
////}
//
//function printer(value) {
//    console.log('prints', value);
//}
//
//function square(val) {
//    return { a: val.a * val.a };
//}
//
//console.log(square({a: 2}));
//
//arr.forEach(printer);
//var rv = arr.map(square);
//
//function filterer(val) {
//    return val.a % 2 == 0;
//}
//
//console.log(arr.map(square).filter(filterer));
//
//new Object();
//new Array();

// constructor function
function Person(name) {
    this.name = name;
    //this.surname = null;
}

Person.prototype.name = '3';

Person.prototype.greet = function(person) {
    console.log('Hello, ' + person.name);
};

Person.prototype = {
    name: 3,
    greet: function(person) {
        console.log('Hello, ' + person.name);
    }
};


function inherits(childCtor, parentCtor) {
    function tempCtor() {};
    tempCtor.prototype = parentCtor.prototype;
    childCtor.superClass_ = parentCtor.prototype;
    childCtor.prototype = new tempCtor();
    /** @override */
    childCtor.prototype.constructor = childCtor;
}


var armagan = new Person('armagan');
var esra = new Person('esra');

console.log(armagan.name);
console.log(esra.name);

armagan.greet(esra);

class Person() {
    String firstname;

    Person(name) {
        firstname = name;
    }

    void greet(Person person) {
        System.out('Hello, ' + person.name);
    }
}

//console.log(arr);
//console.log(arr2);
