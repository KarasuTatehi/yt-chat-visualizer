import NodeCG from '../types/browser';

import { CommentItem } from 'youtube-chat/dist/parser';

nodecg.listenFor('comment', (message: CommentItem) => {

  const article = document.querySelector('main > article');

  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  const author = `<span>
    ${message.author.name}
  </span>`;

  const icon = `<img
    src="${message.author.thumbnail.url}"
    alt="${message.author.thumbnail.alt}" />`;

  const comment = message.message.map((v) => {

    if ('text' in v) {

      return `<span>
        ${v.text}
      </span>`;

    } else if ('url' in v) {

      return `<img
        src="${v.url}"
        alt="${v.alt}" />`;

    };

  }).join(' ');

  const template = document.querySelector('template');
  const clone = template.content.cloneNode(true);

  const container = clone.querySelector('section');
  const head = clone.querySelector('dt');
  const body = clone.querySelector('dd');

  container.setAttribute('style', `top: ${getRandomInt(10, 90)}%;`)
  head.innerHTML = author + icon;
  body.innerHTML = comment;

  article.appendChild(clone);

  setTimeout(() => {
    article.querySelector('section').remove();
  }, 10000);

});
