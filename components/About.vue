<template>
  <div>
    <div class="section-title">
      <h1>About Me</h1>
      <p>I am Eol Nuha, and I am a full-stack software developer.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
      <div class="flex flex-col items-center gap-[12px]">
        <h1 class="text-5xl text-center">A Software Developer</h1>
        <p class="mb-0">
          As a highly skilled Frontend Developer at Gjirafa, I specialize in
          utilizing my problem-solving abilities and technical expertise to
          create innovative and efficient solutions. With a strong background in
          various programming languages, including Python, JavaScript, HTML,
          CSS, jQuery, Vue.JS, Java, and Groovy, I am well-equipped to tackle
          any challenge that arises. My passion for technology, combined with my
          independent, introverted nature, allows me to excel in a fast-paced
          and dynamic work environment. I am always seeking to expand my skill
          set and connect with other professionals in the software engineering
          field.
        </p>
        <!-- <button class="bg-blue-500 py-3 px-6 rounded text-white">
          Download Resume
        </button> -->
      </div>
      <div class="flex justify-center relative">
        <div class="absolute top-[50%]" style="transform: translateY(-50%)">
          <a href="/cv.pdf" download="resume">
            <button
              class="bg-transparent border border-gray-200 py-3 px-6 rounded text-white"
              style="backdrop-filter: blur(40px)"
            >
              Download Resume
            </button>
          </a>
        </div>
        <svg
          id="sw-js-blob-svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          class="w-[100%] md:w-[80%]"
        >
          <defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop
                id="stop1"
                stop-color="rgba(32, 33, 36, 1)"
                offset="0%"
              ></stop>
              <stop
                id="stop2"
                stop-color="rgba(109, 110, 112, 1)"
                offset="100%"
              ></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient)"
            d="M22.4,-35.2C29,-35,34.1,-28.9,34.7,-22C35.2,-15.1,31.2,-7.6,31.3,0.1C31.4,7.7,35.6,15.3,35,22.2C34.4,29,29,35,22.4,37.2C15.8,39.5,7.9,38.1,2,34.7C-3.9,31.2,-7.8,25.7,-13.2,22.7C-18.6,19.7,-25.5,19.2,-29.9,15.9C-34.2,12.5,-35.9,6.3,-33.9,1.1C-32,-4,-26.3,-7.9,-23.5,-13.9C-20.6,-19.8,-20.5,-27.6,-17.1,-29.6C-13.7,-31.5,-6.8,-27.5,0.6,-28.5C7.9,-29.4,15.9,-35.3,22.4,-35.2Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
            stroke-width="0"
            style="transition: all 0.3s ease 0s"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
