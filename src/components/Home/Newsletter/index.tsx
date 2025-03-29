"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";

const Newsletter = () => {
    return (
        <section id = {"newsletter-section"}className="relative bg-gradient-to-r from-teal-400 to-teal-600 py-24">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
                <div className="bg-teal-800 rounded-3xl grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-12 xl:gap-x-8 p-10">
                    <div className="col-span-7">
                        <div className="lg:ml-32 lg:mt-20 lg:mb-20">
                            <p className="text-lg font-semibold text-teal-200 uppercase mb-3 tracking-widest">
                                Join our Community
                            </p>
                            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-8">
                                Subscribe to our newsletter.
                            </h2>

                            <div className="relative flex items-center w-full">
                                <input
                                    type="email"
                                    name="q"
                                    className="py-4 sm:py-6 px-6 text-lg w-full text-black rounded-full focus:outline-none focus:ring-2 focus:ring-teal-400"
                                    placeholder="Enter your email address"
                                    autoComplete="off"
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                                    <button
                                        type="submit"
                                        className="p-4 bg-teal-600 hover:bg-teal-700 text-white rounded-full transition-all duration-300 transform hover:scale-110 shadow-xl"
                                    >
                                        <Icon
                                            icon="tabler:arrow-narrow-right"
                                            width="28"
                                            height="28"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right-side Image Section */}
                    <div className="col-span-5 relative hidden md:block">
                        <div className="absolute top-[-5%] right-[%]">
                            <Image
                                src="/images/Newsletter/soup.svg"
                                alt="Soup Image"
                                width={626}
                                height={602}
                                className="transform rotate-[-30deg] opacity-90"
                            />
                        </div>
                        <div className="absolute bottom-[-10%] right-[2%]">
                            <Image
                                src="/images/Newsletter/onion.svg"
                                alt="Onion Image"
                                width={300}
                                height={122}
                                className="opacity-90"
                            />
                        </div>
                        <div className="absolute top-[30%] right-[-15%] hidden lg:block">
                            <Image
                                src="/images/Newsletter/lec.svg"
                                alt="Lettuce Image"
                                width={300}
                                height={122}
                                className="opacity-80"
                            />
                        </div>
                        <div className="absolute bottom-[10%] left-[5%]">
                            <Image
                                src="/images/Newsletter/yellow.svg"
                                alt="Yellow Image"
                                width={59}
                                height={59}
                                className="opacity-80"
                            />
                        </div>
                        <div className="absolute bottom-[20%] right-[10%]">
                            <Image
                                src="/images/Newsletter/blue.svg"
                                alt="Blue Image"
                                width={25}
                                height={25}
                                className="opacity-70"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
