const dishList = document.getElementById('dishList');
const dishCatIdList = document.getElementById('dishCatIdList');
const dishCatList = document.getElementById('dishCatList');

const dishListFromBD = dishList.getAttribute('data-attr');
const dishCatIdListFromDB = dishCatIdList.getAttribute('data-attr');
const dishCatListFromBD = dishCatList.getAttribute('data-attr');

const dish = dishListFromBD.split(',');
const dishCatId = dishCatIdListFromDB.split(',');
const dishCat = dishCatListFromBD.split(',');

const firstDish = [];
const secondDish = [];
const dessertDish = [];
for (let i = 0; i < dish.length; i++) {
  if (dishCatId[i] == 1) {
    firstDish.push(dish[i]);
  } else if (dishCatId[i] == 2) {
    secondDish.push(dish[i]);
  } else if (dishCatId[i] == 3) {
    dessertDish.push(dish[i]);
  }
}
const first = document.getElementById('first');
const second = document.getElementById('second');
const dessert = document.getElementById('dessert');

function createRad(deg, text) {
  const rad = document.createElement('span');
  rad.style.display = 'block';
  rad.style.width = '2px';
  rad.style.height = '190px';
  rad.style.backgroundColor = 'yellow';
  rad.style.position = 'absolute';
  rad.style.left = 'calc(50% - 1px)';
  rad.style.top = '50%';
  rad.style.transformOrigin = '100% 0';
  rad.style.rotate = `${deg}deg`;
  const b = document.createElement('b');
  b.style.position = 'absolute';
  //   b.style.width = '180px';
  b.style.fontSize = '14px';
  b.style.top = '0';
  b.style.right = '85px';
  //   b.style.transformOrigin = '0% 100%';
  b.style.color = `white`;
  //   b.style.rotate = `${deg / 2}deg`;
  rad.append(b);
  b.innerText = text;
  return rad;
}

function appendEls(food, circle) {
  for (let i = 0; i < food.length; i++) {
    circle.append(createRad(i * (360 / food.length), food[i]));
  }
}

appendEls(firstDish, first);
appendEls(secondDish, second);
appendEls(dessertDish, dessert);

let chRot = 0;

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// const rndInt = randomIntFromInterval(1, 6);

function twister(circle) {
  let twistCircle = setInterval(() => {
    circle.style.rotate = `${chRot++}deg`;

    if (chRot > 1 * randomIntFromInterval(1000, 2000)) {
      clearInterval(twistCircle);
      chRot = 0;
    }
  }, 1);
}

// setInterval(() => {
//   second.style.rotate = `${chRot++}deg`;
// }, 1);
// setInterval(() => {
//   dessert.style.rotate = `${chRot++}deg`;
// }, 1);
