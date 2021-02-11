# Youtube Chat Visualizer

ブラウザソースに対応する配信ソフトウェア ([OBS Studio](https://obsproject.com/), [vMix](http://www.vmix.com/), [XSplit](https://www.xsplit.com/), [CasparCG](https://github.com/CasparCG/server/releases)) に、[NodeCG](https://www.nodecg.dev/)と[youtube-chat](https://www.npmjs.com/package/youtube-chat)を使ったビジュアルライクなコメントビューワーを提供するNodeCGバンドルです。

## インストールから起動まで (v0.2.1)

1.  `Dockerfile` を作成

    ```dockerfile
    FROM node:14

    WORKDIR /app

    RUN npx nodecg-cli setup

    ADD bundles bundles

    EXPOSE 9090

    CMD [ "npm", "start" ]
    ```

2.  下記コマンドを実行してセットアップ

    ```shell
    mkdir bundles
    cd bundles
    git clone https://github.com/KarasuTatehi/yt-chat-visualizer.git
    cd yt-chat-visualizer
    git clone https://github.com/KarasuTatehi/youtube-chat.git
    cd youtube-chat
    npm i
    npm run build
    cd ..
    npm i
    npm run build
    ```

    ※ Yarnが環境にインストールされている場合は、 `npm i` の代わりに `yarn install` が使用できます。

3.  Dockerイメージのビルドと実行

    ```shell
    cd ../..
    docker build -t 81no/nodecg .
    docker run --name "NodeCG" -p 9090:9090 -d 81no/nodecg
    ```

    ※ 起動後、 `http://localhost:9090/` にアクセスすると、NodeCGのダッシュボードにアクセスできます。

## 変更点

- v0.1.0 - YouTubeチャットを縦方向のランダムな位置で右から左に流す、シンプルなアニメーションを実装。
- v0.2.0 - Dockerイメージ化
- v0.2.1 - YouTubeの仕様変更に伴い、 *youtube-chat* ライブラリを修正
