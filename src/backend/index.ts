import { NodeCG } from '../types/server';

import { LiveChat } from 'youtube-chat';
import { CommentItem } from 'youtube-chat/dist/parser';

interface Control {
  liveId: string,
  status: 'start' | 'stop'
};

export = (nodecg: NodeCG) => {

  nodecg.listenFor('control', (control: Control) => {

    const liveChat = new LiveChat({ liveId: control.liveId });

    liveChat.on('comment', (comment: CommentItem) => {
      nodecg.sendMessage('comment', comment);
    });

    if (control.status === 'start') {

      liveChat.start();

      nodecg.sendMessage('info', 'Start');

      nodecg.listenFor('control', (_control: Control) => {

        if (_control.status === 'stop') {
          liveChat.stop();

          nodecg.sendMessage('info', 'Stop');
        };

      });

    };

  });

};
