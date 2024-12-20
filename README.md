<!-- prettier-ignore-start -->
# Scrollmeter

## @scrollmeter/core

![npm version](https://img.shields.io/npm/v/@scrollmeter/core)
![downloads](https://img.shields.io/npm/dt/@scrollmeter/core)
![license](https://img.shields.io/npm/l/@scrollmeter/core)

## @scrollmeter/react

![npm version](https://img.shields.io/npm/v/@scrollmeter/react)
![downloads](https://img.shields.io/npm/dt/@scrollmeter/react)
![license](https://img.shields.io/npm/l/@scrollmeter/react)

Scrollmeter is a lightweight JavaScript library that visually displays the scroll progress of web pages.

![Scrollmeter Demo](./assets/demo.gif)

## ✨ Key Features

- 🎯 Display scroll progress with an intuitive progress bar
- 📊 Timeline feature for quick document structure overview (h1 tags only)
- 🔍 Quick content preview functionality
- 💡 Tooltip providing current position information
- 🎨 Various customization options
- 📱 Responsive design support

## 🚀 Installation

### For Javascript Projects

For Javascript environments, you only need to install the core package:

```bash
npm install @scrollmeter/core
# or
yarn add @scrollmeter/core
```

### For React Projects

For React environments, you only need to install the react package (@scrollmeter/core will be installed automatically as a dependency):

```bash
npm install @scrollmeter/react
# or
yarn add @scrollmeter/react
```

## 🔧 Usage

Pass either an ID or DOM element reference of the container where you want to display the scroll progress as the 'target' option.

### Javascript

In a regular JavaScript environment, call the createScrollmeter function after the DOM is fully loaded.

The target option accepts either an ID string or a DOM element reference for the container where you want to display the scroll progress.

```javascript
import { createScrollmeter } from '@scrollmeter/core'
import '@scrollmeter/core/dist/index.css'

window.onload = function () {
    let scrollOptions = {
        target: 'container_id_to_measure', // id or DOM element reference
        useTimeline: true,
        useTooltip: true,
        usePreview: true,
    }

    const scrollmeter = createScrollmeter(scrollOptions)

    scrollOptions = {
        ...scrollOptions,
        barOptions: {
            color: '#4A90E2',
            height: 10,
            background: 'rgba(0, 0, 0, 0)',
        },
    }

    scrollmeter.updateScrollmeterStyle(scrollOptions)
}
```

### React

In a React environment, use the useScrollmeter hook which provides a targetRef.

```javascript
import { useEffect } from 'react'
import { useScrollmeter, UseScrollmeterOptions } from '@scrollmeter/react'
import '@scrollmeter/core/dist/index.css'

function App() {
    const [scrollOptions, setScrollOptions] = useState<UseScrollmeterOptions>({
        useTimeline: true,
        useTooltip: true,
        usePreview: true,
        barOptions: {
            color: 'rgba(74, 144, 226, 0.9)',
            height: 10,
            background: 'rgba(0, 0, 0, 0)',
        },
        // ... rest of the options ...
    })

    const { targetRef } = useScrollmeter<HTMLDivElement>(scrollOptions)

    return <div ref={targetRef}>{/* Content you want to measure scroll for */}</div>
}
```

## ⚙️ Configuration Options

- **useTimeline**: Enable/disable timeline feature showing document structure
- **useTooltip**: Show/hide tooltip displaying current scroll position
- **usePreview**: Enable/disable content preview feature
    - ⚠️ Preview feature requires useTooltip to be set to true
    - ⚠️ External images are not included in previews due to CORS restrictions

## 🎨 Style Customization

### barOptions

| Property   | Type   | Description             | Default                 |
| ---------- | ------ | ----------------------- | ----------------------- |
| color      | string | Progress bar color      | rgba(74, 144, 226, 0.9) |
| height     | number | Progress bar height     | 10                      |
| background | string | Progress bar background | rgba(0, 0, 0, 0)        |

### timelineOptions

| Property | Type   | Description    | Default |
| -------- | ------ | -------------- | ------- |
| color    | string | Timeline color | #838383 |
| width    | number | Timeline width | 4       |

### tooltipOptions

| Property      | Type   | Description                | Default |
| ------------- | ------ | -------------------------- | ------- |
| background    | string | Tooltip background         | #333    |
| fontColor     | string | Tooltip text color         | white   |
| fontSize      | number | Tooltip font size          | 12      |
| paddingInline | number | Tooltip horizontal padding | 8       |
| paddingBlock  | number | Tooltip vertical padding   | 6       |
| width         | number | Tooltip width              | 150     |

## 🌟 Demo

[Demo](https://freechird2.github.io/scrollmeter)

## 📝 License

MIT License

Copyright (c) 2024 suhyeon-jeon

<!-- prettier-ignore-end -->
