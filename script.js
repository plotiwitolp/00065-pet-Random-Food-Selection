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
const firstBtn = document.getElementById('first-btn');
const secondBtn = document.getElementById('second-btn');
const dessertBtn = document.getElementById('dessert-btn');
const buttonPlay = document.getElementById('button_play');
const buttonPlayWinner = document.getElementById('button_play_winner');
const buttonStop = document.getElementById('button_stop');

let funf;

function createRad(deg, text) {
  const rad = document.createElement('span');
  rad.style.display = 'block';
  rad.style.width = '2px';
  rad.style.height = '170px';
  rad.style.backgroundColor = '#1dbcc14d';
  rad.style.position = 'absolute';
  rad.style.left = 'calc(50% - 1px)';
  rad.style.top = '50%';
  rad.style.transformOrigin = '100% 0';
  rad.style.rotate = `${deg}deg`;
  const b = document.createElement('b');
  b.style.position = 'absolute';
  b.style.fontSize = '14px';
  b.style.top = '0';
  b.style.right = '75px';
  b.style.color = `white`;
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

function twister(circle, btn) {
  const randNumb = randomIntFromInterval(1000, 2100);
  const count = (max, timeout) =>
    (function next(i) {
      if (i <= max) {
        setTimeout(() => {
          circle.style.rotate = `${i * 3}deg`;
          // btn.setAttribute('disabled', 'disabled');
          firstBtn.setAttribute('disabled', 'disabled');
          secondBtn.setAttribute('disabled', 'disabled');
          dessertBtn.setAttribute('disabled', 'disabled');
          buttonPlay.click();
          clearInterval(funf);
          next(++i);
        }, timeout(i));
      } else {
        buttonStop.click();
        buttonPlayWinner.click();
        fanfare();
        // btn.removeAttribute('disabled', 'disabled');
        firstBtn.removeAttribute('disabled', 'disabled');
        secondBtn.removeAttribute('disabled', 'disabled');
        dessertBtn.removeAttribute('disabled', 'disabled');
      }
    })(0);
  count(randNumb, (i) => i * 0.02);
}

function fanfare() {
  var b = document.getElementById('div');
  var c = document.getElementById('canvas');
  var a = c.getContext('2d');
  var W = (c.width = document.body.clientWidth); //ширина - по размерам клиенской части окна
  var H = (c.height = document.body.clientHeight);
  // screen.height; //высота - это не "во весь экран", а больше из-за служебных областей окна
  var Objects = [];
  var Colors =
    '255,0,0;0,255,0;0,0,255;255,255,0;255,0,255;0,255,255;255,255,204;255,204,255;204,255,255'.split(
      ';'
    );
  var timeInterval = 20; //частота обновления, мс
  var petardColor = 'rgb(255,0,0)'; //цвет петарды до взрыва
  var numRays = 16; //количество лучей <s>чучхе</s> при взрыве
  var percentAlive = 60; //процент пускаемых, 0-все, 100-никто
  var petardRadius = 3; //начальный радиус петарды, пикс.
  var fireRadius = 31; //радиус для вызрыва, пикс.
  var fireBallRadius = 5; //радиус отдельного огонька при взрыве, пикс.

  DeleteObject = function (obj, t) {
    if (t) delete Objects[obj];
    else Objects[Objects.length] = obj;
  };

  DrawBack = function () {
    a['globalCompositeOperation'] = 'source-over'; //новая фигура визуализируется поверх уже добавленных на холст
    a.fillStyle = 'rgba(0,0,0,.4)';
    a.fillRect(0, 0, W, H);
  };

  ColorPath = function (x, y, r, f) {
    a.beginPath();
    a.arc(x, y, r, 0, Math.PI * 2, 0);
    a.fillStyle = f;
    a.fill();
  };

  FinalDraw = function (k, x, y, g) {
    this.k = k;
    this.x = k ? x : Math.random() * (W - 200) + 100;
    this.y = k ? y : H;
    this.t = 0;
    this.j = k ? 25 : 75;
    this.a = k ? Math.random() * 360 : 240 + Math.random() * 70;
    this.s = Math.random() * 3 + 2;
    this.g = g;

    this.thisDraw = function () {
      this.t++;
      if (this.k) {
        //взрыв
        f = (Math.PI / 180) * this.a;
        this.x += Math.cos(f) * this.s;
        this.y += Math.sin(f) * this.s;
        a['globalCompositeOperation'] = 'lighter';
        g = a.createRadialGradient(
          this.x,
          this.y,
          1,
          this.x,
          this.y,
          fireBallRadius
        );
        g['addColorStop'](0, 'rgba(255,255,255,.55)');
        g['addColorStop'](1, 'rgba(' + this.g + ',.03)');
        ColorPath(this.x, this.y, fireRadius, g);
      } else {
        //пуск петарды
        f = (Math.PI / 180) * this.a;
        this.x += Math.cos(f) * 5; //
        this.y += Math.sin(f) * 7.5; //увеличьте для взрывов выше
        ColorPath(this.x, this.y, petardRadius, petardColor);
      }
    };
  };

  funf = setInterval(function () {
    DrawBack();
    for (q in Objects) {
      var obj = Objects[q];
      obj.thisDraw();
      if (obj.t > obj.j) {
        if (!obj.k) {
          h = (Math.random() * Colors.length) | 0;
          for (c = 0; c < numRays; c++)
            DeleteObject(new FinalDraw(1, obj.x, obj.y, Colors[h]));
        }
        DeleteObject(q, 1);
      }
    }
    var c = Math.random() * 100;
    if (c > percentAlive) DeleteObject(new FinalDraw());
  }, timeInterval);
}

// fanfare();
