

import {messageMixer as msgMix} from './Message Mixer2.js';



  function displayMessage() {
    console.log(msgMix.countCharacter("What is the color of the sky?", "t"));
    console.log(msgMix.capitalizeFirstCharacterOfWords("What is the color of the sky?"));
    console.log(msgMix.reverseWord("What is the color of the sky?"));
    console.log(msgMix.reverseAllWords("What is the color of the sky?"));
    console.log(msgMix.replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
    console.log(msgMix.encode("What is the color of the sky?"));
    console.log(msgMix.palindrome("What is the color of the sky?"));
    console.log(msgMix.piglatin("What is the color of the sky?", 'b'));
  }
  
  displayMessage();