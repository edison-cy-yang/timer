const timer = function(schedule) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, schedule * 1000);
};

const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  let input = parseInt(key, 10);
  if (input >= 1 && input <= 9) {
    process.stdout.write(`Setting timer for ${input} seconds\n`);
    timer(input);
  }

  if (key === 'b') {
    timer(0);
  }
  
  if (key === '\u0003') {
    process.stdout.write("Thanks for using me, ciao!\n");
    process.exit();
  }
});