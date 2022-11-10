import React from "react";
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css"
import { LazyImageWrapper } from "./style";

const MyImage = ({ image, name, onClick, className, scrollPosition }) => {
     return (
          <LazyImageWrapper className="lazy-image">
               <LazyLoadImage
                    onClick={onClick}
                    alt={name}
                    src={image}
                    delayTime="300"
                    className={className}
                    effect="blur"
                    scrollPosition={scrollPosition}
                    threshold={3000}
                    delayMethod="3000"
                    width="100%"
               />
          </LazyImageWrapper>
     )
}
export default trackWindowScroll(MyImage);