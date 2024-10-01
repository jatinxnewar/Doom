import React from 'react'

export const Card = ({ children }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 text-black">{children}</div>
  )
}

export const CardHeader = ({ children }) => {
  return <div className="border-b p-4 text-gray-800">{children}</div>
}

export const CardTitle = ({ children }) => {
  return <h2 className="text-lg font-bold text-gray-800">{children}</h2>
}

export const CardContent = ({ children }) => {
  return <div className="p-4 text-gray-800">{children}</div>
}
