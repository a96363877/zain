"use client"

import type React from "react"

import { useState } from "react"

interface PaymentDetailsProps {
  serviceNumber: string
  onSubmit: (amount: string, paymentMethod: string) => void
  onChangeNumber: () => void
}

export default function PaymentDetails({ serviceNumber, onSubmit, onChangeNumber }: PaymentDetailsProps) {
  const [amount, setAmount] = useState("")
  const [paymentType, setPaymentType] = useState("all")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!amount) {
      setError("الرجاء إدخال المبلغ")
      return
    }

    onSubmit(amount, "benefit-pay")
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="mb-4">
          <div className="flex justify-between mb-2">
            <span>رقم الخدمة</span>
            <div className="flex items-center">
              <span className="ml-2">{serviceNumber}</span>
              <button
                onClick={onChangeNumber}
                className="bg-white border border-teal-600 text-teal-600 px-4 py-1 rounded-full text-sm"
              >
                تغيير
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="amount" className="block text-right mb-2">
                أدخل المبلغ
              </label>
              <input
                type="text"
                id="amount"
                className="w-full border border-gray-300 rounded-md p-3 text-right"
                placeholder="د.ب"
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value)
                  setError("")
                }}
                dir="rtl"
              />
              {error && <p className="text-red-500 text-sm mt-1 text-right">{error}</p>}
            </div>

            <div className="mb-4">
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  id="payAll"
                  name="paymentType"
                  checked={paymentType === "all"}
                  onChange={() => setPaymentType("all")}
                  className="mr-2"
                />
                <label htmlFor="payAll" className="ml-auto">
                  الدفع لجميع الأرقام
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="paySingle"
                  name="paymentType"
                  checked={paymentType === "single"}
                  onChange={() => setPaymentType("single")}
                  className="mr-2"
                />
                <label htmlFor="paySingle" className="ml-auto">
                  الدفع لرقم واحد
                </label>
              </div>
            </div>

            <div className="border border-gray-200 rounded-md p-3 mb-4">
              <button type="button" className="flex items-center justify-between w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transform rotate-180"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <div className="flex items-center">
                  <span className="text-teal-600 ml-2">التبرع للأعمال الخيرية</span>
                  <div className="flex">
                    <span className="text-red-500 mx-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                    </span>
                    <span className="text-green-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4" />
                        <path d="M12 8h.01" />
                      </svg>
                    </span>
                  </div>
                </div>
              </button>
            </div>

            <div className="bg-gray-50 rounded-md p-4 mb-4">
              <h3 className="text-right mb-2 font-medium">بيانات الدفع</h3>
              <div className="flex justify-between mb-2">
                <span>{serviceNumber}</span>
                <span>رقم الخدمة</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>{amount ? `${amount} د.ب` : "0.000 د.ب"}</span>
                <span>مبلغ الفاتورة</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>0.000 د.ب</span>
                <span>مبلغ التبرع</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>{amount ? `${amount} د.ب` : "0.000 د.ب"}</span>
                <span>المبلغ الإجمالي</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 rounded-md font-medium hover:bg-teal-700 transition"
            >
              اختر طريقة الدفع
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
