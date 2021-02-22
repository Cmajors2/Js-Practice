
const cookBeanSouffle = require('./AsyncAwait3.js');

async function hostDinnerParty() {
    try {
      let resolvedValue = await cookBeanSouffle();
      console.log(`${resolvedValue} is served!`);  
    } catch (error) {
        console.log(`${error} I'm Ordering a Pizza!`);
    }
}

hostDinnerParty();