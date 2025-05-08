"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

interface KeypadInputProps {
  placeholder?: string
  onChange?: (value: string) => void
  maxLength?: number
  className?: string
}

export default function KeypadInput({
  placeholder = "Enter value",
  onChange,
  maxLength = 10,
  className = "",
}: KeypadInputProps) {
  const [value, setValue] = useState("")
  const [showKeypad, setShowKeypad] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const keypadRef = useRef<HTMLDivElement>(null)

  // Handle keypad button press
  const handleKeyPress = (key: string) => {
    if (key === "backspace") {
      setValue((prev) => prev.slice(0, -1))
    } else if (key === "clear") {
      setValue("")
    } else if (value.length < maxLength) {
      setValue((prev) => prev + key)
    }
  }

  // Update parent component when value changes
  useEffect(() => {
    if (onChange) {
      onChange(value)
    }
  }, [value, onChange])

  // Handle clicks outside the keypad to hide it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        keypadRef.current &&
        !keypadRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowKeypad(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className={`relative ${className}`}>
      <Input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setShowKeypad(true)}
        className="text-center"
        readOnly
      />

      {showKeypad && (
        <Card
          ref={keypadRef}
          className="absolute z-10 p-2 mt-2 bg-white shadow-lg w-full max-w-[300px] left-1/2 transform -translate-x-1/2"
        >
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <Button
                key={num}
                variant="destructive"
                onClick={() => handleKeyPress(num.toString())}
                className="h-12 text-lg font-medium"
              >
                {num}
              </Button>
            ))}
            <Button variant="destructive" onClick={() => handleKeyPress("clear")} className="h-12 text-lg font-medium">
              C
            </Button>
            <Button variant="destructive" onClick={() => handleKeyPress("0")} className="h-12 text-lg font-medium">
              0
            </Button>
            <Button variant="destructive" onClick={() => handleKeyPress("backspace")} className="h-12 text-lg font-medium">
              ←
            </Button>
          </div>
        </Card>
      )}
    </div>
  )
}
