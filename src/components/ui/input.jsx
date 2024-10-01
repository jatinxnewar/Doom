import React from 'react'

const Input = React.forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
    />
  )
})
Input.displayName = 'Input'
export default Input
