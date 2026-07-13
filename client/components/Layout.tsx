import { Link } from "react-router-dom";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-10 flex w-full flex-col items-start bg-white">
        <div className="flex w-full items-center justify-between px-5 py-4">
          <Link to="/" className="flex flex-col items-start">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/4e270ddd0ccb48a2355fae80e847c2ce4ed292de?width=208"
              alt="ArcShare"
              className="h-6 w-auto sm:h-8"
            />
          </Link>
          <Link
            to="/"
            className="font-sans text-sm font-bold text-primary hover:opacity-80 sm:text-base"
          >
            Back to home
          </Link>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
