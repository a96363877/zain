"use client"

import { useState } from "react"
import PaymentSteps from "@/components/payment-steps"
import ServiceNumberEntry from "@/components/service-number-entry"
import PaymentDetails from "@/components/payment-details"
import PaymentConfirmation from "@/components/payment-confirmation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useRouter } from "next/navigation"

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1)
  const [serviceNumber, setServiceNumber] = useState("")
  const [amount, setAmount] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("benefit-pay")
  const router=useRouter()

  const goToStep = (step: number) => {
    setCurrentStep(step)
  }

  const handleServiceNumberSubmit = (number: string) => {
    setServiceNumber(number)
    setCurrentStep(2)
  }

  const handlePaymentDetailsSubmit = (amount: string, method: string) => {
    setAmount(amount)
    setPaymentMethod(method)
    setCurrentStep(3)
  }

  const handleConfirmPayment = () => {
    // Here you would handle the actual payment processing
    alert("سيتم تحويلك لصفحة الدفع")
    router.push('/benfit')
  }

  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      <Header />
      <div className="flex-1 max-w-md mx-auto w-full px-4 py-6">
        <div className="flex items-center mb-4">
          <button
            onClick={() => (currentStep > 1 ? setCurrentStep(currentStep - 1) : null)}
            className="text-teal-800 flex items-center"
          >
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
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
          <h1 className="text-xl font-medium text-center flex-1 ml-6">الدفع السريع</h1>
        </div>

        <PaymentSteps currentStep={currentStep} />

        {currentStep === 1 && <ServiceNumberEntry onSubmit={handleServiceNumberSubmit} />}

        {currentStep === 2 && (
          <PaymentDetails
            serviceNumber={serviceNumber}
            onSubmit={handlePaymentDetailsSubmit}
            onChangeNumber={() => setCurrentStep(1)}
          />
        )}

        {currentStep === 3 && (
          <PaymentConfirmation
            serviceNumber={serviceNumber}
            amount={amount}
            paymentMethod={paymentMethod}
            onConfirm={handleConfirmPayment}
          />
        )}
      </div>
      <Footer />
    </main>
  )
}
