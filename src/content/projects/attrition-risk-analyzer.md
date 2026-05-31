---
title: "Attrition Risk Analyzer"
summary: "LightGBMで学習した離職予測モデルをFastAPIに組み込み、SvelteKitで可視化した社員離職リスク予測Webアプリです。単体予測、CSV一括予測、特徴量重要度、モデル評価に対応しています。"
category: "Web Application"
ogp: "../../assets/ogp-attrition-risk-analyzer.png"
period: "2025.10 - 2025.12"
role: "個人制作 / 設計・フロントエンド実装"
technologies:
  [
    "Python",
    "TypeScript",
    "FastAPI",
    "SvelteKit",
    "pandas",
    "scikit-learn",
    "matplotlib",
  ]
projectNote: "機械学習モデルを学習させるだけでなく、FastAPIによるAPI化、SvelteKitによるUI実装、デプロイまで一貫して行ったプロジェクトです。離職予測という実務的なテーマを扱い、単体予測・CSV一括予測・特徴量重要度・モデル評価まで確認できる構成にしました。"
featured: true
demo: "https://attrition-risk-analyzer-kensuke.vercel.app"
github: "https://github.com/KensukeOta/Attrition-Risk-Analyzer"
order: 2
---

## 概要

学習の予定、実施時間、振り返りを一箇所で管理するWebアプリのサンプル作品です。採用担当者が画面の目的と実装範囲を迷わず確認できるよう、機能と技術選定を整理して紹介します。

## 背景と課題

複数の教材を使う学習では、何にどれだけ時間を使い、予定通り進んでいるかの把握が難しくなります。日々の入力負担を抑えながら、週末に振り返れる仕組みを課題として設定しました。

## 主な機能

- 学習タスクの作成とステータス管理
- 日別の学習時間登録
- 週次の達成状況を表示するダッシュボード
- モバイル端末で操作しやすいレスポンシブUI

## 技術的な工夫

入力から一覧更新までの操作回数を少なくし、ステータスが視覚的に判別できる設計にしています。認証・保存領域を分離することで、後から分析表示を拡張できる構成を想定しています。

## 成果と改善案

実際の制作物を掲載する際には、デモURL、GitHub、利用テストの結果を追記します。通知機能と目標の達成率表示が、次の改善候補です。
