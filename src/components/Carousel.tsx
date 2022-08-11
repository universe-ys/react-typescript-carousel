import styled from "@emotion/styled";
import { ReactNode, useEffect, useState } from "react";

const CarouselContainer = styled.div<{
  direction: 'column' | 'row'
}>`
  width: 500px;
  height: 500px;
  background-color: #aaa;
  display: flex;
  flex-direction: ${({direction}) => direction};
  overflow: hidden;
  position: relative;
`;

const CarouselItem = styled.div<{
  offset:number;
  transitionTime: number;
}>`
  width: 500px;
  min-width: 500px;
  height: 500px;
  min-height: 500px;
  background-color: royalblue;
  transform: translateY(${({offset}) => (-offset * 100)}%);
  transition: transform ${({transitionTime}) => transitionTime}ms ease-in;
`;

const CarouselButton = styled.div<{
  position: 'left' | "right";
}>`
  z-index: 99;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #555;
  color: #fff;
  font-size: 24px;
  position: absolute;
  top: calc(50% - 25px);
  ${({position}) => position === 'left' && "left: 0"};
  ${({position}) => position === 'right' && "right: 0"};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface CarouselProps {
  children: ReactNode | ReactNode[];
  loop?: boolean;
  autoLoop?: boolean;
  autoTime?: number;
  transitionTime?: number;
  direction?: 'column' | 'row';
}

const Carousel = ({children: propsChildren, direction= 'row', loop, autoTime = 3000, autoLoop, transitionTime = 500}: CarouselProps) => {

  const children = Array.isArray(propsChildren)? propsChildren : [propsChildren];

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if(autoLoop) {
      const intv = setInterval(() => {
        setIdx(prev => (prev < children.length - 1) ? prev + 1 : prev = 0);
      }, autoTime);

      return () => clearInterval(intv);
    }
    
  }, [autoLoop, autoTime, children]);

  return (
    <CarouselContainer direction={direction}>
      <CarouselButton 
        onClick={() => {
          if(idx > 0) {
            setIdx(prev => prev - 1)
          } else if (loop) {
            setIdx(children.length - 1)
          }            
        }}
        position="left">{"<"}</CarouselButton>
    {
      children.map((child, index) => (<CarouselItem transitionTime={transitionTime} offset={idx} key={index}>{child}</CarouselItem>))
    }
      <CarouselButton 
        onClick={() => {
          if(idx < children.length - 1) {
            setIdx(prev => prev + 1)
          } else if (loop){
            setIdx(0)
          }
        }}
        position="right">{">"}</CarouselButton>
    </CarouselContainer>
  );
};

export default Carousel;