<!-- prettier-ignore-start -->

# Scrollmeter React

![npm version](https://img.shields.io/npm/v/@scrollmeter/react)
![downloads](https://img.shields.io/npm/dt/@scrollmeter/react)
![license](https://img.shields.io/npm/l/@scrollmeter/react)

React hook for Scrollmeter, a lightweight library that visually displays the scroll progress of web pages.

## ✨ Key Features

- 🎯 Display scroll progress with an intuitive progress bar
- 📊 Timeline feature for quick document structure overview (h1 tags only)
- 🔍 Quick content preview functionality
- 💡 Tooltip providing current position information
- 🎨 Various customization options
- 📱 Responsive design support

## 🚀 Installation

```bash
npm install @scrollmeter/react
```

or

```bash
yarn add @scrollmeter/react
```

## 🔧 Usage

In a React environment, use the useScrollmeter hook which provides a targetRef.

```jsx
import { useScrollmeter } from '@scrollmeter/react'
import '@scrollmeter/core/dist/index.css'

function App() {
    const { targetRef } = useScrollmeter<HTMLDivElement>({
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

    return <div ref={targetRef}>{/* Your content here */}</div>
}
```

## ⚙️ Configuration Options

- **useTimeline**: Enable/disable timeline feature showing document structure
- **useTooltip**: Show/hide tooltip displaying current scroll position
- **usePreview**: Enable/disable content preview feature
    - ⚠️ Preview feature requires useTooltip to be set to true
    - ⚠️ External images are not included in previews due to CORS restrictions

## 🎨 Style Customization

```jsx
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
            timelineOptions: {
                color: '#838383',
                width: 4,
            },
            tooltipOptions: {
                background: '#333',
                fontColor: 'white',
                fontSize: 12,
                paddingInline: 8,
                paddingBlock: 6,
                width: 150,
        },
    })

    const { targetRef } = useScrollmeter<HTMLDivElement>(scrollOptions)

    return <div ref={targetRef}>{/* Your content here */}</div>
}
```

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

| Property      | Type   | Description            | Default |
| ------------- | ------ | ---------------------- | ------- |
| background    | string | Tooltip background     | #333    |
| fontColor     | string | Tooltip text color     | white   |
| fontSize      | number | Tooltip font size      | 12      |
| paddingInline | number | Tooltip inline padding | 8       |
| paddingBlock  | number | Tooltip block padding  | 6       |
| width         | number | Tooltip width          | 150     |

## 🌟 Demo

[Demo](https://freechird2.github.io/scrollmeter)

## 📝 License

MIT License

Copyright (c) 2024 suhyeon-jeon

<!-- prettier-ignore-end -->
