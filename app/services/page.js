import React from 'react';

function ServicesPage() {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="md:w-1/2 bg-header bg-cover bg-center"></div>
      <div className="md:w-1/2 font-serif leading-normal py-12 px-4 max-w-lg mx-auto">
        <header className="mx-4 p-4 text-center md:p-8">
          <h1 className="text-5xl uppercase">Services</h1>
          <p className="text-lg">U+MI Studio</p>
        </header>
        <div className="mb-6 text-xl md:text-2xl">
          <h2 className="mb-4 text-2xl md:text-3xl uppercase">Wedding & Elopement Services</h2>
          <p className="mb-4">
            Your special moments deserve the best. Our customizable wedding and elopement packages start at $1500 for elopements and $4500 for weddings. With additional services and options available, our couples typically invest around $7000 to ensure every detail is captured.
          </p>
          <ul className="list-disc pl-8 mb-4">
            <li>Engagement Session</li>
            <li>Boudoir Session</li>
            <li>Second Photographer</li>
            <li>Rehearsal Dinner Coverage</li>
            <li>Fine Art Wedding Albums/Prints</li>
          </ul>
          <p>
            Ready to make your dream destination wedding a reality? We're here to bring your vision to life. Contact us for a detailed pricing guide and more information.
          </p>
        </div>
        <div className="mb-6 text-xl md:text-2xl">
          <h2 className="mb-4 text-2xl md:text-3xl uppercase">Business & Editorial Services</h2>
          <p className="mb-4">
            Elevate your brand with our top-notch imagery. Our business and editorial services are tailored to your project's needs, whether it's for websites, social media, or advertising. Based in Seattle but available worldwide, we're excited to collaborate with you. Get in touch with project details to get started.
          </p>
        </div>
        <div className="text-xl md:text-2xl">
          <h2 className="mb-4 text-2xl md:text-3xl uppercase">Portrait Sessions</h2>
          <p>
            Your story deserves to be told through breathtaking portraits. We offer portrait sessions for couples, boudoir, business branding, headshots, senior portraits, and family. Sessions start at $650 and include a fully edited online gallery with high-resolution images and print release. Reach out for more information.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;
