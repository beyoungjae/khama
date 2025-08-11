import { useState, useRef } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Container = styled.div`
   position: relative;
   width: 100%;
   height: 400px;
   border-radius: 15px;
   overflow: hidden;
   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
   margin: 3rem 0;
   cursor: ew-resize;
   user-select: none;
`

const ImageContainer = styled.div`
   position: relative;
   width: 100%;
   height: 100%;
`

const BeforeImage = styled.img`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   object-fit: cover;
`

const AfterImage = styled.img`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   object-fit: cover;
   clip-path: ${(props) => `inset(0 ${100 - props.position}% 0 0)`};
`

const Slider = styled.div`
   position: absolute;
   top: 0;
   bottom: 0;
   left: ${(props) => props.position}%;
   width: 4px;
   background: white;
   cursor: ew-resize;
   z-index: 10;
   transform: translateX(-50%);

   &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 40px;
      height: 40px;
      background: white;
      border-radius: 50%;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
   }

   &::after {
      content: '⟷';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 16px;
      color: #667eea;
      font-weight: bold;
      z-index: 1;
   }
`

const Label = styled.div`
   position: absolute;
   top: 1rem;
   padding: 0.5rem 1rem;
   background: rgba(0, 0, 0, 0.7);
   color: white;
   border-radius: 20px;
   font-size: 0.9rem;
   font-weight: 500;

   &.before {
      left: 1rem;
   }

   &.after {
      right: 1rem;
   }
`

export function BeforeAfterSlider({ beforeImage, afterImage, beforeLabel = 'Before', afterLabel = 'After', alt = 'Before and After comparison' }) {
   const [position, setPosition] = useState(50)
   const containerRef = useRef(null)

   const handleMouseMove = (e) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const percentage = (x / rect.width) * 100

      setPosition(Math.max(0, Math.min(100, percentage)))
   }

   const handleMouseDown = (e) => {
      e.preventDefault()

      const handleMouseMoveGlobal = (e) => {
         handleMouseMove(e)
      }

      const handleMouseUp = () => {
         document.removeEventListener('mousemove', handleMouseMoveGlobal)
         document.removeEventListener('mouseup', handleMouseUp)
      }

      document.addEventListener('mousemove', handleMouseMoveGlobal)
      document.addEventListener('mouseup', handleMouseUp)
   }

   return (
      <Container ref={containerRef} onMouseMove={handleMouseMove} onMouseDown={handleMouseDown}>
         <ImageContainer>
            <BeforeImage src={beforeImage} alt={`${alt} - ${beforeLabel}`} />
            <AfterImage src={afterImage} alt={`${alt} - ${afterLabel}`} position={position} />
         </ImageContainer>

         <Slider position={position} />

         <Label className="before">{beforeLabel}</Label>
         <Label className="after">{afterLabel}</Label>
      </Container>
   )
}
