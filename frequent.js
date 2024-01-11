function findMostFrequentItem(arr) {
    if (arr.length === 0) {
      return "The array is empty";
    }
  
    let itemFrequency = {};
  
    arr.forEach(item => {
      itemFrequency[item] = (itemFrequency[item] || 0) + 1;
    });
  
  
    let mostFrequentItem;
    let maxFrequency = 0;
  
    for (let item in itemFrequency) {
      if (itemFrequency[item] > maxFrequency) {
        mostFrequentItem = item;
        maxFrequency = itemFrequency[item];
      }
    }
  
    return mostFrequentItem;
  }
  
  let myArray = [1, 2, 3, 2, 4, 2, 5, 2, 6, 2];
  let mostFrequent = findMostFrequentItem(myArray);
  console.log(`The most frequent item is: ${mostFrequent}`);
  