async function asyncfunc() {
    await setTimeout(() => {
        setTimeout(() => {
            console.log(`Wake up, Man2!`);
          }, 1000);
        console.log(`Wake up, Man1!`);
        
      }, 5000);

    console.log("Hello3");

    }
    
asyncfunc();