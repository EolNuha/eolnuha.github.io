<template>
  <div>
    <Header smallText="Eol Nuha" largeText="Cyber City" />
    <div class="container">
      <Carosuel
        :imgs="[
          {
            src: require('~/assets/images/projects/cyber-white.png'),
            alt: 'Cyber City',
          },
          {
            src: require('~/assets/images/projects/cyber-black.png'),
            alt: 'Cyber City',
          },
          {
            src: require('~/assets/images/projects/cyber-ipad.png'),
            alt: 'Cyber City',
          },
          {
            src: require('~/assets/images/projects/cyber-phone.png'),
            alt: 'Cyber City',
          },
        ]"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>
