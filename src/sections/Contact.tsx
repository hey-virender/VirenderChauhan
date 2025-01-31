"use client";
import GrainImage from "@/assets/images/grain.jpg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import Link from "next/link";
export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20 z-50">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative z-0 overflow-hidden">
          <div
            className="absolute inset-0 -z-10 opacity-5"
            style={{ backgroundImage: `url(${GrainImage.src})` }}
          ></div>
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Lets create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your vision to life? Get in touch!
              </p>
            </div>

            <div className="z-50">
              <a href="mailto:bikuchauhan786@gmail.com">
                <button className="text-white bg-gray-900 inline-flex items-center gap-2 px-6 h-12 rounded-xl w-max border border-gray-900">
                  <span className="font-semibold ">Contact Me</span>
                  <ArrowUpRight className="size-4" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
