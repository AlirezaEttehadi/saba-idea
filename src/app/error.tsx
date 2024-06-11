"use client";

export default function Error() {
  return (
    <main className="flex-grow my-36 lg:my-52 flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-8">
        <h1 className="lg:text-4xl text-xl font-extrabold text-white tracking-tight sm:text-5xl">
          خطایی سمت سرور رخ داده
        </h1>
        <h3 className="text-sm font-semibold text-yellow-400 uppercase tracking-wide">
          خطای ۵۰۰
        </h3>
      </div>
    </main>
  );
}
