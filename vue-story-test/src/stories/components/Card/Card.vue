<template>
  <Overlay title="card">
    <div class="card">
      <div class="card__image">
        <img src="../../assets/img.png" alt="">
      </div>
      <div class="card__content">
        <div class="card__title">Ocuvite Lutein Forte plėvele dengtos tabletės N30</div>
        <div class="card__subtitle">Agetis Supplements Ltd</div>
        <div class="card__price"><span>nuo</span> 13,00 €</div>
      </div>
    </div>
  </Overlay>
  <Overlay title="card sale">
    <div class="card">
      <div class="card__image">
        <div class="card__sale">
          <img src="../../assets/sale.svg" alt="">
        </div>
        <img src="../../assets/img.png" alt="">
      </div>
      <div class="card__content">
        <div class="card__title">Ocuvite Lutein Forte plėvele dengtos tabletės N30</div>
        <div class="card__subtitle">Agetis Supplements Ltd</div>
        <div class="card__price"><span>nuo</span> 12,00 €</div>
      </div>
    </div>
  </Overlay>
</template>

<script>
import Overlay from "../../Overlay.vue";
// import '../../../../../scss/global/global.scss'
// import '../../../../../scss/main.scss'
// import '../../../../../scss/components/card.scss'

export default {
  components: {Overlay}
}
</script>
