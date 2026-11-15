import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold text-[#1B1466] mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-[#191923] mb-4">Page Not Found</h2>
      <p className="text-[#64748B] max-w-md mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#6161FF] hover:bg-[#4E4ED8] text-white rounded-full font-medium transition-all shadow-sm"
      >
        Return to Home
      </Link>
    </div>
  );
}
