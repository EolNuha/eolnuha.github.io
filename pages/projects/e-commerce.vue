<template>
  <div>
    <Header smallText="Eol Nuha" largeText="E-Commerce Website" />
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
export default {};
</script>
