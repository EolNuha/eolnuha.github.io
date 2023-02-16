<template>
  <footer>
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-2 py-10">
        <div>
          <h1>This is my portfolio</h1>
          <p>eolnuha.com © copyright {{ new Date().getFullYear() }}</p>
        </div>
        <div>
          <h1>Find me on other social media</h1>
          <div class="flex justify-center gap-[10px]">
            <span class="icon icon-linkedin"></span>
            <span class="icon icon-github"></span>
            <span class="icon icon-stackoverflow"></span>
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
    font-size: 30px;
    text-align: center;
  }
  p {
    @apply text-gray-200;
    text-align: center;
  }
}
</style>
