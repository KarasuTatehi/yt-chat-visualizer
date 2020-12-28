import { NodeCG } from '../types/server';

import { LiveChat } from 'youtube-chat';
import { CommentItem } from 'youtube-chat/dist/parser';

export = (nodecg: NodeCG) => {

  const channelId = { channelId: 'UC_a1ZYZ8ZTXpjg9xUY9sj8w' };

  const listener = (comment: CommentItem) => {
    nodecg.sendMessage('comment', comment);
  };

  new LiveChat(channelId).on('comment', listener).start();

};
