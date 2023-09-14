<template>
  <div class="header mb-5">
    <div
      class="inner-header flex flex-col justify-center gap-[5px] relative"
    >
      <nav
        class="absolute top-[10px] bg-transparent border-gray-200 px-2 sm:px-4 py-2.5 rounded w-full"
        v-show="$nuxt.$route.path !== '/'"
      >
        <div
          class="container flex flex-wrap items-center justify-between mx-auto"
        >
          <nuxt-link class="border-b-2 px-2" to="/">Home</nuxt-link>
          <button
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-500"
            aria-expanded="false"
            id="navbarBtn"
            @click="() => (navbar = !navbar)"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            class="w-full md:block md:w-auto"
            :class="navbar ? '' : 'hidden'"
            id="navbar"
          >
            <ul
              class="bg-transparent flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
            >
              <li>
                <nuxt-link class="border-b-2 px-2" to="/#about"
                  >About</nuxt-link
                >
              </li>
              <li>
                <nuxt-link class="border-b-2 px-2" to="/#experiences"
                  >Experiences</nuxt-link
                >
              </li>
              <li>
                <nuxt-link class="border-b-2 px-2" to="/#projects"
                  >Projects</nuxt-link
                >
              </li>
              <li>
                <nuxt-link class="border-b-2 px-2" to="/#contact"
                  >Contact</nuxt-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="flex justify-around">
        <div>
          <p class="text-2xl cursive-text">{{ smallText }}</p>
          <hr class="devider header-devider max-w-[130px] md:max-w-[180px]" />
          <h1 class="text-5xl md:text-7xl text-wrap font-bold my-4">{{ largeText }}</h1>
          <p v-show="$nuxt.$route.path === '/'"><span ref="typeElement"></span></p>
        </div>
        <div class="relative hidden md:block">
          <div class="absolute top-[25px] left-[25px] w-[300px] h-[300px] border-solid border-2 border-gray-300"></div>  
          <div class="header-img z-10"></div>
          <svg class="absolute top-[-40px] left-[-50px]" width="110" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="1" fill="white"/><circle cx="20" cy="10" r="1" fill="white"/><circle cx="30" cy="10" r="1" fill="white"/><circle cx="40" cy="10" r="1" fill="white"/><circle cx="50" cy="10" r="1" fill="white"/><circle cx="60" cy="10" r="1" fill="white"/><circle cx="70" cy="10" r="1" fill="white"/><circle cx="80" cy="10" r="1" fill="white"/><circle cx="90" cy="10" r="1" fill="white"/><circle cx="100" cy="10" r="1" fill="white"/><circle cx="10" cy="20" r="1" fill="white"/><circle cx="20" cy="20" r="1" fill="white"/><circle cx="30" cy="20" r="1" fill="white"/><circle cx="40" cy="20" r="1" fill="white"/><circle cx="50" cy="20" r="1" fill="white"/><circle cx="60" cy="20" r="1" fill="white"/><circle cx="70" cy="20" r="1" fill="white"/><circle cx="80" cy="20" r="1" fill="white"/><circle cx="90" cy="20" r="1" fill="white"/><circle cx="100" cy="20" r="1" fill="white"/><circle cx="10" cy="30" r="1" fill="white"/><circle cx="20" cy="30" r="1" fill="white"/><circle cx="30" cy="30" r="1" fill="white"/><circle cx="40" cy="30" r="1" fill="white"/><circle cx="50" cy="30" r="1" fill="white"/><circle cx="60" cy="30" r="1" fill="white"/><circle cx="70" cy="30" r="1" fill="white"/><circle cx="80" cy="30" r="1" fill="white"/><circle cx="90" cy="30" r="1" fill="white"/><circle cx="100" cy="30" r="1" fill="white"/><circle cx="10" cy="40" r="1" fill="white"/><circle cx="20" cy="40" r="1" fill="white"/><circle cx="30" cy="40" r="1" fill="white"/><circle cx="40" cy="40" r="1" fill="white"/><circle cx="50" cy="40" r="1" fill="white"/><circle cx="60" cy="40" r="1" fill="white"/><circle cx="70" cy="40" r="1" fill="white"/><circle cx="80" cy="40" r="1" fill="white"/><circle cx="90" cy="40" r="1" fill="white"/><circle cx="100" cy="40" r="1" fill="white"/><circle cx="10" cy="50" r="1" fill="white"/><circle cx="20" cy="50" r="1" fill="white"/><circle cx="30" cy="50" r="1" fill="white"/><circle cx="40" cy="50" r="1" fill="white"/><circle cx="50" cy="50" r="1" fill="white"/><circle cx="60" cy="50" r="1" fill="white"/><circle cx="70" cy="50" r="1" fill="white"/><circle cx="80" cy="50" r="1" fill="white"/><circle cx="90" cy="50" r="1" fill="white"/><circle cx="100" cy="50" r="1" fill="white"/><circle cx="10" cy="60" r="1" fill="white"/><circle cx="20" cy="60" r="1" fill="white"/><circle cx="30" cy="60" r="1" fill="white"/><circle cx="40" cy="60" r="1" fill="white"/><circle cx="50" cy="60" r="1" fill="white"/><circle cx="60" cy="60" r="1" fill="white"/><circle cx="70" cy="60" r="1" fill="white"/><circle cx="80" cy="60" r="1" fill="white"/><circle cx="90" cy="60" r="1" fill="white"/><circle cx="100" cy="60" r="1" fill="white"/><circle cx="10" cy="70" r="1" fill="white"/><circle cx="20" cy="70" r="1" fill="white"/><circle cx="30" cy="70" r="1" fill="white"/><circle cx="40" cy="70" r="1" fill="white"/><circle cx="50" cy="70" r="1" fill="white"/><circle cx="60" cy="70" r="1" fill="white"/><circle cx="70" cy="70" r="1" fill="white"/><circle cx="80" cy="70" r="1" fill="white"/><circle cx="90" cy="70" r="1" fill="white"/><circle cx="100" cy="70" r="1" fill="white"/><circle cx="10" cy="80" r="1" fill="white"/><circle cx="20" cy="80" r="1" fill="white"/><circle cx="30" cy="80" r="1" fill="white"/><circle cx="40" cy="80" r="1" fill="white"/><circle cx="50" cy="80" r="1" fill="white"/><circle cx="60" cy="80" r="1" fill="white"/><circle cx="70" cy="80" r="1" fill="white"/><circle cx="80" cy="80" r="1" fill="white"/><circle cx="90" cy="80" r="1" fill="white"/><circle cx="100" cy="80" r="1" fill="white"/><circle cx="10" cy="90" r="1" fill="white"/><circle cx="20" cy="90" r="1" fill="white"/><circle cx="30" cy="90" r="1" fill="white"/><circle cx="40" cy="90" r="1" fill="white"/><circle cx="50" cy="90" r="1" fill="white"/><circle cx="60" cy="90" r="1" fill="white"/><circle cx="70" cy="90" r="1" fill="white"/><circle cx="80" cy="90" r="1" fill="white"/><circle cx="90" cy="90" r="1" fill="white"/><circle cx="100" cy="90" r="1" fill="white"/></svg>
          <svg class="absolute bottom-[40px] right-[-50px]" width="110" height="100" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="1" fill="white"/><circle cx="20" cy="10" r="1" fill="white"/><circle cx="30" cy="10" r="1" fill="white"/><circle cx="40" cy="10" r="1" fill="white"/><circle cx="50" cy="10" r="1" fill="white"/><circle cx="60" cy="10" r="1" fill="white"/><circle cx="70" cy="10" r="1" fill="white"/><circle cx="80" cy="10" r="1" fill="white"/><circle cx="90" cy="10" r="1" fill="white"/><circle cx="100" cy="10" r="1" fill="white"/><circle cx="10" cy="20" r="1" fill="white"/><circle cx="20" cy="20" r="1" fill="white"/><circle cx="30" cy="20" r="1" fill="white"/><circle cx="40" cy="20" r="1" fill="white"/><circle cx="50" cy="20" r="1" fill="white"/><circle cx="60" cy="20" r="1" fill="white"/><circle cx="70" cy="20" r="1" fill="white"/><circle cx="80" cy="20" r="1" fill="white"/><circle cx="90" cy="20" r="1" fill="white"/><circle cx="100" cy="20" r="1" fill="white"/><circle cx="10" cy="30" r="1" fill="white"/><circle cx="20" cy="30" r="1" fill="white"/><circle cx="30" cy="30" r="1" fill="white"/><circle cx="40" cy="30" r="1" fill="white"/><circle cx="50" cy="30" r="1" fill="white"/><circle cx="60" cy="30" r="1" fill="white"/><circle cx="70" cy="30" r="1" fill="white"/><circle cx="80" cy="30" r="1" fill="white"/><circle cx="90" cy="30" r="1" fill="white"/><circle cx="100" cy="30" r="1" fill="white"/><circle cx="10" cy="40" r="1" fill="white"/><circle cx="20" cy="40" r="1" fill="white"/><circle cx="30" cy="40" r="1" fill="white"/><circle cx="40" cy="40" r="1" fill="white"/><circle cx="50" cy="40" r="1" fill="white"/><circle cx="60" cy="40" r="1" fill="white"/><circle cx="70" cy="40" r="1" fill="white"/><circle cx="80" cy="40" r="1" fill="white"/><circle cx="90" cy="40" r="1" fill="white"/><circle cx="100" cy="40" r="1" fill="white"/><circle cx="10" cy="50" r="1" fill="white"/><circle cx="20" cy="50" r="1" fill="white"/><circle cx="30" cy="50" r="1" fill="white"/><circle cx="40" cy="50" r="1" fill="white"/><circle cx="50" cy="50" r="1" fill="white"/><circle cx="60" cy="50" r="1" fill="white"/><circle cx="70" cy="50" r="1" fill="white"/><circle cx="80" cy="50" r="1" fill="white"/><circle cx="90" cy="50" r="1" fill="white"/><circle cx="100" cy="50" r="1" fill="white"/><circle cx="10" cy="60" r="1" fill="white"/><circle cx="20" cy="60" r="1" fill="white"/><circle cx="30" cy="60" r="1" fill="white"/><circle cx="40" cy="60" r="1" fill="white"/><circle cx="50" cy="60" r="1" fill="white"/><circle cx="60" cy="60" r="1" fill="white"/><circle cx="70" cy="60" r="1" fill="white"/><circle cx="80" cy="60" r="1" fill="white"/><circle cx="90" cy="60" r="1" fill="white"/><circle cx="100" cy="60" r="1" fill="white"/><circle cx="10" cy="70" r="1" fill="white"/><circle cx="20" cy="70" r="1" fill="white"/><circle cx="30" cy="70" r="1" fill="white"/><circle cx="40" cy="70" r="1" fill="white"/><circle cx="50" cy="70" r="1" fill="white"/><circle cx="60" cy="70" r="1" fill="white"/><circle cx="70" cy="70" r="1" fill="white"/><circle cx="80" cy="70" r="1" fill="white"/><circle cx="90" cy="70" r="1" fill="white"/><circle cx="100" cy="70" r="1" fill="white"/><circle cx="10" cy="80" r="1" fill="white"/><circle cx="20" cy="80" r="1" fill="white"/><circle cx="30" cy="80" r="1" fill="white"/><circle cx="40" cy="80" r="1" fill="white"/><circle cx="50" cy="80" r="1" fill="white"/><circle cx="60" cy="80" r="1" fill="white"/><circle cx="70" cy="80" r="1" fill="white"/><circle cx="80" cy="80" r="1" fill="white"/><circle cx="90" cy="80" r="1" fill="white"/><circle cx="100" cy="80" r="1" fill="white"/><circle cx="10" cy="90" r="1" fill="white"/><circle cx="20" cy="90" r="1" fill="white"/><circle cx="30" cy="90" r="1" fill="white"/><circle cx="40" cy="90" r="1" fill="white"/><circle cx="50" cy="90" r="1" fill="white"/><circle cx="60" cy="90" r="1" fill="white"/><circle cx="70" cy="90" r="1" fill="white"/><circle cx="80" cy="90" r="1" fill="white"/><circle cx="90" cy="90" r="1" fill="white"/><circle cx="100" cy="90" r="1" fill="white"/></svg>
        </div>
      </div>
    </div>

    <div>
      <svg
        class="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g class="parallax">
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="0"
            fill="rgba(255,255,255,0.7"
          />
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(255,255,255,0.5)"
          />
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(255,255,255,0.3)"
          />
          <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
