'use client';

import { useState } from 'react';
import Image from 'next/image';

interface PaymentConfirmationProps {
  serviceNumber: string;
  amount: string;
  paymentMethod: string;
  onConfirm: () => void;
}

export default function PaymentConfirmation({
  serviceNumber,
  amount,
  paymentMethod,
  onConfirm,
}: PaymentConfirmationProps) {
  const [selectedMethod, setSelectedMethod] = useState('bank-card');

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-right mb-4 font-medium">اختر طريقة الدفع</h3>

        <div className="space-y-3 mb-6">
          <button
            className="w-full border rounded-md p-3 flex justify-between items-center"
            onClick={() => setSelectedMethod('benefit-pay')}
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
              className={`transform ${
                selectedMethod === 'benefit-pay' ? '' : 'rotate-180'
              }`}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
            <div className="flex items-center">
              <span className="ml-2">Benefit Pay</span>
              <Image
                src="/1.jpeg"
                alt="Benefit Pay"
                width={30}
                height={30}
                className="object-contain"
              />
            </div>
          </button>

          <button
            className="w-full border rounded-md p-3 flex justify-between items-center"
            onClick={() => setSelectedMethod('credit-card')}
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
              className={`transform ${
                selectedMethod === 'credit-card' ? '' : 'rotate-180'
              }`}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
            <div className="flex items-center">
              <span className="ml-2">بطاقة الائتمان</span>
              <div className="flex">
                <Image
                  src="/2.png"
                  alt="Visa"
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </div>
            </div>
          </button>

          <button
            className="w-full border rounded-md p-3 flex justify-between items-center"
            onClick={() => setSelectedMethod('bank-card')}
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
              <path d="m6 9 6 6 6-6" />
            </svg>
            <div className="flex items-center">
              <span className="ml-2">بطاقة الصراف الآلي</span>
              <img
                src="/3.png"
                alt="Benefit"
                width={30}
                height={30}
                className="object-contain"
              />
            </div>
          </button>
        </div>

        {selectedMethod === 'bank-card' && (
          <div className="border-t pt-4">
            <div className="flex justify-between mb-2">
              <span className="font-bold">{amount} د.ب</span>
              <span>المبلغ الإجمالي للدفع</span>
            </div>
            <p className="text-right text-sm mb-4">
              دفع المبلغ مباشرة من خلال بطاقة الصراف الآلي
            </p>
            <button
              onClick={onConfirm}
              className="w-full bg-teal-600 text-white py-3 rounded-md font-medium hover:bg-teal-700 transition"
            >
              تأكيد الدفع ({amount} د.ب)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
