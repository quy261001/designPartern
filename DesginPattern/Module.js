const counter = (() => {
    let count = 0;
    
    const print = (message) => {
        console.log(message + '---' + count);
    }

    return {
        // value: count,
        get: () => { return count },
        set: (value) => { count = value },
        increment: () => {
            count += 1;
            print('After increment: ');
        },

        reset: () => {
            print('Before reset: ');
            count = 0;
            print ('After reset: ');
        }
    }
})();

counter.increment();
counter.increment();
counter.increment();
// console.log(counter.count); // undefined
// console.log(counter.value); // 0
counter.set(7);
console.log(counter.get())
counter.reset();