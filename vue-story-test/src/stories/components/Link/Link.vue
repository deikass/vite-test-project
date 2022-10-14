<template>
  <Overlay title="link">
    <li class="link"><a href="/">Apie mus</a></li>
  </Overlay>
  <Overlay title="link--bold">
    <li class="link link-bold"><a href="/">Apie mus</a></li>
  </Overlay>
  <Overlay title="link--danger">
    <li class="link link--danger"><a href="/">Apie mus</a></li>
  </Overlay>
  <Overlay title="link--large">
    <li class="link link--large"><a href="/">Apie mus</a></li>
  </Overlay>
  <Overlay title="link--large link--danger">
    <li class="link link--large link--danger"><a href="/">Apie mus</a></li>
  </Overlay>

  <Overlay title="link">
    <li class="link raudona"><a href="/">Apie mus</a></li>
  </Overlay>
<div>
  Linkas
</div>
  </template>

<script>
import Overlay from "../../Overlay.vue";

export default {
  components: {Overlay}
}
</script>
