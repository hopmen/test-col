let langCars = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`.split(``);

const randomInteger = (...round) => {
  let [min, max] = round[1] ? [round[0], round[1]] : [0, round[0]];
  return Math.floor(min + Math.random() * (max + 1 - min));
};

function createTable (coll) {
  let result = new Map();
  for (let i = 1; i <= coll; i++) {
    let data = [];
    let randomRow = randomInteger(1, 5);
    for (let j = 0; j < randomRow; j++) {
      data.push(randomInteger(0, 5));
    }
    result.set(getColumnName(i), data);
  }
  return result;
}


function getColumnName (columnNumber) {
  let dividend = columnNumber;
  let columnName = "";
  let mod;
  let N = langCars.length;
  while (dividend > 0) {
    mod = (dividend - 1) % N;
    columnName = langCars[mod] + columnName;
    dividend = parseInt((dividend - mod) / N);
  }
  return columnName;
}


function getСolumnNumber (columnName) {
  let chars = columnName.split(``).reverse();
  let columnNumber = 0;
  for (let i = 0; i < chars.length; i++) {
    columnNumber += langCars.indexOf(chars[i]) + (langCars.length ** i);
  }
  return columnNumber;
}

console.log(createTable(703));



