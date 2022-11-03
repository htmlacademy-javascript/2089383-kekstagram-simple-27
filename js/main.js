
const getRandomNumber = (min, max) => {
  Math.floor(Math.random() * (max + 1 - min)) + min
}


const getRandomArrayElement = (initialArray, needRemove = false) => {
  const randomElementIndex = getRandomNumber(0, initialArray.length - 1);
  const randomElement = initialArray[randomElementIndex];
  if (needRemove) {
    initialArray.splice(randomElementIndex, 1);
  }

  return randomElement;
};
const checStringLength = (str,maxLenght) => {
  if (str.length<=maxLenght) {
    return true
  }
  else {
    return false
  }
}

const getRandomArray = (initialArray, min = 1, max = initialArray.length) => {
  const copiedArray = initialArray.slice();
  const length = getRandomNumber(min, max);

  const iter = (acc, array) => {
    if (acc.length === length) {
      return acc;
    }

    const randomElement = getRandomArrayElement(array, true);
    return iter([...acc, randomElement], array);
  };

  return iter([], copiedArray);
};

