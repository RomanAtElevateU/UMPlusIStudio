const Services = () => {
    const services = [
      {
        title: 'Portrait Photography',
        description: 'Capture your individual personality and style with our professional portrait photography sessions.',
      },
      {
        title: 'Wedding Photography',
        description: 'Preserve the magic of your special day with our expert wedding photography services.',
      },
      {
        title: 'Family Gatherings',
        description: 'Document the love and joy of your family gatherings with our candid family photography.',
      },
      // Add more services as needed
    ];
    return (
        <div className="flex flex-col items-center min-h-screen">
          <header className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-800">Our Services</h1>
            <p className="mt-2 text-gray-600">Discover What We Offer</p>
          </header>
          <main className="mt-8 text-center max-w-xl">
            <ul className="space-y-6">
              {services.map((service, index) => (
                <li key={index}>
                  <h2 className="text-xl font-semibold text-gray-800">{service.title}</h2>
                  <p className="mt-2 text-gray-700">{service.description}</p>
                </li>
              ))}
            </ul>
          </main>
        </div>
      );
    };

export default Services;