import Typed from 'typed.js';
export default {
  props: {
    smallText: {
      type: String,
      required: true,
    },
    largeText: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      navbar: false,
    };
  },
  mounted() {
    const options = {
      strings: ["Full-stack Developer", "Desktop Developer", "Computer-Science Major", "Hardworking"],
      typeSpeed: 50, // Typing speed in milliseconds
      backSpeed: 30, // Backspacing speed in milliseconds
      loop: true, // Set to true for continuous looping
    };

    const typed = new Typed(this.$refs.typeElement, options);
  },
};
</script>

<style scoped lang="scss">
h1 {
  font-weight: 300;
  letter-spacing: 2px;
}
p {
  letter-spacing: 1px;
  color: #333333;
}

.header-img {
  background-image: url('~@/assets/images/eoli.webp');
  width: 300px;
  height: 300px;
  position: relative;
  z-index: 10;
  background-size: cover;
  background-position-x: center;
}

.header {
  position: relative;
  text-align: center;
  background: linear-gradient(
    60deg,
    rgba(32, 33, 36, 1) 0%,
    rgb(43, 43, 44) 100%
  );
  color: white;
}
.logo {
  width: 50px;
  fill: white;
  padding-right: 15px;
  display: inline-block;
  vertical-align: middle;
}

.inner-header {
  height: 65vh;
  width: 100%;
  margin: 0;
  padding: 0;
  p {
    color: white;
  }
}

.waves {
  position: relative;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px; /*Fix for safari gap*/
  min-height: 100px;
  max-height: 150px;
}

.content {
  position: relative;
  height: 20vh;
  text-align: center;
  background-color: white;
}

/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}
/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height: 40px;
    min-height: 40px;
  }
  .content {
    height: 30vh;
  }
}

.devider {
  display: inline-block;
  border: 0;
  font-size: 0;
  line-height: 0;
  height: 3px;
  width: 100%;
  margin: 0;
}

.header-devider {
  background: linear-gradient(to right, #fff 50%, rgb(23, 23, 23) 120%);
}
</style>
