import { useEffect, useState } from 'react'
import { styled } from 'styled-components'

const ScrollIcon = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        window.removeEventListener('scroll', handleScroll)
        setIsVisible(false)
      }
    }

    if (window.scrollY === 0) {
      window.addEventListener('scroll', handleScroll)
      setIsVisible(true)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (!isVisible) return null

  return (
    <Container>
      <Icon style={{ width: '100px', height: '100px' }} />
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  left: 50%;
  top: 45%;
  opacity: 0;
  transform: translate(-50%, -50%);
  animation: scrollDown 1.5s ease-in-out infinite;
  animation-delay: 0.5s;

  @keyframes scrollDown {
    0% {
      transform: translate(-50%, -50%);
      opacity: 0;
    }
    20% {
      transform: translate(-50%, -50%);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, 10%);
      opacity: 0;
    }
  }
`

const Icon = ({ style }: { style: React.CSSProperties }) => {
  return (
    <svg
      style={style}
      enableBackground="new 0 0 512 512"
      version="1.1"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="mouse_x5F_controller">
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="SVGID_1_"
          x1="132.6304"
          x2="379.3694"
          y1="327.2275"
          y2="184.7727"
        >
          <stop offset="0" style={{ stopColor: '#F14D5C' }} />
          <stop offset="0.1309" style={{ stopColor: '#F05454' }} />
          <stop offset="0.3346" style={{ stopColor: '#ED663E' }} />
          <stop offset="0.3492" style={{ stopColor: '#ED683C' }} />
          <stop offset="0.714" style={{ stopColor: '#F3903F' }} />
          <stop offset="1" style={{ stopColor: '#FDC70C' }} />
        </linearGradient>
        <path
          d="M256,81.91c-61.13,0-110.863,49.733-110.863,110.863v126.453   c0,61.13,49.733,110.863,110.863,110.863c61.13,0,110.863-49.733,110.863-110.863V192.773C366.863,131.643,317.13,81.91,256,81.91z    M256,420.09c-55.616,0-100.863-45.247-100.863-100.863V198.46l76.264,9.838l1.279-9.918l-77.442-9.99   c2.232-51.931,43.912-93.812,95.762-96.355v27.843h10V92.035c51.85,2.544,93.528,44.423,95.763,96.352l-76.912,9.866l1.271,9.919   l75.741-9.715v120.771C356.863,374.843,311.616,420.09,256,420.09z"
          fill="url(#SVGID_1_)"
        />
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="SVGID_2_"
          x1="232.9102"
          x2="280.8936"
          y1="191.1484"
          y2="163.4452"
        >
          <stop offset="0" style={{ stopColor: '#EF783D' }} />
          <stop offset="0.3492" style={{ stopColor: '#F07A3D' }} />
          <stop offset="0.714" style={{ stopColor: '#F07D3E' }} />
          <stop offset="1" style={{ stopColor: '#F49739' }} />
        </linearGradient>
        <path
          d="M255.753,133.008c-7.231,0-13.114,5.883-13.114,13.114v37.082c0,5.46,3.357,10.148,8.114,12.118   v26.73h10v-26.73c4.756-1.97,8.113-6.658,8.113-12.118v-37.082C268.866,138.891,262.983,133.008,255.753,133.008z M252.639,146.122   c0-1.717,1.397-3.114,3.114-3.114s3.113,1.397,3.113,3.114v37.082c0,1.717-1.396,3.114-3.113,3.114s-3.114-1.397-3.114-3.114   V146.122z"
          fill="url(#SVGID_2_)"
        />
      </g>
    </svg>
  )
}

export default ScrollIcon
