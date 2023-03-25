<template>
  <div>
    <Header smallText="Project" largeText="Point of Sale Desktop App" />
    <div class="container">
      <Carosuel
        :border="true"
        :imgs="[
          {
            src: require('~/assets/images/projects/pos-2.jpg'),
            alt: 'POS App',
          },
          {
            src: require('~/assets/images/projects/pos-0.jpg'),
            alt: 'POS App',
          },
          {
            src: require('~/assets/images/projects/pos-1.jpg'),
            alt: 'POS App',
          },
          {
            src: require('~/assets/images/projects/pos-3.jpg'),
            alt: 'POS App',
          },
          {
            src: require('~/assets/images/projects/pos-4.jpg'),
            alt: 'POS App',
          },
          {
            src: require('~/assets/images/projects/pos-5.jpg'),
            alt: 'POS App',
          },
          {
            src: require('~/assets/images/projects/pos-6.jpg'),
            alt: 'POS App',
          },
          {
            src: require('~/assets/images/projects/pos-7.jpg'),
            alt: 'POS App',
          },
        ]"
      />
      <div class="my-8">
        <p>
          Point of sale (POS) applications are essential for businesses to
          manage transactions, inventory, and customer data. My desktop POS
          application is designed to be user-friendly and efficient, making it a
          valuable tool for businesses of all sizes. With my application,
          retailers can easily process sales, manage inventory, track customer
          information, and generate reports. My intuitive interface allows even
          those without prior experience to quickly learn how to use the
          application, making it a valuable asset for businesses looking to
          streamline their operations. Additionally, my application is
          customizable, allowing businesses to tailor it to their specific
          needs. Whether you're a small boutique store or a large retail chain,
          my POS application can help you manage and grow your business.
        </p>
        <h3 class="font-bold my-3">Technologies used:</h3>
        <div class="flex gap-[5px] items-center flex-wrap">
          <span class="pillar">Python</span>
          <span class="pillar">Electron.js</span>
          <span class="pillar">Flask</span>
          <span class="pillar">Vue.js</span>
          <span class="pillar">Javascript</span>
          <span class="pillar">Tailwindcss</span>
          <span class="pillar">SQLite3</span>
          <span class="pillar">SCSS</span>
          <span class="pillar">CSS</span>
          <span class="pillar">HTML</span>
        </div>
        <h3 class="font-bold my-3">Project Links:</h3>
        <div class="flex gap-[5px] items-center flex-wrap">
          <a
            href="https://www.piecex.com/source-code/Point-Of-Sale-Desktop-Application-5445"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              class="w-8 h-8 text-neutral-700"
            >
              <path
                d="M562.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L405.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C189.5 251.2 196 330 246 380c56.5 56.5 148 56.5 204.5 0L562.8 267.7zM43.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C57 372 57 321 88.5 289.5L200.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C416.5 260.8 410 182 360 132c-56.5-56.5-148-56.5-204.5 0L43.2 244.3z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Portfolio | Point of Sale Desktop App",
      meta: [
        {
          name: "keywords",
          hid: "keywords",
          content:
            "eol nuha, eol, nuha, eol nuha portfolio, eol nuha projects, point of sale desktop app, pos",
        },
        {
          property: "og:title",
          hid: "og-title",
          content: "Portfolio | Point of Sale Desktop App",
        },
        {
          name: "twitter:title",
          hid: "twitter-title",
          content: "Portfolio | Point of Sale Desktop App",
        },
      ],
    };
  },
};
</script>
