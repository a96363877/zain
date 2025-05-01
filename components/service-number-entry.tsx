'use client';

import type React from 'react';

import { useState } from 'react';
import Image from 'next/image';

interface ServiceNumberEntryProps {
  onSubmit: (serviceNumber: string) => void;
}

export default function ServiceNumberEntry({
  onSubmit,
}: ServiceNumberEntryProps) {
  const [serviceNumber, setServiceNumber] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!serviceNumber) {
      setError('الرجاء إدخال رقم الخدمة');
      return;
    }

    onSubmit(serviceNumber);
  };

  return (
    <div className="space-y-6">
      <p className="text-center text-sm leading-relaxed">
        قم بدفع فواتيرك خطوط آجل الدفع أو قم بإعادة شحن خطوط مسبق الدفع بكل أمان
        من دون الحاجة لتسجيل الدخول
      </p>

      <div className="bg-white rounded-lg p-6 shadow-sm">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="serviceNumber"
              className="block text-right mb-2 font-medium"
            >
              رقم الحساب أو رقم الخدمة
            </label>
            <input
              type="tel"
              id="serviceNumber"
              maxLength={10}
              className="w-full border border-gray-300 rounded-md p-3 text-right"
              placeholder="مثال: 3XXXXXX، 66XXXXXX، 100XXXXXX"
              value={serviceNumber}
              onChange={(e) => {
                setServiceNumber(e.target.value);
                setError('');
              }}
              dir="rtl"
            />
            {error && (
              <p className="text-red-500 text-sm mt-1 text-right">{error}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 rounded-md font-medium hover:bg-teal-700 transition"
          >
            قم بإدخال الرقم مرة أخرى*
          </button>
        </form>
      </div>

      <div className="bg-teal-600 rounded-lg overflow-hidden">
        <img
          src="https://eshop.bh.zain.com/sites/default/files/ImagesDir/2024-11/eShop%20Banners-394x250-ZainApp-Nov-1_Zain%20Mobile%20Application%20copy%203%20%281%29_0.png"
          alt="Zain App"
          width={500}
          height={300}
          className="object-contain"
        />
      </div>
    </div>
  );
}
