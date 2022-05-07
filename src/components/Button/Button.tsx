import React from 'react'
import classNames from 'classnames'
import SimpleLoadingIcon from '../Icons/Loading'
import { prefixButtonCls as prefixCls } from '../constants'
import { SizeType } from '../providers/SizesContext'
import { tuple } from '../utils/types'
import './Button.css'

const ButtonTypes = tuple(
  'default',
  'primary',
  'secondary',
  'ghost',
  'dashed',
  'danger',
  'link'
)
export type ButtonType = typeof ButtonTypes[number];
const ButtonShapes = tuple('circle', 'circle-outline', 'round')
export type ButtonShape = typeof ButtonShapes[number];
const ButtonHTMLTypes = tuple('submit', 'button', 'reset')
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];

export interface BaseButtonProps {
  type?: ButtonType;
  icon?: React.ReactNode;
  shape?: ButtonShape;
  size?: SizeType;
  loading?: boolean | { delay?: number };
  prefixCls?: string;
  className?: string;
  direction?: string;
  ghost?: boolean;
  danger?: boolean;
  block?: boolean;
  htmlType?: ButtonHTMLType;
  children?: React.ReactNode;
  onClick?: () =>void;
}

export default function Button (props: BaseButtonProps) {
  const {
    type,
    danger,
    shape,
    size: customizeSize,
    className,
    children,
    icon,
    ghost = false,
    block = false,
    loading = false,
    direction = 'rtl',
    htmlType = 'button',
    ...rest
  } = props

  // large => lg
  // small => sm
  let sizeCls = ''
  switch (customizeSize) {
  case 'large':
    sizeCls = 'lg'
    break
  case 'small':
    sizeCls = 'sm'
    break
  default:
    break
  }

  const iconType = loading ? 'loading' : icon

  const classes = classNames(prefixCls, className, {
    [`${prefixCls}-${type}`]: type,
    [`${prefixCls}-${shape}`]: shape,
    [`${prefixCls}-${sizeCls}`]: sizeCls,
    [`${prefixCls}-icon-only`]: !children && children !== 0 && iconType,
    [`${prefixCls}-loading`]: !!loading,
    [`${prefixCls}-background-ghost`]: ghost,
    [`${prefixCls}-block`]: block,
    [`${prefixCls}-dangerous`]: !!danger,
    [`${prefixCls}-rtl`]: direction === 'rtl',
    [`${prefixCls}-${className}`]: className?.length !== 0
  })

  const iconNode = loading ? <SimpleLoadingIcon height={20} width={20}/> : icon || null

  console.log(classes)
  return (
    <button type={htmlType} className={classes} {...rest}>
      {iconNode}
      {children}
    </button>
  )
}
