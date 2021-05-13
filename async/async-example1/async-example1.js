console.log("this will print first");

setTimeout(function() {
  console.log("This will always print last");

}, 2000);

console.log("This will print second");