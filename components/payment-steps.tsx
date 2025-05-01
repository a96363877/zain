interface PaymentStepsProps {
  currentStep: number;
}

export default function PaymentSteps({ currentStep }: PaymentStepsProps) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center relative">
        <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 -z-10"></div>

        <div
          className={`flex flex-col items-center z-10 ${
            currentStep >= 3 ? 'text-teal-600' : 'text-gray-400'
          }`}
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
              currentStep >= 3
                ? 'bg-teal-600 text-white'
                : 'bg-gray-200 text-gray-500'
            }`}
          >
            {currentStep >= 3 ? (
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
                <path d="M20 6 9 17l-5-5" />
              </svg>
            ) : (
              <span>3</span>
            )}
          </div>
          <span className="text-xs">تم التحقق</span>
        </div>

        <div
          className={`flex flex-col items-center z-10 ${
            currentStep >= 2 ? 'text-teal-600' : 'text-gray-400'
          }`}
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
              currentStep >= 2
                ? 'bg-teal-600 text-white'
                : 'bg-gray-200 text-gray-500'
            }`}
          >
            {currentStep > 2 ? (
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
                <path d="M20 6 9 17l-5-5" />
              </svg>
            ) : (
              <span>2</span>
            )}
          </div>
          <span className="text-xs">بيانات الدفع</span>
        </div>

        <div
          className={`flex flex-col items-center z-10 ${
            currentStep >= 1 ? 'text-teal-600' : 'text-gray-400'
          }`}
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
              currentStep > 1
                ? 'bg-teal-600 text-white'
                : 'bg-gray-200 text-gray-500'
            }`}
          >
            {currentStep > 1 ? (
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
                <path d="M20 6 9 17l-5-5" />
              </svg>
            ) : (
              <span>1</span>
            )}
          </div>
          <span className="text-xs">تحقق الدفع</span>
        </div>
      </div>
    </div>
  );
}
