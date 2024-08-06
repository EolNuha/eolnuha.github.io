import Experience from "../../components/homepage/experience";

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode, SiStackoverflow } from "react-icons/si";

export default async function Gjirafa() {

  return (
    <>
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Fullstack Developer <br />
            <span className="text-[#16f2b3]">@ Pythys</span>
            .
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 mt-4">Kuwait City, Kuwait (Mar 2021 - April 2022)</p>

          <div className="my-12 flex items-center gap-5">
            <Link
              href={personalData.github}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
              href={personalData.leetcode}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <SiLeetcode size={30} />
            </Link>
            <Link
              href={personalData.stackOverflow}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <SiStackoverflow size={30} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>

        </div>
        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8 max-h-[60vh] overflow-y-scroll">
            <div className="font-mono text-xs md:text-sm lg:text-base space-y-4">
                <p>
									At Pythys, I worked as a fullstack developer on two major projects that allowed me to utilize a diverse set of technologies and enhance my skills in both backend and frontend development.
                </p>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-pink-500">1. EYON - Media Platform for livestreaming content</h3>
                  <p><strong>Backend:</strong> Java, Groovy, PostgreSQL, and the Moqui Framework.</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Developed user authentication and real-time streaming capabilities.</li>
                    <li>Managed content with robust and scalable solutions.</li>
                    <li>Optimized platform performance and implemented security measures.</li>
                  </ul>
                  <p><strong>Frontend:</strong> Vue.js, Javascript, Axios, Bootstrap, SCSS</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Built an intuitive and responsive user interface</li>
                    <li>Developed custom components and integrated API endpoints.</li>
                    <li>Ensured cross-browser compatibility and user experience consistency.</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-pink-500">2. E-commerce and Restaurant Mobile Application</h3>
                  <p><strong>Tech Stack:</strong> Java, Groovy, PostgreSQL, the Moqui Framework, React Native, TypeScript</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Designed and implemented the database schema</li>
                    <li>Integrated third-party authentication.</li>
                    <li>Created a seamless and user-friendly interface with React Native.</li>
                    <li>Implemented multiple payment gateways as third-party services</li>
                    <li>Enhanced app performance and ensured smooth user experience across different devices and platforms.</li>
                  </ul>
                </div>
                <p>
                  My experience at Pythys has equipped me with the expertise to tackle complex challenges and deliver high-quality solutions that meet user needs and business objectives.
                </p>
              </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
};