import { useEffect, useRef, useState } from 'react'

import styled from 'styled-components'
import ScrollIcon from './components/ScrollIcon'
import { createScrollmeter, ScrollmeterOptions } from '@scrollmeter/core'
import '@scrollmeter/core/dist/index.css'

const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
}

function App() {
  const scrollmeter = useRef<ReturnType<typeof createScrollmeter> | null>(null)
  const [scrollOptions, setScrollOptions] = useState<ScrollmeterOptions>({
    targetId: 'target',
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
  const [isJsExpanded, setIsJsExpanded] = useState(false)
  const [isReactExpanded, setIsReactExpanded] = useState(false)

  const updateScrollbarOptions = (
    key: keyof Required<ScrollmeterOptions>['barOptions'],
    value: string | number | boolean | object,
  ) => {
    setScrollOptions((prev) => {
      return {
        ...prev,
        barOptions: { ...prev.barOptions, [key]: value },
      }
    })
  }

  const updateScrollbarTimelineOptions = (
    key: keyof Required<ScrollmeterOptions>['timelineOptions'],
    value: string | number | boolean | object,
  ) => {
    setScrollOptions((prev) => {
      return {
        ...prev,
        timelineOptions: { ...prev.timelineOptions, [key]: value },
      }
    })
  }

  const updateTooltipOptions = (
    key: keyof Required<ScrollmeterOptions>['tooltipOptions'],
    value: string | number | boolean | object,
  ) => {
    setScrollOptions((prev) => {
      return {
        ...prev,
        tooltipOptions: { ...prev.tooltipOptions, [key]: value },
      }
    })
  }

  useEffect(() => {
    if (scrollmeter.current) return
    scrollmeter.current = createScrollmeter(scrollOptions)
  }, [])

  useEffect(() => {
    if (scrollmeter.current) {
      scrollmeter.current.updateScrollmeterStyle(scrollOptions)
    }
  }, [scrollOptions])

  return (
    <MainContainer id="target">
      <ScrollIcon />
      <Section>
        <H1 $fontSize={'4.6rem'}>
          Thank you for using
          <br />
          the Scrollmeter
        </H1>

        <Content>
          Scrollmeter is a lightweight JavaScript library that visually displays
          scroll progress on web pages.
        </Content>
      </Section>
      <Section>
        <H1>✨ Key Features</H1>
        <Ul>
          <li>🎯 Display scroll progress with an intuitive progress bar</li>
          <li>
            📊 Visualize document structure at a glance with timeline feature
            (h1 tags only)
          </li>
          <li>🔍 Quick content preview functionality</li>
          <li>💡 Tooltip provides current position information</li>
          <li>🎨 Various customization options available</li>
          <li>📱 Responsive design support</li>
        </Ul>
      </Section>
      <Section>
        <H1>🚀 Installation</H1>
        <Content $textAlign="center">
          <Code>npm install @scrollmeter/core</Code>
          or
          <Code>yarn add @scrollmeter/core</Code>
        </Content>
      </Section>
      <Section>
        <H1>🔧 How to use</H1>
        <Content>
          To use Scrollmeter, you first need to assign an ID to the container
          element where you want to display the scroll progress. Then, call the
          createScrollmeter function and pass that ID as the targetId option.
        </Content>
        <Ul>
          <li>JavaScript</li>
          <Description $textAlign="left">
            In a regular JavaScript environment, you need to call the
            createScrollmeter function after the DOM is fully loaded.
          </Description>
          <Code $isExpanded={true}>
            {`import { createScrollmeter } from '@scrollmeter/core';
import '@scrollmeter/core/dist/index.css';

window.onload = function() {
    createScrollmeter({
        targetId: "container_id_to_measure",
        useTimeline: true,
        useTooltip: true,
        usePreview: true,
    });
}`}
          </Code>
        </Ul>
        <Ul>
          <li>React.js</li>
          <Description $textAlign="left">
            In React environments, you can call the createScrollmeter function
            when the component mounts using the useEffect hook.
          </Description>
          <Code $isExpanded={true}>
            {`import { useEffect } from 'react';
import { createScrollmeter, ScrollmeterOptions } from '@scrollmeter/core'
import '@scrollmeter/core/dist/index.css';

function App() {
    const [scrollOptions, setScrollOptions] = useState<ScrollmeterOptions>({
        targetId: 'container_id_to_measure',
        useTimeline: true,
        useTooltip: true,
        usePreview: true,
    });

    useEffect(() => {
        createScrollmeter(scrollOptions);
    }, []);

    return (
        <div id="container_id_to_measure">
            {/* Content you want to measure scroll for */}
        </div>
    );
}`}
          </Code>
        </Ul>
      </Section>
      <Section>
        <H1> ⚙️ Configuration</H1>
        <Ul>
          <li>
            <strong>useTimeline</strong>: Enable/disable the timeline feature
            that shows document structure
          </li>
          <li>
            <strong>useTooltip</strong>: Toggle tooltip display showing current
            scroll position
          </li>
          <li>
            <strong>usePreview</strong>: Enable/disable content preview
            functionality
            <Notes>
              <Note>
                ⚠️ Preview feature requires useTooltip to be set to true
              </Note>
              <Note>
                ⚠️ External images are not included in previews due to CORS
                restrictions
              </Note>
            </Notes>
          </li>
        </Ul>
      </Section>
      <Section>
        <H1>🎨 Style Customization</H1>
        <Content>
          Scrollmeter offers easy customization for colors, sizes, and styles to
          match your website's design perfectly.
        </Content>
        <Ul>
          <li>JavaScript</li>
          <Code $isExpanded={isJsExpanded}>
            {`import { createScrollmeter } from '@scrollmeter/core';
import '@scrollmeter/core/dist/index.css';

window.onload = function() {
    let scrollOptions = {
        targetId: "container_id_to_measure",
        useTimeline: true,
        useTooltip: true,
        usePreview: true,
    }

    const scrollmeter = createScrollmeter(scrollOptions);

    scrollOptions = {
        ...scrollOptions,
        barOptions: {
            color: '#4A90E2',
            height: 10,
            background: 'rgba(0, 0, 0, 0)',
        },
    }

    scrollmeter.updateScrollmeterStyle(scrollOptions);
}`}
            <ExpandButton onClick={() => setIsJsExpanded(!isJsExpanded)}>
              {isJsExpanded ? 'Collapse' : 'Show more'}
            </ExpandButton>
          </Code>
        </Ul>
        <Ul>
          <li>React.js</li>
          <Description $textAlign="left">
            In React environments, you can call the createScrollmeter function
            when the component mounts using the useEffect hook.
          </Description>
          <Code $isExpanded={isReactExpanded}>
            {`import { useEffect } from 'react';
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
}`}
            <ExpandButton onClick={() => setIsReactExpanded(!isReactExpanded)}>
              {isReactExpanded ? 'Collapse' : 'Show more'}
            </ExpandButton>
          </Code>
        </Ul>
        <Content $textAlign="left">
          <strong>barOptions</strong>: Customize the progress bar
          <Table>
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Description</th>
                <th>Test</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>color</td>
                <td>string</td>
                <td>Color of the progress bar</td>
                <td>
                  <input
                    type="color"
                    defaultValue="#4A90E2"
                    onChange={(e) =>
                      updateScrollbarOptions('color', e.target.value)
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>background</td>
                <td>string</td>
                <td>Background color of the progress bar</td>
                <td>
                  <input
                    type="color"
                    defaultValue="#000000"
                    onChange={(e) =>
                      updateScrollbarOptions('background', e.target.value)
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>height</td>
                <td>number</td>
                <td>Height of the progress bar</td>
                <td>
                  <input
                    type="number"
                    defaultValue={10}
                    min={1}
                    max={20}
                    onChange={(e) =>
                      updateScrollbarOptions('height', Number(e.target.value))
                    }
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </Content>
        <Content $textAlign="left">
          <strong>timelineOptions</strong>: Customize the timeline
          <Table>
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Description</th>
                <th>Test</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>color</td>
                <td>string</td>
                <td>Timeline color</td>
                <td>
                  <input
                    type="color"
                    defaultValue="#838383"
                    onChange={(e) =>
                      updateScrollbarTimelineOptions('color', e.target.value)
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>width</td>
                <td>number</td>
                <td>Timeline width</td>
                <td>
                  <input
                    type="number"
                    defaultValue={4}
                    min={1}
                    max={10}
                    onChange={(e) =>
                      updateScrollbarTimelineOptions(
                        'width',
                        Number(e.target.value),
                      )
                    }
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </Content>
        <Content $textAlign="left">
          <strong>tooltipOptions</strong>: Customize the tooltip
          <Table>
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Description</th>
                <th>Test</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>background</td>
                <td>string</td>
                <td>Tooltip background color</td>
                <td>
                  <input
                    type="color"
                    defaultValue="#333333"
                    onChange={(e) =>
                      updateTooltipOptions('background', e.target.value)
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>fontColor</td>
                <td>string</td>
                <td>Tooltip font color</td>
                <td>
                  <input
                    type="color"
                    defaultValue="#FFFFFF"
                    onChange={(e) =>
                      updateTooltipOptions('fontColor', e.target.value)
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>fontSize</td>
                <td>number</td>
                <td>Tooltip font size</td>
                <td>
                  <input
                    type="number"
                    defaultValue={12}
                    min={8}
                    max={20}
                    onChange={(e) =>
                      updateTooltipOptions('fontSize', Number(e.target.value))
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>paddingInline</td>
                <td>number</td>
                <td>Tooltip padding inline</td>
                <td>
                  <input
                    type="number"
                    defaultValue={8}
                    min={0}
                    max={20}
                    onChange={(e) =>
                      updateTooltipOptions(
                        'paddingInline',
                        Number(e.target.value),
                      )
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>paddingBlock</td>
                <td>number</td>
                <td>Tooltip padding block</td>
                <td>
                  <input
                    type="number"
                    defaultValue={6}
                    min={0}
                    max={20}
                    onChange={(e) =>
                      updateTooltipOptions(
                        'paddingBlock',
                        Number(e.target.value),
                      )
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>width</td>
                <td>number</td>
                <td>Tooltip width</td>
                <td>
                  <input
                    type="number"
                    defaultValue={150}
                    min={100}
                    max={300}
                    onChange={(e) =>
                      updateTooltipOptions('width', Number(e.target.value))
                    }
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </Content>
      </Section>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  width: 100%;
  min-width: 600px;
  padding-block: 100px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    min-width: 100%;
    padding-block: 50px;
    padding-inline: 20px;
  }
`

const Section = styled.div`
  max-width: 600px;
  margin: 0 auto;

  & + & {
    margin-top: 80px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`

const H1 = styled.h1<{ $fontSize?: string }>`
  font-size: ${({ $fontSize }) => $fontSize ?? '4rem'};
  color: rgba(255, 255, 255, 0.87);
  text-align: center;
  line-height: 1.2;
  white-space: pre-wrap;
`

const Content = styled.div<{ $textAlign?: 'left' | 'center' }>`
  max-width: 600px;
  margin: 40px auto 0;
  font-size: 2.2rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.87);
  text-align: ${({ $textAlign }) => $textAlign ?? 'center'};
  word-break: keep-all;

  strong {
    color: #8e9aab;
    font-weight: 600;
    padding: 0 2px;
  }
`

const Ul = styled.ul`
  list-style: disc;
  margin: 40px auto 0;
  max-width: 500px;

  > li {
    font-size: 2rem;
    color: rgba(255, 255, 255, 0.87);
    line-height: 1.5;
    word-break: keep-all;

    @media (max-width: ${breakpoints.tablet}) {
      margin-left: 20px;
    }
  }

  li + li {
    margin-top: 14px;
  }
`

const Code = styled.div<{ $isExpanded?: boolean }>`
  width: 100%;
  background-color: #151b23;
  padding: 16px;
  font-family: 'monospace';
  font-size: 1.6rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.87);
  text-align: left;
  white-space: pre;
  overflow-x: ${({ $isExpanded }) => ($isExpanded ? 'auto' : 'hidden')};
  max-height: ${({ $isExpanded }) => ($isExpanded ? 'none' : '200px')};
  overflow-y: hidden;
  position: relative;
  transition: max-height 0.3s ease-in-out;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background: ${({ $isExpanded }) =>
      $isExpanded
        ? 'rgba(0, 0, 0, 0)'
        : 'linear-gradient(to bottom, rgba(0, 0, 0, 0), #151b23)'};
    pointer-events: none;
  }
`

const ExpandButton = styled.button`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  background: #2a2f35;
  border: none;
  color: white;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;
  z-index: 1;

  &:hover {
    background: #3a4149;
  }
`

const Description = styled.p<{ $textAlign?: 'left' | 'center' }>`
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.87);
  line-height: 1.5;
  word-break: keep-all;
  padding-bottom: 20px;
  text-align: ${({ $textAlign }) => $textAlign ?? 'center'};
`

const Notes = styled.div`
  margin-top: 4px;
  font-size: 0.9em;
  color: rgba(255, 255, 255, 0.6);
`

const Note = styled.div`
  & + & {
    margin-top: 2px;
  }
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  table-layout: fixed; // 컬럼 너비 고정

  th,
  td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.87);
    font-size: 1.6rem;
  }

  th {
    font-weight: bold;
    background-color: rgba(255, 255, 255, 0.05);
  }

  // 컬럼 너비 조정
  th:nth-child(1),
  td:nth-child(1) {
    width: 30%;
  }

  th:nth-child(2),
  td:nth-child(2) {
    width: 25%;
    color: #4a90e2;
    font-family: monospace;
  }

  th:nth-child(3),
  td:nth-child(3) {
    width: 45%;
  }

  // 새로 테스트 컬럼 스타일
  th:nth-child(4),
  td:nth-child(4) {
    width: 130px;
    text-align: center;

    @media (max-width: ${breakpoints.tablet}) {
      width: 80px;
    }
  }

  input {
    width: 60px;
    padding: 4px;
    margin-right: 4px;
  }

  button {
    padding: 4px 8px;
    background: #4a90e2;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;

    &:hover {
      background: #357abd;
    }
  }

  // 셀 내용이 너무 길 경우 처리
  td {
    word-break: break-word;
    vertical-align: top;
  }
`

export default App
