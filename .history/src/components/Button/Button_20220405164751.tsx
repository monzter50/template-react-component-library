import React from 'react'
import classNames from 'classnames';
import { SizeType } from '../providers/SizesContext';
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


export default function Button(props:BaseButtonProps){
const {
    prefixCls: customizePrefixCls,
    type,
    danger,
    shape,
    size: customizeSize,
    className,
    children,
    icon,
    ghost,
    block,
    ...rest} = props;
    
    const defaultProps = {
        loading: false,
        ghost: false,
        block: false,
        htmlType: 'button',
    };
    const prefixCls = getPrefixCls('btn', customizePrefixCls);
    const autoInsertSpace = autoInsertSpaceInButton !== false;

    // large => lg
    // small => sm
    let sizeCls = '';
    switch (customizeSize || size) {
      case 'large':
        sizeCls = 'lg';
        break;
      case 'small':
        sizeCls = 'sm';
        break;
      default:
        break;
    }

    const iconType = loading ? 'loading' : icon;
    const classes = classNames(prefixCls, className, {
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-${shape}`]: shape,
        [`${prefixCls}-${sizeCls}`]: sizeCls,
        [`${prefixCls}-icon-only`]: !children && children !== 0 && iconType,
        [`${prefixCls}-loading`]: !!loading,
        [`${prefixCls}-background-ghost`]: ghost,
        [`${prefixCls}-two-chinese-chars`]: hasTwoCNChar && autoInsertSpace,
        [`${prefixCls}-block`]: block,
        [`${prefixCls}-dangerous`]: !!danger,
        [`${prefixCls}-rtl`]: direction === 'rtl',
      });

    return(
        <button type={htmlType}
        className={classes}>{children}</button>
    )
}