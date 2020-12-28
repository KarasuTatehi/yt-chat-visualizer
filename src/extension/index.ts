import { NodeCG } from '../types/server';

import { LiveChat } from 'youtube-chat';
import { CommentItem } from 'youtube-chat/dist/parser';

export = (nodecg: NodeCG) => {

  const channelId = { channelId: 'UCCwedbOIXxubr7_d2-7bM3g' };

  const listener = (comment: CommentItem) => {
    nodecg.sendMessage('comment', comment);
  };

  new LiveChat(channelId).on('comment', listener).start();

};
