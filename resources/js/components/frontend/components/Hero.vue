<template>
  <carousel>
    <slide v-for="(slide, index) in slides" :key="slide.id">
      <div :class="['hero-slider-item', 'carousel__item', slide.backgroundClass]">
        <div class="container">
          <div class="hero-content" :class="slide.contentAlignment">
            <div class="section-heading">
              <h2 class="section__title text-white fs-65 lh-80 pb-3" v-html="slide.title"></h2>
              <p class="section__desc text-white pb-4" v-html="slide.description"></p>
            </div>
            <div class="hero-btn-box d-flex flex-wrap align-items-center pt-1">
              <a href="admission.html" class="btn theme-btn mr-4 mb-4">Join with Us<i class="la la-arrow-right icon ml-1"></i></a>
              <a href="#" class="btn-text video-play-btn mb-4" data-fancybox :data-src="slide.videoUrl">
                Watch Preview<i class="la la-play icon-btn ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </slide>
  <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </carousel>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
    name: "Hero",
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    data(){
         return {
           slides: [
        {
          id: 1,
          title: 'We Help You Learn <br /> What You Love',
          // ... other slide properties ...
        },
        {
          id: 2,
          title: 'Join Aduca & Get <br /> Your Free Courses!',
          backgroundClass: 'hero-bg-2',
          contentAlignment: 'text-center',
          // ... other slide properties ...
        },
        {
          id: 3,
          title: 'Learn Anything, <br /> Anytime, Anywhere',
          backgroundClass: 'hero-bg-3',
          contentAlignment: 'text-right',
          // ... other slide properties ...
        },
        // ... other slides ...
      ]
            };
    }
    // Other component options
};
</script>

<style scoped type="text/css">
.carousel__item {

  width: 100%;

}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>