<template>
  <div>
    <v-carousel height="300px" hide-delimiters>
      <v-carousel-item
        v-for="(item,i) in carousel_items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <v-container grid-list-xl>
      <h1><span v-text="currentYear" /> Events @ SLWC</h1>
      <br>
      <v-layout row wrap>
        <v-flex v-for="(event, i) in events" :key="i">
          <v-card>
            <v-card-title primary-title>
              <h3 class="headline mb-0">
                <span v-text="event.title" />
              </h3>
            </v-card-title>
            <v-card-text>
              <div class="grey--text" v-text="event.dates" />
              <p class="grey--text" v-text="event.times" />
              <div v-text="event.description" />
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        carousel_items: Array.from(Array(6).keys()).map(i => {
          return {src: require(`@/assets/img/features/${i+1}.jpg`)}
        }),
        events: this.$store.state.events.events
      }
    }
  }
</script>
