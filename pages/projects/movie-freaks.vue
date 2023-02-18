<template>
  <div>
    <Header smallText="Eol Nuha" largeText="Movie Freaks" />
    <div class="container">
      <Carosuel
        :imgs="[
          {
            src: require('~/assets/images/projects/movie-loader.png'),
            alt: 'Movie freaks project',
          },
          {
            src: require('~/assets/images/projects/movie-home.png'),
            alt: 'Movie freaks project',
          },
          {
            src: require('~/assets/images/projects/movie-ipad.png'),
            alt: 'Movie freaks project',
          },
          {
            src: require('~/assets/images/projects/movie-phone.png'),
            alt: 'Movie freaks project',
          },
        ]"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>
