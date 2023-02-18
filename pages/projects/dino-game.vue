<template>
  <div>
    <Header smallText="Eol Nuha" largeText="Dino Game" />
    <div class="container">
      <Carosuel
        :imgs="[
          {
            src: require('~/assets/images/projects/dino-5.png'),
            alt: 'Dino Game',
          },
          {
            src: require('~/assets/images/projects/dino-1.png'),
            alt: 'Dino Game',
          },
          {
            src: require('~/assets/images/projects/dino-3.png'),
            alt: 'Dino Game',
          },
          {
            src: require('~/assets/images/projects/dino-4.png'),
            alt: 'Dino Game',
          },
          {
            src: require('~/assets/images/projects/dino-2.png'),
            alt: 'Dino Game',
          },
        ]"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>
