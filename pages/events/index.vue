<template>
  <div>
    <v-carousel height="500px" hide-delimiters>
      <v-carousel-item
        v-for="(item,i) in carousel_items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <v-container>
      <h1><span v-text="currentYear" /> Events</h1>

      <p>SLWC is still finalizing plans for the 2021 Camping Season. With all of the uncertainty around COVID-19, vaccines, and government direction we are still not sure what events we will be able to host this year.</p>

      <p>Please stay tuned for more information coming soon on the <a href="/camps">camps page</a> with details as we find out more.</p>

      <iframe class="airtable-embed" src="https://airtable.com/embed/shr1On0UdE13fxW1b?backgroundColor=red" frameborder="0" onmousewheel="" width="100%" height="580" style="background: transparent; border: 1px solid #ccc;"></iframe>
    </v-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        carousel_items: Array.from(Array(6).keys()).map(i => {
          return {src: require(`@/assets/img/events/carousel/${i+1}.jpg`)}
        }),
        events: this.$store.state.events.events
      }
    }
  }
</script>
