import { useEffect, useState } from 'react'

import { createScrollmeter } from '@scrollmeter/core'
import '@scrollmeter/core/dist/index.css'
import { ScrollmeterOptions } from '../../core/dist/types/scrollmeter.types'
import styled from 'styled-components'

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
        <H1>
          Thank you for using
          <br />
          the Scrollmeter
        </H1>
      </Section>
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
`

const H1 = styled.h1`
  font-size: 3.2rem;
  color: rgba(255, 255, 255, 0.87);
  text-align: center;
  line-height: 1.2;
  white-space: pre-wrap;
`

export default App
