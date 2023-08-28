import React from 'react';

function Page() {
  return (
    <section className="flex">
      <div className="w-1/2 bg-header bg-cover bg-center h-screen"></div>
      <div className="w-1/2 font-serif leading-normal py-12 px-4 max-w-lg m-auto">
        <header className=" mx-4 p-4 text-center margin-auto md:p-8">
          <h1 className="text-5xl uppercase">About Us</h1>
          <p className="text-lg">U+MI Studio</p>
        </header>
        <p className="mb-6 text-xl md:text-2xl">
          This is a simple parallax effect created by setting the background attachment property to a fixed position. This technique is not meant for non-decorative images, videos, etc. as those require additional HTML and CSS to work properly.
        </p>
        {/* Rest of the content */}
      </div>
    </section>
  );
}

export default Page;
