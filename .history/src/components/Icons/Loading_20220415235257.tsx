import React from 'react';
// import './Loading.css'
type SimpleLoadingIcon = {
  color?:string;
  thickness?:number;
}
 const SimpleLoadingIcon = ({
	color = "currentColor",
	thickness = 2
}:SimpleLoadingIcon) => (
  <svg
    className={'svg'}
    viewBox="0 0 24 24"
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