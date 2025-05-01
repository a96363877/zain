"use client"

import { useState } from "react"
import { SkipBackIcon as Backspace } from "lucide-react"

interface NumericKeypadProps {
  onValueChange: (value: string) => void
  value: string
  maxLength?: number
  onEnter?: () => void
  onClose?: () => void
}

export function NumericKeypad({ onValueChange, value, maxLength = 4, onEnter, onClose }: NumericKeypadProps) {
  // Randomize keypad numbers for security
  const [keypadNumbers] = useState(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    return numbers
  })

  const handleNumberClick = (num: number) => {
    if (value.length < maxLength) {
      onValueChange(value + num)
    }
  }

  const handleBackspace = () => {
    onValueChange(value.slice(0, -1))
  }

  const handleClear = () => {
    onValueChange("")
  }

  const handleEnter = () => {
    if (onEnter) onEnter()
  }

  return (
    <div className="w-full bg-white border-t border-gray-200 py-4 px-2 shadow-lg">
      <div className="grid grid-cols-5 gap-2 mb-3">
        {keypadNumbers.slice(0, 5).map((num) => (
          <button
            key={num}
            type="button"
            className="bg-red-600 text-white rounded py-3 font-medium hover:bg-red-700 transition-colors"
            onClick={() => handleNumberClick(num)}
          >
            {num}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-5 gap-2 mb-4">
        {keypadNumbers.slice(5, 10).map((num) => (
          <button
            key={num}
            type="button"
            className="bg-red-600 text-white rounded py-3 font-medium hover:bg-red-700 transition-colors"
            onClick={() => handleNumberClick(num)}
          >
            {num}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        <button
          type="button"
          className="bg-red-600 text-white rounded py-3 font-medium hover:bg-red-700 transition-colors flex items-center justify-center"
          onClick={handleBackspace}
        >
          <Backspace className="w-5 h-5" />
        </button>
        <button
          type="button"
          className="bg-red-600 text-white rounded py-3 font-medium hover:bg-red-700 transition-colors"
          onClick={handleClear}
        >
          Clear
        </button>
        <button
          type="button"
          className="bg-red-600 text-white rounded py-3 font-medium hover:bg-red-700 transition-colors"
          onClick={handleEnter}
        >
          Enter
        </button>
      </div>
    </div>
  )
}
