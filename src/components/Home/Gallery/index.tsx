"use client";
import Image from 'next/image';
import Link from 'next/link';

// Local gallery images data
const galleryImages = [
    {
        src: "/images/gallery/foodone.jpg",
        name: "Gourmet Dish 1",
        price: 20.99,
    },
    {
        src: "/images/gallery/foodtwo.jpg",
        name: "Gourmet Dish 2",
        price: 15.49,
    },
    {
        src: "/images/gallery/foodthree.jpg",
        name: "Gourmet Dish 3",
        price: 25.00,
    },
    {
        src: "/images/gallery/foodfour.jpg",
        name: "Gourmet Dish 4",
        price: 18.75,
    },
];

const Gallery = () => {
    return (
        <section id='gallery-section' className="bg-teal-100 py-24">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md" id="gallery-section">
                <div className="text-center mb-12">
                    <p className="text-teal-600 text-lg font-semibold tracking-widest uppercase mb-3">Our Gallery</p>
                    <h2 className="text-4xl lg:text-5xl font-bold text-black dark:text-black mb-8">
                        A Gallery of Our Exquisite Culinary Creations
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-16 px-6">
                    {/* Map through images with varied sizes */}
                    {galleryImages.slice(0, 4).map((item, index) => (
                        <div
                            key={index}
                            className={`relative overflow-hidden rounded-xl transition-transform transform hover:scale-105 hover:shadow-2xl group ${
                                index % 2 === 0 ? 'col-span-1 row-span-2' : ''
                            }`} // Creates varied size cards for an interesting layout
                        >
                            <Image
                                src={item.src}
                                alt={item.name}
                                width={600}
                                height={500}
                                className="object-cover w-full h-full rounded-xl transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col items-start justify-end">
                                <p className="text-white text-2xl font-semibold">{item.name}</p>
                                <div className="flex items-center justify-between w-full pt-4">
                                    <p className="text-white text-lg font-medium">${item.price}</p>
                                    <Link href="#" className="text-white text-lg font-semibold bg-teal-500 hover:bg-teal-600 rounded-full py-2 px-6 transition-all duration-300 transform hover:scale-105 hover:shadow-md">
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
