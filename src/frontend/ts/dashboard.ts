import NodeCG from '../../types/browser';

const liveId: HTMLInputElement = document.querySelector('input[name="liveId"]');

const start: HTMLButtonElement = document.querySelector('button.is-success');
const stop: HTMLButtonElement = document.querySelector('button.is-danger');

start.onclick = () => {

  liveId.setAttribute('readonly', null);
  start.setAttribute('disabled', null);
  stop.removeAttribute('disabled');

  nodecg.sendMessage('control', {
    liveId: liveId.value,
    status: 'start'
  });

};

stop.onclick = () => {

  liveId.removeAttribute('readonly');
  start.removeAttribute('disabled');
  stop.setAttribute('disabled', null);

  nodecg.sendMessage('control', {
    liveId: liveId.value,
    status: 'stop'
  });

};
