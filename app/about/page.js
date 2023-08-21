function page() {
    return (
        <section>
            <div className="flex flex-col items-center min-h-screen">
                <header className="text-center">
                    <h1 className="text-3xl font-extrabold text-gray-800">About Us</h1>
                    <p className="mt-2 text-gray-600">Get to Know Our Photo Studio</p>
                </header>
                <main className="mt-8 text-center max-w-xl">
                    <p className="text-lg text-gray-700">
                        At our photo studio, we are passionate about capturing the essence of special moments. Our team of experienced photographers is dedicated to creating beautiful and meaningful memories that you'll cherish for a lifetime.
                    </p>
                    <p className="mt-4 text-gray-700">
                        Whether it's a portrait session, a wedding, or a family gathering, we strive to provide exceptional photography services that exceed your expectations. We believe that every photo tells a story, and we're here to help you tell yours.
                    </p>
                    <p className="mt-4 text-gray-700">
                        Our commitment to quality, creativity, and professionalism sets us apart. We take pride in our work and are excited to be part of your special moments. Contact us today to schedule your session and let us capture the magic for you.
                    </p>
                </main>
            </div>
        </section>
    )
}

export default page