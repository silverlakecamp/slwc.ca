<template>
  <div>
    <v-img cover :src="require('@/assets/img/oneoffs/one-day-give.jpg')" style="max-height: 500px"></v-img>
    <v-container>
      <h1>One Day Give</h1>
    </v-container>
    <v-container grid-list-xl>
      <v-layout row wrap justify-space-between>
        Giving is a thing
      </v-layout>
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
