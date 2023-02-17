<template>
  <div class="container">
    <VueSlickCarousel v-bind="settings">
      <template v-for="(img, index) in imgs">
        <div class="!flex justify-center" :key="index">
          <img
            :src="img.src"
            :alt="img.alt"
            style="max-width: 500px; width: 100%"
          />
        </div>
      </template>
      <template #prevArrow="arrowOption">
        <div class="custom-arrow">
          {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
          eol
        </div>
      </template>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  props: {
    imgs: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      settings: {
        dots: true,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        cssEase: "linear",
        slidesToShow: 1,
        focusOnSelect: true,
      },
    };
  },
  components: { VueSlickCarousel },
};
</script>

<style lang="scss">
.slick-prev {
  left: -40px;
}
.slick-prev,
.slick-next {
  &::before {
    color: rgba(32, 33, 36, 1);
    font-size: 35px;
  }
}
</style>
