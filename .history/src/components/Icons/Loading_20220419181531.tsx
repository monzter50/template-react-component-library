import React from 'react';
import './Loading.css'
type SimpleLoadingIcon = {
  color?:string;
  thickness?:number;
  height?:number;
  width?:number;
}
 const SimpleLoadingIcon = ({
	color = "currentColor",
	thickness = 2,
  height=50,
  width=50
}:SimpleLoadingIcon) => (
  <svg
    className={'svg'}
    viewBox="0 0 24 24"
    width={width}
    height={height}
  >
    <circle
      className={'path'}
      cx="12"
      cy="12"
      r="8"
      strokeLinecap="round"
      strokeWidth={thickness}
      stroke={color}
      fill="none"
    />
  </svg>
);

export default SimpleLoadingIcon