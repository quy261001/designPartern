function Observable() {
    const observers = [];
  

    function subscribe(subscriber) {
      observers.push(subscriber);
    }
  

    function unsubscribe(subscriber) {
        console.log(subscriber)
      const index = observers.indexOf(subscriber);
      if (index !== -1) {
        observers.splice(index, 1);
      }
    }
  

    function notify(data) {
      observers.forEach(observer => {
        observer(data);
      });
    }
  
    return {
      subscribe,
      unsubscribe,
      notify,
    };
  }
  
  const usersSubscribe = new Observable();
  console.log(usersSubscribe)
  const userOne = (data) => console.log("Subscriber 1 " + data);
  const userTwo = (data) => console.log("Subscriber 2 " + data);
  const userThree = (data) => console.log("Subscriber 3 " + data);
  
  usersSubscribe.subscribe(userOne);
  usersSubscribe.subscribe(userTwo); 
  usersSubscribe.subscribe(userThree);
  usersSubscribe.unsubscribe(userOne); 
  
  usersSubscribe.notify("được thông báo bài viết mới");
  