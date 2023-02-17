<template>
  <footer>
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-2 py-10">
        <div>
          <h1 class="text-xl md:text-3xl">This is my portfolio</h1>
          <p>eolnuha.com © copyright {{ new Date().getFullYear() }}</p>
        </div>
        <div>
          <h1 class="text-xl md:text-3xl">Find me on other social media</h1>
          <div class="flex justify-center gap-[10px]">
            <a href="https://www.linkedin.com/in/eolnuha/"
              ><span class="icon icon-linkedin"></span
            ></a>
            <a href="https://github.com/eolnuha"
              ><span class="icon icon-github"></span
            ></a>
            <a href="https://stackoverflow.com/users/14683130/eol-nuha"
              ><span class="icon icon-stackoverflow"></span
            ></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  background: #1a1a1a;
  margin-top: 150px;
  h1 {
    color: white;
    text-align: center;
  }
  p {
    @apply text-gray-200;
    text-align: center;
  }
}
</style>
