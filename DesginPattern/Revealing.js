const counter = (() => {
    let count = 0;
    
    const print = (message) => {
        console.log(message + '---' + count);
    }
    const getCount = () => count
    const setCount = (value) => count = value
    const incrementCount = () => {
        count += 1;
        print('After increment: ');
    }
    const resetCount = () => {
        print('Before reset: ');
        count = 0;
        print ('After reset: ');
    }
    return {
        // value: count,
        get: getCount,
        set: setCount,
        increment: incrementCount,
        reset: resetCount,
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