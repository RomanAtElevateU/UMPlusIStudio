function page() {
  return (
    <section>
    <div className="flex flex-col items-center min-h-screen">
      <header className="text-center">
        <h1 className="text-3xl font-extrabold text-gray-800">Welcome to Our Photo Studio</h1>
        <p className="mt-2 text-gray-600">Capturing Memories with Excellence</p>
      </header>
      <main className="mt-8 text-center">
        <p className="text-lg text-gray-700">Browse our portfolio and book your session today!</p>
        <a
          href="/portfolio"
          className="mt-4 inline-block px-6 py-3 text-white bg-indigo-500 rounded-full hover:bg-indigo-600"
        >
          View Portfolio
        </a>
      </main>
    </div>    </section>
  )
}

export default page