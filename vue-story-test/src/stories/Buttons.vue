<template>
  <template v-if="!variant">
    <button class="button">Skaityti daugiau <i class="icon icon-arrow-right"></i></button>
  </template>
  <template v-if="variant === 'blue'">
    <button class="button button--blue">Plačiau apie prekę <i class="icon icon-arrow-right--white"></i></button>
  </template>
  <template v-if="variant === 'only-icon'">
    <button class="button"><i class="icon icon-arrow-right"></i></button>
  </template>
</template>


<script>
import Overlay from './Overlay.vue'

export default {
  props: {
    variant: String
  },
  components: {Overlay}
}

</script>


<style>
.icon-arrow-right {
  background: url(assets/right-icon.svg) no-repeat;
}

.icon-arrow-right--white{
  background: url(assets/right-icon-white.svg) no-repeat;
}
</style>
