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
            Frontend Developer <br />
            <span className="text-[#16f2b3]">@ Gjirafa, Inc</span>
            .
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 mt-4">Prishtine, Kosovo (Aug 2022 - Present)</p>

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
                  At Gjirafa Inc, I have had the opportunity to work on several challenging and innovative projects as a frontend developer. My role has allowed me to contribute significantly to the development and enhancement of complex systems using various modern technologies.
                </p>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-pink-500">1. Full-End-to-End Video Platform Ecosystem</h3>
                  <p><strong>Tech Stack:</strong> Vue.js, JavaScript, TypeScript, Axios, SCSS, Bootstrap</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Developed a comprehensive video platform ecosystem that handles the entire video workflow from ingestion to delivery.</li>
                    <li>Implemented user-friendly interfaces for video upload, management, and playback, ensuring seamless user experiences.</li>
                    <li>Integrated various APIs using Axios for efficient data retrieval and interaction with backend services.</li>
                    <li>Utilized SCSS and Bootstrap for creating responsive and visually appealing UI components.</li>
                    <li>Ensured the platform&apos;s performance and scalability by leveraging the strengths of Vue.js and TypeScript for type safety and maintainability.</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-pink-500">2. Speech to Text Transcriptions</h3>
                  <p><strong>Tech Stack:</strong> React.js, TypeScript, JavaScript, Axios, Mantine, SCSS</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Worked on cutting-edge speech-to-text transcription solutions, including live, video-on-demand (VOD), and audio transcriptions.</li>
                    <li>Developed real-time editing features, enabling users to edit transcriptions on-the-fly with high accuracy and efficiency.</li>
                    <li>Employed React.js to build dynamic and interactive user interfaces that enhance user productivity and engagement.</li>
                    <li>Used TypeScript for robust code quality and to facilitate the development of large-scale applications.</li>
                    <li>Incorporated Mantine UI components to streamline the development process and create a cohesive and consistent design language.</li>
                    <li>Integrated Axios for efficient communication with backend services, ensuring real-time data processing and updates.</li>
                    <li>Styled components using SCSS to maintain a clean and organized codebase while delivering a polished user experience.</li>
                  </ul>
                </div>
                <p>
                  Through these projects, I have honed my skills in frontend development, working with both Vue.js and React.js, and have become proficient in using TypeScript for scalable and maintainable code. My experience at Gjirafa Inc has equipped me with the expertise to tackle complex challenges and deliver high-quality solutions that meet user needs and business objectives.
                </p>
              </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
};