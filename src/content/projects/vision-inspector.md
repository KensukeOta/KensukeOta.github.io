---
title: "Vision Inspector"
summary: "AIによる画像異常検知Webアプリケーションです。 Anomalib（PaDiM）を利用し、画像をアップロードするだけで異常箇所を検出し、ヒートマップ付きの異常マップをブラウザ上で確認できます。"
category: "Deep Learning"
ogp: "../../assets/ogp-vision-inspector.png"
period: "2026.06 - 2026.07"
role: "個人研究 / 前処理・学習・評価"
technologies: ["Python", "scikit-learn", "NLP", "Jupyter"]
projectNote: "Comming soon ..."
featured: true
demo: "https://vision-inspector-kensuke.vercel.app"
github: "https://github.com/KensukeOta/VisionInspector"
order: 3
---

## 概要

テキスト分類を題材に、分析過程と評価の説明力を見せるためのサンプルプロジェクトです。機械学習作品では、実装したモデルだけでなく、データと判断過程を記載することを重視しています。

## 背景と課題

多数のレビューを手作業で確認するには時間がかかります。文章から肯定的・否定的な傾向を分類できれば、改善すべき製品領域を把握する入口になります。

## 分析フロー

- テキストのクリーニングとラベル分布の確認
- TF-IDFによる特徴量化
- 複数モデルの比較と評価指標の選定
- 誤分類例の確認と改善仮説の整理

## 技術的な工夫

正解率のみで判断せず、クラスごとの再現率や混同行列を確認する構成です。誤分類データを読んで、否定表現や文脈の扱いがモデルへ与える影響を説明できるようにします。

## 成果と改善案

本番の掲載時には利用データセット、評価指標の数値、再現可能なNotebookへのリンクを追加します。改善案として、事前学習済みモデルとの比較や説明可能性の可視化を検討します。
