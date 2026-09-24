'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let leftPosition =
    e.clientX - wallRect.left - wall.clientLeft - spiderWidth / 2;

  let topPosition =
    e.clientY - wallRect.top - wall.clientTop - spiderHeight / 2;

  leftPosition = Math.max(
    0,
    Math.min(leftPosition, wall.clientWidth - spiderWidth),
  );

  topPosition = Math.max(
    0,
    Math.min(topPosition, wall.clientHeight - spiderHeight),
  );

  spider.style.left = `${leftPosition}px`;
  spider.style.top = `${topPosition}px`;
});
