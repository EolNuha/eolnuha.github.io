<template>
  <div>
    <div class="section-title mt-10">
      <h1>Get In Touch</h1>
      <p>Feel free to contact me with the options below.</p>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x"
    >
      <div class="flex flex-col items-center gap-[10px] py-8 px-3">
        <span class="icon icon-phone"></span>
        <h4>+383 49 793 208</h4>
      </div>
      <div class="flex flex-col items-center gap-[10px] py-8 px-3">
        <span class="icon icon-mail"></span>
        <h4>eol.nuha22@gmail.com</h4>
      </div>
      <div class="flex flex-col items-center gap-[10px] py-8 px-3">
        <span class="icon icon-location"></span>
        <h4>Prishtina, Kosovo</h4>
      </div>
    </div>
    <div>
      <h3 class="text-xl font-bold mb-2">Send an email</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
        <input type="text" placeholder="Full name" class="rounded border p-3" />
        <input
          type="email"
          placeholder="Your email"
          class="rounded border p-3"
        />
      </div>
      <textarea
        placeholder="Your message"
        class="w-full rounded border p-3 mt-[20px]"
      ></textarea>
      <button class="rounded p-3 w-full submit-btn">Send email</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.submit-btn {
  background: linear-gradient(
    60deg,
    rgba(32, 33, 36, 1) 0%,
    rgb(79, 79, 79) 100%
  );
  color: white;
  margin-top: 20px;
}
</style>
