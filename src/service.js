class Proxy {
    constructor(tuple) {
        this.tuple = tuple;
    }

    apply() {
        console.log(arguments);
    }
};

export class Service {
    seq(val) {
        return new Proxy({
            seq: this, 
            promise: Promise.resolve(val)
        });
    }

    handleNumber(val) {
        this.seq(val).multiply(3);        
    }

    multiply(value) {
        return value
    }
};

// f.load().then((...args) => {
//     console.log(3);
//     console.log(args);
//     console.log(4);
// });
// f.loadAsync().then((...args) => {
//     console.log(5);
//     console.log(args);
//     console.log(6);
//     return this;
// }).catch((...args) => {
//     console.log(7);
//     console.log(args);
//     console.log(8);               
// });

// class F {
//     load() {
//         return new Promise((fullfill, reject) => {
//             console.log(1);
//             fullfill({a: 10});
//             console.log(2);
//         });
//     }

//     loadAsync() {
//         return new Promise((fullfill, reject) => {
//             console.log(1);
//             setTimeout(() => {
//                 console.log(3);
//                 fullfill({a: 10});                
//                 console.log(4);
//             })
//             reject({b: 20});
//             console.log(2);
//         });
//     }
// };