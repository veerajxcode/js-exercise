// Immediately Invoked Function Expressions IIFE()

(function chai(){ //named IIFE
    console.log(`DB CONNECTED!!`);
})();

((username) =>{ // Simple (unnamed IIFE)
    console.log(`Hello there ${username}`);
})('Veeraj')