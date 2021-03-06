---
title: "Node.js"
metaTitle: "Node.js | JavaScript"
metaDescription: "JavaScript Node.js tips."
---

Node.js に関するまとめ．

## Node.js とは？

サーバ側での JavaScript 実行環境（JavaScript の処理系）．

- 「Node.js = JavaScript 実行環境」

ローカル環境にインストールした場合，JavaScript ファイルの実行ができるようになる．
また，JavaScript の REPL としても利用できる．

## Node.js の利点

Node.js の目標

> スケーラブルなネットワーク・プログラムを作成するための簡単な方法を提供すること

スケーラブルとは拡張可能

## node-gyp のインストール

- [参考：node-gyp – Node.jsネイティブアドオンビルドツール](https://githubja.com/nodejs/node-gyp)

`node-gyp` はビルドツールである．

>`node-gyp` は、Node.js のネイティブアドオンモジュールをコンパイルするために、Node.jsで書かれたクロスプラットフォームのコマンドラインツールです。 Chromium チームが使用する gyp プロジェクトをバンドルし、**ビルドプラットフォームのさまざまな違いに対処する苦労を取り除きます**。 Node.js `v0.8` ために削除された `node-waf` プログラムへの置き換えです。まだ `wscript` ファイルを持っているノード用のネイティブアドオンを持っているならば、Node.js の最新バージョンをサポートするために `binding.gyp` ファイルを必ず追加してください。
>
>実際にシステムにインストールされている Node.js のバージョンに関係なく、Node.js の複数のターゲット・バージョンがサポートされています（つまり、 0.8 、…、 node-gypなど）（ node-gypは必要な開発ファイルまたはヘッダーをターゲットバージョン）。

### Xcode をインストールしていないと node-gyp の npm install でこける？

- [npm install fails on node-gyp rebuild with "gyp: No Xcode or CLT version detected!"](https://github.com/schnerd/d3-scale-cluster/issues/7)

`node-gyp` のインストールでこけるときは，ビルドツールが上手くインストールされていない．その場合，下記のように再インストールすれば良い．

```sh
$ npm install
# エラーメッセージ
# gyp: No Xcode or CLT version detected!

$ sudo rm -rf $(xcode-select -print-path)
$ xcode-select --install

$ npm install
# インストールが成功するはず
```
