import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-4 text-center">
      <div className="mb-4">
        <button className="flex items-center justify-between w-full px-4 py-2">
          <span>الباقات</span>
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
        </button>
        <button className="flex items-center justify-between w-full px-4 py-2">
          <span>المتجر الإلكتروني</span>
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
        </button>
        <button className="flex items-center justify-between w-full px-4 py-2">
          <span>خدمات</span>
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
        </button>
        <button className="flex items-center justify-between w-full px-4 py-2">
          <span>Support</span>
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
        </button>
      </div>

      <div className="mb-4">
        <h3 className="mb-2">Follow Us</h3>
        <div className="flex justify-center gap-2">
          <Link href="#" className="text-white">
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
              <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
              <path d="m10 15 5-3-5-3z" />
            </svg>
          </Link>
          <Link href="#" className="text-white">
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
              <path d="M4 4h16v16H4z" />
              <path d="M4 4v16h16" />
              <path d="M9 9h6v6H9z" />
            </svg>
          </Link>
          <Link href="#" className="text-white">
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
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </Link>
          <Link href="#" className="text-white">
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
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </Link>
          <Link href="#" className="text-white">
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
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="text-center mb-4">
        <div className="text-white text-2xl font-bold mb-2">
          <span className="text-white">zain</span>
        </div>
        <p className="text-sm">Copyright 2025 Zain, All rights reserved ©</p>
        <p className="text-sm mt-2">حمل تطبيق زين</p>
        <div className="flex justify-center gap-2 mt-2">
          <Link href="#" className="block">
            <img
              src="https://eshop.bh.zain.com/sites/default/files/ImagesDir/2024-03/Badge-1-appstore%20%281%29.png"
              alt="App Store"
              width={120}
              height={40}
            />
          </Link>
          <Link href="#" className="block">
            <img
              src="https://eshop.bh.zain.com/sites/default/files/ImagesDir/2024-03/Badge-google.png"
              alt="Google Play"
              width={120}
              height={40}
            />
          </Link>
          <Link href="#" className="block">
            <img
              src="https://eshop.bh.zain.com/sites/default/files/ImagesDir/2024-03/Badge-2-appgalary.png"
              alt="AppGallery"
              width={120}
              height={40}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
