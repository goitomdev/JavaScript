function analyzeText(text) {
	let cleanedText = cleanText(text);
	return {
	  wordCount: getWordCount(cleanedText),
	  letterCount: getLetterCount(text),
	  nonLetterCount: getNonLetterCount(text),
	  mostCommonLetter: getMostCommonLetter(cleanedText),
	  longestWord: getLongestWord(cleanedText),
	};
  }
  
  function isLetter(character) {
	return character.toLowerCase() !== character.toUpperCase();
  }
  
  function cleanText(text) {
	const validChars = "abcdefghijklmnopqrstuvwxyzæøåABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ ";
	let cleanedText = "";
  
	for (let index = 0; index < text.length; index++) {
	  if (validChars.includes(text[index])) {
		cleanedText = cleanedText + text[index];
	  }
	}
	return cleanedText;
  }
  
  function getWordCount(text) {
	let words = text.split(" ");
	let wordCount = 0;
  
	for (let index = 0; index < words.length; index++) {
	  if (words[index].trim() !== "") {
		wordCount++;
	  }
	}
  
	return wordCount;
  }
  
  function getLetterCount(text) {
	let letterCount = 0;
  
	for (let index = 0; index < text.length; index++) {
	  if (isLetter(text[index])) {
		letterCount++;
	  }
	}
	return letterCount;
  }
  
  function getNonLetterCount(text) {
	return text.length - getLetterCount(text);
  }
  
  function getMostCommonLetter(text) {
	if (!text) return "";
  
	let mostCommonLetter = "";
	let letterCounts = {};
	let highestCount = 0;
	
  
	for (let char of text) {
	  if (isLetter(char)) {
		letterCounts[char] = (letterCounts[char] || 0) + 1;
  
		if (letterCounts[char] > highestCount) {
		  mostCommonLetter = char;
		  highestCount = letterCounts[char];
		}
	  }
	}
	return mostCommonLetter;
  }
  
  function getLongestWord(text) {
	let words = text.split(" ");
	let longestWord = "";
  
	for (let word of words) {
	  if (word.length > longestWord.length) {
		longestWord = word;
	  }
	}
  
	return longestWord.toLowerCase();
  }
  