# Scrollmeter

![npm version](https://img.shields.io/npm/v/@scrollmeter/core)
![downloads](https://img.shields.io/npm/dm/@scrollmeter/core)
![license](https://img.shields.io/npm/l/@scrollmeter/core)

Scrollmeter is a lightweight JavaScript library that visually displays the scroll progress of web pages.

## ✨ Key Features

- 🎯 Display scroll progress with an intuitive progress bar
- 📊 Timeline feature for quick document structure overview (h1 tags only)
- 🔍 Quick content preview functionality
- 💡 Tooltip providing current position information
- 🎨 Various customization options
- 📱 Responsive design support

## 🚀 Installation

```
npm install @scrollmeter/core
```

or

```
yarn add @scrollmeter/core
```

## 🔧 Usage

Specify an ID for the container element where you want to display scroll progress, and call the createScrollmeter function with that ID as the targetId option.

### Javascript

In vanilla JavaScript environments, call the createScrollmeter function after the DOM is fully loaded.

```javascript
import { createScrollmeter } from '@scrollmeter/core'
import '@scrollmeter/core/dist/index.css'

window.onload = function () {
    createScrollmeter({
        targetId: 'container_id_to_measure',
        useTimeline: true,
        useTooltip: true,
        usePreview: true,
    })
}
```

### React

In React environments, use the useEffect hook to call the createScrollmeter function when the component mounts.

```javascript
import { useEffect } from 'react'
import { createScrollmeter } from '@scrollmeter/core'
import '@scrollmeter/core/dist/index.css'

function App() {
    const [scrollOptions, setScrollOptions] = useState({
        targetId: 'container_id_to_measure',
        useTimeline: true,
        useTooltip: true,
        usePreview: true,
    })

    useEffect(() => {
        createScrollmeter(scrollOptions)
    }, [])

    return <div id='container_id_to_measure'>{/* Content you want to measure scroll for */}</div>
}
```

## ⚙️ Configuration Options

- **useTimeline**: Enable/disable timeline feature showing document structure
- **useTooltip**: Show/hide tooltip displaying current scroll position
- **usePreview**: Enable/disable content preview feature
    - ⚠️ Preview feature requires useTooltip to be set to true
    - ⚠️ External images are not included in previews due to CORS restrictions

## 🎨 Style Customization

### javascript

```javascript
import { createScrollmeter } from '@scrollmeter/core'
import '@scrollmeter/core/dist/index.css'

window.onload = function () {
    let scrollOptions = {
        targetId: 'container_id_to_measure',
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

```javascript
import { useEffect } from 'react';
import { createScrollmeter, ScrollmeterOptions } from '@scrollmeter/core'
import '@scrollmeter/core/dist/index.css';

function App() {
    const scrollmeter = useRef<ReturnType<typeof createScrollmeter> | null>(null);
    const [scrollOptions, setScrollOptions] = useState<ScrollmeterOptions>({
        targetId: 'container_id_to_measure',
        useTimeline: true,
        useTooltip: true,
        usePreview: true,
    });

    useEffect(() => {
        if (scrollmeter.current) return;
        scrollmeter.current = createScrollmeter(scrollOptions);
    }, []);

    useEffect(() => {
        if (scrollmeter.current) {
            scrollmeter.current.updateScrollmeterStyle(scrollOptions);
        }
    }, [scrollOptions]);

    return (
        <div id="container_id_to_measure">
            {/* Content you want to measure scroll for */}
        </div>
    );
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
