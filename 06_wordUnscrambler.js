// # Write a function word_unscrambler that takes two inputs: a scrambled
// # word and a dictionary of real words.  Your program must then output
// # all words that our scrambled word can unscramble to.
// #
// # Hint: To see if a string `s1` is an anagram of `s2`, split both
// # strings into arrays of letters. Sort the two arrays. If they are
// # equal, then they are anagrams.
// #
// # Difficulty: 3/5

var wordUnscrambler = function (word, dictionary) {
	var anagrams = [];
	word = word.split('');
	word = word.sort();
	for ( var i = 0 ; i < dictionary.length ; i ++ ) {
		var entry = dictionary[i].split('');
		entry = entry.sort();
		if ( word.join() == entry.join() ) {
			anagrams.push(dictionary[i]);
		}
	}
	return anagrams;
};

console.log(wordUnscrambler("turn", ["numb", "turn", "runt", "nurt"]));

// puts("\nTests for #word_unscrambler")
// puts("===============================================")
//     puts "word_unscrambler(\"cat\", [\"tac\"]) == [\"tac\"]: "  + (word_unscrambler("cat", ["tac"]) == ["tac"]).to_s
//     puts "word_unscrambler(\"cat\", [\"tom\"]) == []: "  + (word_unscrambler("cat", ["tom"]) == []).to_s
//     puts "word_unscrambler(\"cat\", [\"tic\", \"toc\", \"tac\", \"toe\"]) == [\"tac\"]: "  + (word_unscrambler("cat", ["tic", "toc", "tac", "toe"]) == ["tac"]).to_s
//     puts "word_unscrambler(\"cat\", [\"scatter\", \"tac\", \"ca\"] ) == [\"tac\"]: "  + (word_unscrambler("cat", ["scatter", "tac", "ca"] ) == ["tac"]).to_s
//     puts "word_unscrambler(\"turn\", [\"numb\", \"turn\", \"runt\", \"nurt\"]) == [\"turn\", \"runt\", \"nurt\"]: "  + (word_unscrambler("turn", ["numb", "turn", "runt", "nurt"]) == ["turn", "runt", "nurt"]).to_s

// puts("===============================================")