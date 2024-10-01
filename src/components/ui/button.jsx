import React from 'react'

export const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="py-2 px-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
    >
      {children}
    </button>
  )
}
