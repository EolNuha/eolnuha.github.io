<template>
  <div class="header mb-5">
    <div
      class="inner-header flex flex-col items-center justify-center gap-[5px] relative"
    >
      <div
        class="absolute top-[10px] flex gap-[20px] justify-center items-center"
        v-show="$nuxt.$route.path !== '/'"
      >
        <nuxt-link class="border-b-2 px-2" to="/">Home</nuxt-link>
        <nuxt-link class="border-b-2 px-2" to="/#about">About</nuxt-link>
        <nuxt-link class="border-b-2 px-2" to="/#experiences"
          >Experiences</nuxt-link
        >
        <nuxt-link class="border-b-2 px-2" to="/#projects">Projects</nuxt-link>
        <nuxt-link class="border-b-2 px-2" to="/#contact">Contact</nuxt-link>
      </div>
      <p class="text-2xl">{{ smallText }}</p>
      <hr class="devider header-devider max-w-[130px] md:max-w-[180px]" />
      <h1 class="text-5xl md:text-7xl">{{ largeText }}</h1>
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
    <!--Waves end-->
  </div>
</template>

<script>
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
