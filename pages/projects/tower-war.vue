<template>
  <div>
    <Header smallText="Eol Nuha" largeText="Tower War Game" />
    <div class="container">
      <Carosuel
        :imgs="[
          {
            src: require('~/assets/images/projects/tower-1.png'),
            alt: 'Tower War game',
          },
          {
            src: require('~/assets/images/projects/tower-3.png'),
            alt: 'Tower War game',
          },
          {
            src: require('~/assets/images/projects/tower-4.png'),
            alt: 'Tower War game',
          },
          {
            src: require('~/assets/images/projects/tower-5.png'),
            alt: 'Tower War game',
          },
          {
            src: require('~/assets/images/projects/tower-2.png'),
            alt: 'Tower War game',
          },
        ]"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>
