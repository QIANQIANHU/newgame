// business logic

// user interface logic
$(document).ready(function() {
  $("form#word-game").submit(function(event) {
    event.preventDefault();
    var sentenceInput = $("#sentence").val();
    var vowelsCount = 0;

    for(var i = 0; i < sentenceInput.length; i++) {
      if (sentenceInput.charAt(i) === "a"||sentenceInput.charAt(i) === "A"||sentenceInput.charAt(i) === "e"||sentenceInput.charAt(i) === "E"||sentenceInput.charAt(i) === "i"||sentenceInput.charAt(i) === "I"||sentenceInput.charAt(i) === "i"||sentenceInput.charAt(i) === "I"||sentenceInput.charAt(i) === "o"||sentenceInput.charAt(i) === "O"||sentenceInput.charAt(i) === "u"||sentenceInput.charAt(i) === "U") {
        vowelsCount += 1;
      }
    };

    $(".vowel").text(vowelsCount);//revise the text value later


  });
});


// var sentenceNormal = 'kaws jfkaj kahfkdj afao';
// var sentenceToArray = sentenceNormal.split('');
//
// var vowels = ['a','e','i','o','u','A','E','I','O','U'];
//
// var newVowels = [];
//
// for (var i = 0; i < sentenceToArray.length; i++) {
//   var foundVowel = false;
//   var key = sentenceToArray[i];
//   for (var o = 0; o < vowels.length; o++) {
//     if (vowels[o] === key) {
//        foundVowel = true;
//     }
//   }
//   if (foundVowel === true){
//   newVowels.push('-')}
//   else {
//   newVowels.push(key)}
// };

// alert(newVowels);
