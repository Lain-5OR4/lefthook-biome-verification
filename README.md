# Lefthook + Biome 技術検証環境

lefthookとbiomeを組み合わせたGit hooksの技術検証プロジェクトです。

## 概要

このプロジェクトでは以下の技術を組み合わせています：

- **[lefthook](https://github.com/evilmartians/lefthook)**: 高速なGit hooksマネージャー
- **[Biome](https://biomejs.dev/)**: 高速なJavaScript/TypeScriptのフォーマッター・リンター

## セットアップ

```bash
# 依存関係のインストール
npm install

# lefthookのインストール
npm run lefthook
```

## Git Hooks構成

### pre-commit
- `src/`ディレクトリ内の`.ts`ファイルをbiomeでチェック
- チェックが成功した場合は何も表示されない
- 失敗した場合のみエラーメッセージと詳細を表示
- 自動修正されたファイルは自動的にステージングされる

### 動作確認

```bash
# ファイルを編集してcommitを試してみる  
git add .
git commit -m "test commit"
```

## npm scripts

```bash
# 全ファイルをチェック
npm run check

# チェック + 自動修正（unsafe含む）
npm run check2

# フォーマットのみ実行
npm run format

# リントのみ実行
npm run lint

# lefthookの再インストール
npm run lefthook
```

## ファイル構成

```
.
├── src/
│   └── sample.ts          # サンプルTypeScriptファイル
├── lefthook.yml           # lefthook設定
├── biome.json            # biome設定
└── package.json          # 依存関係とscripts
```

## 特徴

- **高速**: lefthookとbiomeの組み合わせで高速な検証
- **静かな成功**: チェックが成功時は何も表示されない設計
- **詳細なエラー表示**: 失敗時のみ具体的なエラー内容を表示
- **自動修正**: 可能な問題は自動で修正してステージング

## カスタマイズ

- `lefthook.yml`: Git hooks の動作をカスタマイズ
- `biome.json`: フォーマット・リントルールをカスタマイズ

詳細な設定については各ツールの公式ドキュメントを参照してください。