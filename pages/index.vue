<template>
  <div>
    <Header />
    <div class="container">
      <About />
      <div class="section-title mt-10">
        <h1>Experiences</h1>
        <p>Below are my job experiences as a software developer.</p>
      </div>
      <Skills />
      <Projects />
      <Contact />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap");

body {
  margin: 0;
  font-family: "Manrope", "Inter";
  font-size: 16px;
}

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
