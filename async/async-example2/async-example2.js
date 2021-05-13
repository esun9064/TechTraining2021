pourCoffee();

fryEggs(2);

fryBacon(2);
console.log('bacon is ready');

toastBread(2);

function pourCoffee() {
  console.log('pouring coffee');
  setTimeout(function() {
    console.log('coffee is ready');
  }, 2000);
}

function fryEggs(numEggs) {
  console.log(`frying ${numEggs} eggs`);
  setTimeout(function() {
    console.log('eggs are ready');
  }, 3000);
}

function fryBacon(slices) {
  console.log(`frying ${slices} slices of bacon`);
  setTimeout(function() {
    console.log('bacon is ready');
  }, 3000);
}

function toastBread(slices) {
  console.log(`toasting ${slices} slices of bread`);
  setTimeout(function() {
    applyButter(function() {
      applyJam(function() {
        console.log('toast is ready');
      });
    });
  }, 2000);
}

function applyButter(callback) {
  console.log('putting butter on the toast');
  setTimeout(function() {
    callback();
  }, 1000);
}

function applyJam(callback) {
  console.log('putting jam on the toast');
  setTimeout(function() {
    callback();
  }, 1000);
}