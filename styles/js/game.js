// The array of questions for the game.
var questions = [
    { q: 'A function needs to be called to run.', a: 't' },
    { q: 'There is only one type of data: Boolean.', a: 'f' },
    { q: 'appendChild() is NOT a JavaScript method.', a: 'f' },
    { q: 'A for loop consists 3 parts.', a: 't' },
    { q: 'JSON stands for JavaScript Objection Notation.', a: 't' }
  ];
  
  // We start the game with a score of 0.
  var score = 0;
  
  // Loop over every question object
  for (var i = 0; i < questions.length; i++) {
    // Display current question to user and ask OK/Cancel
    var answer = confirm(questions[i].q);
  
    // Compare answers
    if (
      (answer === true && questions[i].a === 't') ||
      (answer === false && questions[i].a === 'f')
    ) {
      // Increase score
      score++;
      // Alert the user
      alert('Correct!');
    } else {
      alert('Wrong!');
    }
  }
  
  // Show total at end
  alert('You got ' + score + '/' + questions.length);
  