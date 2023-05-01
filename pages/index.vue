<template>
  <div>
    <Header smallText="Hi, I am" largeText="Eol Nuha" />
    <div class="container" id="container">
      <About />
      <Experiences />
      <Skills />
      <Projects />
      <Blog />
      <Contact />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const container = document.getElementById("container");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const card = entry.target;
          if (entry.isIntersecting) {
            card.setAttribute("focused", "");
          }
        });
      },
      { threshold: 0.2 }
    );

    Array.from(container.children).forEach((card) => {
      observer.observe(card);
    });
  },
};
</script>

<style lang="scss" scoped>
.container > div {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.5s ease;
}

.container > div[focused] {
  opacity: 1;
  transform: translateY(0);
}
</style>

<style lang="scss">
.section-title {
  background: #f7f8fc;
  padding: 25px;
  margin: 20px 0;
  text-align: center;
  border-radius: 12px;
  transition-duration: 0.3s;
  margin-top: 150px;
  h1 {
    margin: 0 5%;
    margin-top: -70px;
    margin-bottom: 20px;
    font-weight: 600;
    @apply text-4xl;
    @apply md:text-5xl;
    color: #252733;
    background: #ffffff;
    box-shadow: 0px 8px 16px rgb(0 0 0 / 8%);
    border-radius: 16px;
    transition-duration: 0.3s;
    padding: 15px;
  }

  p {
    font-weight: 400;
    @apply text-xl;
    @apply md:text-2xl;
    color: #252733;
    margin: 0;
  }
}
</style>
