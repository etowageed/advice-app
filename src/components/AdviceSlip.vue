<template>
  <div
    class="w-11/12 h-2/4 md:w-2/6 bg-DarkGrayishBlue shadow-2xl mx-auto rounded-lg p-5 mt-24 md:mt-0 flex flex-col justify-between">

    <div class=" text-center">
      <span class="text-xs text-NeonGreen">
        ADVICE #{{ adviceID }}</span>
    </div>

    <div class="w-11/12 text-center  mx-auto">
      <p class="text-xl text-LightCyan textFont font-extrabold">
        "{{ adviceSlip }}"
      </p>
    </div>
    <div class="flex mb-5">
      <!-- <img :src="'./assets/pattern-divider-mobile.svg'" alt="" />
      <img src="./assets/pattern-divider-desktop.svg" alt="" /> -->
      <svg class="mx-auto" width="295" height="16" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd">
          <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
          <g transform="translate(138)" fill="#CEE3E9">
            <rect width="6" height="16" rx="3" />
            <rect x="14" width="6" height="16" rx="3" />
          </g>
        </g>
      </svg>


    </div>
    <div>
      <button
        class="w-14 h-14 bg-NeonGreen rounded-full hover:bg-[#befcdd] flex items-center md:absolute md:bottom-32 md:right-[48%] md:left-[48%] mx-auto"
        @click="reloadPage()">
        <svg class="mx-auto hover:rotate-45" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733" />
        </svg>
      </button>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      adviceID: "",
      adviceSlip: '',
    };
  },

  methods: {
    getAdvice() {
      fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.adviceID = data.slip.id;
          this.adviceSlip = data.slip.advice;
        })
        .catch((err) => console.log(err.message));
    },

    reloadPage() {
      window.location.reload()
    }
  },
  mounted() {
    this.getAdvice();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap");

.textFont {
  font-family: "Manrope", sans-serif;
}
</style>
