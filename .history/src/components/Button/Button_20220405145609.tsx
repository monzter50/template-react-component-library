import React from 'react'
import { tuple } from '../utils/types';
import './Button.css'


const ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed', 'danger', 'link');
export type ButtonType = typeof ButtonTypes[number];
const ButtonShapes = tuple('circle', 'circle-outline', 'round');
export type ButtonShape = typeof ButtonShapes[number];
const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];
export interface BaseButtonProps {
    type?: ButtonType;
    icon?: React.ReactNode;
    shape?: ButtonShape;
    size?: SizeType;
    loading?: boolean | { delay?: number };
    prefixCls?: string;
    className?: string;
    ghost?: boolean;
    danger?: boolean;
    block?: boolean;
    children?: React.ReactNode;
  }

export default function Button({label}:BaseButtonProps){
    return(
        <button>{label}</button>
    )
}