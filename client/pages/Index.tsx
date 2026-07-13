import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-gradient-to-b from-white to-brand-lighter px-5 py-16">
      <div className="flex w-full max-w-[480px] flex-col items-start gap-6 rounded-xl border border-border bg-card p-8 shadow-[0_4px_8px_0_rgba(0,0,0,0.10)]">
        <div className="flex w-full flex-col items-center gap-6 py-6">
          <svg
            className="aspect-square w-24 sm:w-[120px]"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M101.727 22.848C95.5507 22.848 90.3089 20.9864 86.1467 17.3152C82.9901 14.5312 81.6439 11.6794 81.6366 11.6638L80.8903 10.0135H41.4661L39.6548 10L38.9085 11.6503C38.8949 11.6784 37.5497 14.5312 34.392 17.3142C30.2299 20.9854 24.988 22.847 18.8107 22.847H16.0001V47.3092C16.0001 60.0364 18.2097 71.2373 22.5683 80.5995C26.1441 88.2812 31.1476 94.7302 37.442 99.7653C48.2299 108.401 59.1222 109.855 59.58 109.913L60.2678 110L60.9556 109.913C61.3183 109.867 68.2231 108.945 76.4365 104.278C78.597 103.05 80.8474 101.563 83.0936 99.7653C89.388 94.7292 94.3926 88.2812 97.9683 80.5995C100.452 75.2666 102.236 69.3362 103.313 62.8663C104.127 57.9791 104.537 52.7847 104.537 47.3082V22.848H101.726H101.727Z"
              fill="#27AE60"
            />
            <path
              d="M103.314 62.8683C102.237 69.3371 100.452 75.2676 97.9694 80.6015C94.3936 88.2832 89.3891 94.7312 83.0947 99.7673C80.8485 101.565 78.5981 103.052 76.4376 104.28L50.4813 78.4244L64.6588 57.0191L84.7064 44.3335L103.314 62.8694V62.8683Z"
              fill="url(#paint0_linear_101_786)"
            />
            <path
              d="M50.4813 78.4233L35.8323 63.8314L42.4058 57.2824L50.4813 65.3275L78.1319 37.7845L84.7064 44.3324L50.4813 78.4233Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_101_786"
                x1="88.4693"
                y1="79.6384"
                x2="57.8566"
                y2="58.8032"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#27AE60" />
                <stop offset="0.87" stopColor="#184022" />
              </linearGradient>
            </defs>
          </svg>
          <div className="flex w-full flex-col items-start gap-2">
            <h1 className="w-full text-center font-sans text-[28px] font-semibold leading-8 text-foreground">
              Success
            </h1>
            <p className="w-full text-center font-sans text-base leading-7 text-muted-foreground">
              Your password has been updated!
            </p>
          </div>
        </div>
        <p className="w-full text-center font-sans text-base leading-7 text-foreground">
          Redirecting in 5 seconds…
        </p>
        <Link
          to="/sign-in"
          className="flex w-full items-center justify-center rounded-lg bg-primary px-6 py-4 text-center font-sans text-base font-bold leading-none text-primary-foreground transition-opacity hover:opacity-90"
        >
          Sign In Now
        </Link>
      </div>
    </div>
  );
}
