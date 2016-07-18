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
};

var everyPossiblePair = function(array) {
	  for (var i = 0; i < array.length; i++) {
	  	array[i]
	  }
    return [array];

    /*var result = [],
    for(var i=0; i<array length; i++)
        result.push(array[i]);
    return result;*/
};

var allElementsExceptFirstThree = function(array) {
   return array.slice(3,8); // ou bien .slice(3,array.length); si on connait pas longuer
};

var addElementToBeginning = function(array, element) {
    array.unshift(element);
    return array;
};

var sortByLastLetter = function(array) {

    return array.sort().reverse();
};

var getFirstHalf = function(string) {
	for (var i = 0; i < string.length; i++) {
		i+3;
		return string [i];
	}
  
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
    return 'Write your method here';
}

var shortestWord = function(array) {
    return 'Write your method here';
}

var longestWord = function(array) {
   /* for (i = 0; i < array.length; i++) {
    return array[i];
    if (i < array.length-1)
        return array;
      }*/
}

var sumNumbers = function(array) {
    return 'Write your method here';
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
    return 'Write your method here';
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
