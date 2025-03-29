import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaExclamationTriangle, FaArrowLeft } from "react-icons/fa"; // Importing relevant icons

const NotFound = () => {
  return (
    <section className="bg-white pt-8 pb-20">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Image Section */}
          <div className="w-full px-4 md:w-5/12 lg:w-6/12">
            <div className="relative mx-auto aspect-[129/138] max-w-[357px] text-center">
              <Image
                src="/images/404.svg"
                alt="404 Not Found"
                width={0}
                height={0}
                layout="responsive"
                quality={100}
                className="mx-auto max-w-full"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full px-4 md:w-7/12 lg:w-6/12 xl:w-5/12">
            <div>
              <div className="mb-8">
                <FaExclamationTriangle className="text-6xl text-teal-600 mx-auto mb-4" /> {/* Adding Exclamation Icon */}
              </div>
              <h3 className="mb-5 text-2xl font-semibold text-dark dark:text-white">
                We Can&#39;t Seem to Find The Page You&#39;re Looking For.
              </h3>
              <p className="mb-8 text-base text-body-color dark:text-dark-6">
                Oops! The page you are looking for does not exist. It might have
                been moved or deleted.
              </p>
              <Link
                href="/"
                className="rounded-md px-7 py-3 text-base font-medium text-white transition hover:bg-teal-700 bg-teal-600 flex items-center justify-center gap-2"
              >
                <FaArrowLeft /> Go To Home {/* Adding Arrow Left Icon */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
