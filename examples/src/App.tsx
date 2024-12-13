import { useEffect, useState } from 'react'

import { createScrollmeter } from '@scrollmeter/core'
import '@scrollmeter/core/dist/index.css'
import { ScrollmeterOptions } from '../../core/dist/types/scrollmeter.types'
import styled from 'styled-components'
import ScrollIcon from './components/ScrollIcon'

function App() {
  const [scrollOptions, setScrollOptions] = useState<ScrollmeterOptions>({
    targetId: 'target',
    useTimeline: true,
    useTooltip: true,
    usePreview: true,
  })

  useEffect(() => {
    createScrollmeter(scrollOptions)
  }, [])

  return (
    <MainContainer id="target">
      <Section>
        <H1 $fontSize={'4rem'}>
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
        <H1>Features</H1>
        <Ul>
          <li>🎯 Shows scroll progress with a customizable progress bar</li>
          <li>
            📊 Supports timeline markers for important sections (
            <code>&lt;h1&gt;</code> tags only)
          </li>
          <li>🔍 Preview functionality with thumbnails</li>
          <li>💡 Easy style customization</li>
          <li>🎨 TypeScript support</li>
          <li>💻 Easy to integrate with any web project</li>
        </Ul>
      </Section>
      <ScrollIcon />
    </MainContainer>
  )
}

const MainContainer = styled.div`
  width: 100%;
  padding-block: 100px;
`

const Section = styled.div`
  max-width: 600px;
  margin: 0 auto;

  & + & {
    margin-top: 100px;
  }
`

const H1 = styled.h1<{ $fontSize?: string }>`
  font-size: ${({ $fontSize }) => $fontSize ?? '3.2rem'};
  color: rgba(255, 255, 255, 0.87);
  text-align: center;
  line-height: 1.2;
  white-space: pre-wrap;
`

const Content = styled.p`
  max-width: 500px;
  margin: 40px auto 0;
  font-size: 1.6rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.87);
  text-align: center;
  word-break: keep-all;
`

const Ul = styled.ul`
  list-style: disc;
  margin: 40px auto 0;
  max-width: 500px;

  > li {
    font-size: 1.4rem;
    color: rgba(255, 255, 255, 0.87);
    line-height: 1.5;
    word-break: keep-all;
  }

  li + li {
    margin-top: 10px;
  }
`

export default App
