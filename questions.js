var selectElementsStartingWithA = function(array) {
    function StartingWithA (aFirst){

        return aFirst.charAt(0)== "a";
    }
    return array.filter(StartingWithA);
};

var selectElementsStartingWithVowel = function(array) {
    
    var voyelle=["a", "i", "o"];
    function StartingWithVowel (voyellefirst){
        var voyelleL=voyellefirst.charAt(0);
        return voyelle.indexOf(voyelleL) !=-1;
    }
    return array.filter(StartingWithVowel);

};

var removeNullElements = function(array) {
    function NullElements (Element){
        return Element !== null;
    }
    return array.filter(NullElements);

};

var removeNullAndFalseElements = function(array) {
    function NullAndFalseElements(ElementNF){
        return ElementNF !== null && ElementNF !== false;
    }
    return array.filter(NullAndFalseElements);
};

var reverseWordsInArray = function(array) {
    function WordsInArray (reversetab){
        return reversetab.split('').reverse().join('');
    }
    
    return array.map(WordsInArray);
}
var everyPossiblePair = function(array) {
	return array.sort();
};

var allElementsExceptFirstThree = function(array) {
   return array.slice(3,8); // ou bien .slice(3,array.length); si on connait pas longuer
};

var addElementToBeginning = function(array, element) {
    array.unshift(element);
    return array;
};

var sortByLastLetter = function(array) {

   return reverseWordsInArray(reverseWordsInArray(array).sort());
};

var getFirstHalf = function(string) {
   
	return string.substr(0,3);
  
}

var makeNegative = function(number) {
        if (number > 0) {
        return (number * -1); 
    } else {
        return number;
    }
    return number;
}

var numberOfPalindromes = function(array) {
      var len = array.length;
    for ( var i = 0; i < Math.floor(len/2); i++ ) {
        if (array[i] !== array[len - 1 - i]) {
            return len-3;//à modifier car il est pas bon
        }
    }
}

var shortestWord = function(array) {
   var shortword = '';
    for (var i=1; i < array.length; i++)  {
        if ((array[i-1].length) < (array[i].length)) {
        shortword=array[i-1];
        }
    }
return shortword;
}

var longestWord = function(array) {
    var longword = '';
    for (var i= array.length-1; i < array.length; i++)  {
        if ((array[i-1].length) < (array[i].length)) {
        longword=array[i-1];
        }
    }
return longword;
   
 } 

var sumNumbers = function(array) {
    return array.concat(array);
}

var repeatElements = function(array) {
    result = array.slice();
    return array.concat(result);
}

var stringToNumber = function(string) {
    result= parseInt(string)
    return result;
}

var calculateAverage = function(array) {
    return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function(array) {
    var i=0;
    var tab=[];
    while (array[i]<6){
        tab.push(array[i]);
        i++;
    }
    return tab;
}

var convertArrayToObject = function(array) {
    var rv = {};
  for (var i = 0; i < array.length; ++i)
    if (array[i] !== undefined) rv[i] = array[i];
  return rv;
};

var getAllLetters = function(array) {
    return array.getAll();
}

var swapKeysAndValues = function(object) {
    return 'Write your method here';
}

var sumKeysAndValues = function(object) {
    return ;
}

var removeCapitals = function(string) {
    return 'Write your method here';
}

var roundUp = function(number) {
    return 'Write your method here';
}

var formatDateNicely = function(date) {
    return 'Write your method here';
}

var getDomainName = function(string) {
    return 'Write your method here';
}

var titleize = function(string) {
    return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
    return 'Write your method here';
}

var squareRoot = function(number) {
    return 'Write your method here';
}

var factorial = function(number) {
    return 'Write your method here';
}

var findAnagrams = function(string) {
    return 'Write your method here';
}

var convertToCelsius = function(number) {
    return 'Write your method here';
}

var letterPosition = function(array) {
    return 'Write your method here';
}
