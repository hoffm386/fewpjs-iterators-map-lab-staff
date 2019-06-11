const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map( (tutorial) => {
    let words = tutorial.split(" ");
    /*
      in JavaScript you can slice with any index, and if it's too high you just
      get an empty string as the result.  so this would be fine even if we had
      words that were shorter than 2 characters
    */
    words = words.map( word => word[0].toUpperCase() + word.slice(1) );
    return words.join(" ");
  })
}
