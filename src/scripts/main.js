'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const spiderWidth = spiderRect.width;
  const spiderHeight = spiderRect.height;

  let leftPosition = e.clientX - wallRect.left - spiderWidth / 2;
  let topPosition = e.clientY - wallRect.top - spiderHeight / 2;

  leftPosition = Math.max(
    0,
    Math.min(leftPosition, wallRect.width - spiderWidth),
  );

  topPosition = Math.max(
    0,
    Math.min(topPosition, wallRect.height - spiderHeight),
  );

  spider.style.left = `${leftPosition}px`;
  spider.style.top = `${topPosition}px`;
});
