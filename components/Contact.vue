<template>
  <div id="contact">
    <div class="section-title mt-10">
      <h1 class="cursive-text">Get In Touch</h1>
      <p>Feel free to contact me with the options below.</p>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x my-10"
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
        <h4>Worldwide</h4>
      </div>
    </div>
    <div>
      <h3 class="text-xl font-bold mb-2">Send an email</h3>
      <form @submit.prevent="sendEmail" ref="form">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          <input
            type="text"
            placeholder="Full name"
            class="rounded border p-3"
            name="fullName"
            v-model="info.name"
            required
          />
          <input
            type="email"
            placeholder="Your email"
            class="rounded border p-3"
            v-model="info.email"
            name="email"
            required
          />
        </div>
        <textarea
          placeholder="Your message"
          class="w-full rounded border p-3 mt-[20px]"
          name="message"
          v-model="info.message"
          required
        ></textarea>
        <button
          type="submit"
          class="rounded p-3 w-full submit-btn flex justify-center"
        >
          <span v-if="!loading">Submit</span>
          <div role="status" v-else>
            <svg
              aria-hidden="true"
              class="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-white"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        </button>
      </form>
    </div>
    <div
      id="toast-success"
      class="fixed top-[10px] right-[20px] flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-gray-200 rounded-lg shadow"
      role="alert"
      v-if="success"
    >
      <div
        class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="sr-only">Check icon</span>
      </div>
      <div class="ml-3 text-sm font-normal">Email sent successfully!</div>
    </div>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";
export default {
  data() {
    return {
      loading: false,
      success: false,
      info: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    sendEmail() {
      this.loading = true;
      emailjs
        .sendForm(
          "default_service",
          "template_uvinz95",
          this.$refs.form,
          "user_1wflK7WkbyVGouoePZaLU"
        )
        .then(
          (result) => {
            this.loading = false;
            console.log("SUCCESS!", result.text);
            this.info = {
              name: "",
              email: "",
              message: "",
            };
            this.success = true;
            const that = this;
            setTimeout(function () {
              that.success = false;
            }, 4000);
          },
          (error) => {
            this.loading = false;
            console.log("FAILED...", error.text);
          }
        );
    },
  },
};
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
