const timers = function(array) {
  const schedule = array.filter((element) => {
    return !isNaN(element) && element >= 0;
  });
  schedule.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < schedule.length; i++) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, schedule[i] * 1000);
  }
};

let schedule = process.argv.slice(2);
timers(schedule);