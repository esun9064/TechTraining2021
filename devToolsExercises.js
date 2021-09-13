/**
 * This function should find and return all of the duplicate values 
 * in the "inpArray".
 */
 const findDuplicates = (inpArray) => {
  
  var values = new Map();
  var results = [];
  
  inpArray.forEach((value) => {
    if (!values.has(value)) {
      values.set(value, 1);
    } else {
      var currentCount = values.get(value);
      values.set(value, currentCount + 1)
    }
  });

  for (const [key, count] of values) {
    if (count > 1) {
      results.push(key);
    }
  }

  return results;

}

window.findDuplicates = findDuplicates