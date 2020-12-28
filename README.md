# Youtube Chat Visualizer

ブラウザソースに対応する配信ソフトウェア ([OBS Studio](https://obsproject.com/), [vMix](http://www.vmix.com/), [XSplit](https://www.xsplit.com/), [CasparCG](https://github.com/CasparCG/server/releases)) に、[NodeCG](https://www.nodecg.dev/)と[youtube-chat](https://www.npmjs.com/package/youtube-chat)を使ったビジュアルライクなコメントビューワーを提供するNodeCGバンドルです。

## 準備

0. あらかじめ[NodeCG](https://www.nodecg.dev/)を用意しておいてください。

1. `youtube-chat-visualizer` を `nodecg/bundles` に配置します。

2. `youtube-chat-visualizer/src/extension/index.ts` をエディタで開き、配信を行うYouTubeチャンネルを設定します。

  ```typescript
  const channelId = { channelId: '' };
  ```

  `https://www.youtube.com/channel/...` 以降の文字列を `''` の中に書き込んでください。

3. 依存関係をインストールします。

  ```
  npm i
  ```

4.  `build` コマンドを実行して、NodeCGバンドルをコンパイルします。

  ```
  npm run build
  ```

5.  `start` コマンドを実行して、NodeCGを起動します。

  ```
  npm start
  ```

## 使用

- **NodeCGグラフィックス** - `start` コマンドを実行するとNodeCGローカルサーバーが起動され、いつでもNodeCGグラフィックスが使用可能な状態になります。

  ローカルサーバーのアドレスはコマンドラインに表示されています。

## 変更点

- v0.1.0 - YouTubeチャットを縦方向のランダムな位置で右から左に流す、シンプルなアニメーションを実装。
