
import React from 'react'


export function Button({ children, className = '', variant = 'solid', ...props }) {
  const base = 'px-5 py-2 rounded-lg font-semibold inline-flex items-center gap-2'
  const styles = {
    solid: 'bg-indigo-600 text-white hover:bg-indigo-700',
    outline: 'border border-indigo-600 text-indigo-600 bg-white hover:bg-indigo-50'
  }
  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}


export default Button