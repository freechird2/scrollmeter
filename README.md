# Scrollmeter

![npm version](https://img.shields.io/npm/v/@scrollmeter/core)
![license](https://img.shields.io/npm/l/@scrollmeter/core)

Scrollmeter는 웹 페이지의 스크롤 진행률을 시각적으로 표시해주는 가벼운 JavaScript 라이브러리입니다.

## ✨ 주요 기능

- 🎯 스크롤 진행률을 직관적인 프로그레스 바로 표시
- 📊 타임라인 기능으로 문서 전체 구조를 한눈에 파악
- 🔍 미리보기 기능으로 콘텐츠를 빠르게 확인
- 💡 툴팁으로 현재 위치 정보를 제공
- 🎨 커스터마이징이 가능한 다양한 옵션 제공
- 📱 반응형 디자인 지원

## 🚀 설치하기

bash

```
npm install @scrollmeter/core
```

or

```
yarn add @scrollmeter/core
```

## 🔧 사용방법

javascript

```
import { createScrollmeter } from '@scrollmeter/core';
import '@scrollmeter/core/dist/index.css';

createScrollmeter({
  targetId: 'target',
  useTimeline: true,
  useTooltip: true,
  usePreview: true,
});
```

## ⚙️ 옵션

| 옵션        | 타입    | 기본값 | 설명                       |
| ----------- | ------- | ------ | -------------------------- |
| targetId    | string  | -      | 스크롤 측정 대상 요소의 ID |
| useTimeline | boolean | true   | 타임라인 표시 여부         |
| useTooltip  | boolean | true   | 툴팁 표시 여부             |
| usePreview  | boolean | true   | 미리보기 기능 사용 여부    |

## 🌟 데모

[Demo](https://freechird2.github.io/scrollmeter)

## 📝 라이선스

MIT ©
