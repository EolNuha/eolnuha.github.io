<template>
  <div>
    <Header smallText="Project" largeText="E-Commerce Website" />
    <div class="container">
      <Carosuel
        :imgs="[
          {
            src: require('~/assets/images/projects/commerce-1.png'),
            alt: 'e-Commerce Website',
          },
          {
            src: require('~/assets/images/projects/commerce-3.png'),
            alt: 'e-Commerce Website',
          },
          {
            src: require('~/assets/images/projects/commerce-2.png'),
            alt: 'e-Commerce Website',
          },
          {
            src: require('~/assets/images/projects/commerce-4.png'),
            alt: 'e-Commerce Website',
          },
        ]"
      />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Portfolio | E-Commerce Website",
      meta: [
        {
          name: "keywords",
          hid: "keywords",
          content:
            "eol nuha, eol, nuha, eol nuha portfolio, eol nuha projects, E-Commerce Website, eol nuha E-Commerce Website",
        },
        {
          property: "og:title",
          hid: "og-title",
          content: "Portfolio | E-Commerce Website",
        },
        {
          name: "twitter:title",
          hid: "twitter-title",
          content: "Portfolio | E-Commerce Website",
        },
      ],
    };
  },
};
</script>
