pourCoffee();
console.log('coffee is ready');

fryEggs(2);
console.log('eggs are ready');

fryBacon(2);
console.log('bacon is ready');

toastBread(2);
applyButter();
applyJam();
console.log('toast is ready');

function pourCoffee() {
  console.log('pouring coffee');
  wait(2000);
}

function fryEggs(numEggs) {
  console.log(`frying ${numEggs} eggs`);
  wait(3000);
}

function fryBacon(slices) {
  console.log(`frying ${slices} of bacon`);
  wait(3000);
}

function toastBread(slices) {
  console.log(`toasting ${slices} of bread`);
  wait(2000);
}

function applyButter() {
  console.log('putting butter on the toast');
  wait(1000);
}

function applyJam() {
  console.log('putting jam on the toast');
  wait(1000);
}

function wait(ms) {
  // don't ever actually do this
  var start = Date.now(),
      now = start;
  while (now - start < ms) {
    now = Date.now();
  }
}