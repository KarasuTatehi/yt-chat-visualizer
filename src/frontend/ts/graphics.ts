import NodeCG from '../../types/browser';

import { CommentItem } from 'youtube-chat/dist/parser';

nodecg.listenFor('comment', (comment: CommentItem) => {

  const name = `<span>${comment.author.name}</span>`;
  const thumbnail = `<img src="${comment.author.thumbnail.url}">`

  const message = comment.message.map((item) => {

    if ('text' in item) {
      return `<span>${item.text}</span>`;
    }

    if ('url' in item) {
      return `<img src="${item.url}">`;
    };

  }).join('');

  const container = document.querySelector('article');

  const chat = document.createElement('section');

  const data = `<dt>
    ${name + thumbnail}
  </dt>
  <dd>
    ${message}
  </dd>`;

  const random = (min: number, max: number) => {

    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);

  };

  chat.setAttribute('style', `top: ${random(10, 90)}%`);
  chat.innerHTML = data;

  container.appendChild(chat);

  setTimeout(() => {
    container.removeChild(document.querySelector('article > section'));
  }, 15000);

});
