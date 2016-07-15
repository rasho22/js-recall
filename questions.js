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
        return voyelle.indexOf(voyelleL) !==-1;
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

   
};

var allElementsExceptFirstThree = function(array) {
   return array.slice(3,8); // ou bien .slice(3,array.length); si on connait pas longuer
};

var addElementToBeginning = function(array, element) {
    array.unshift(element);
    return array;
};

var sortByLastLetter = function(array) {
    return 'Write your method here';
}

var getFirstHalf = function(string) {
    return 'Write your method here';
}

var makeNegative = function(number) {
    return 'Write your method here';
}

var numberOfPalindromes = function(array) {
    return 'Write your method here';
}

var shortestWord = function(array) {
    return 'Write your method here';
}

var longestWord = function(array) {
    return 'Write your method here';
}

var sumNumbers = function(array) {
    return 'Write your method here';
}

var repeatElements = function(array) {
    return 'Write your method here';
}

var stringToNumber = function(string) {
    return 'Write your method here';
}

var calculateAverage = function(array) {
    return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function(array) {
    return 'Write your method here';
}

var convertArrayToObject = function(array) {
    return 'Write your method here';
}

var getAllLetters = function(array) {
    return 'Write your method here';
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
