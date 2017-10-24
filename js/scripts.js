$(document).ready(function() {
  $("#word-puzzle").submit(function(event) {
    event.preventDefault();
    var vowels = ["a", "e", "i", "o", "u"];
    var userSentence = $('#sentence-input').val();
    var result = userSentence.split("");

    for (var sentenceIndex = 0; sentenceIndex < result.length; sentenceIndex++) {
      for(var vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++) {
        if(vowels[vowelsIndex] === result[sentenceIndex]) {
          result[sentenceIndex] = "-";
        }
      }
    }

    var output = result.join("");
    $("#puzzle").append(output)



  });
});
