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
    </v-container>
    <v-container grid-list-xl>
      <v-layout row wrap justify-space-between>
        <v-flex v-for="(event, i) in events" :key="i">
          <v-card>
            <v-img height="200px" :src="event.image" />
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0" v-text="event.title" />
                <span class="grey--text" v-text="event.dates" />
                <div v-text="event.description" />
              </div>
            </v-card-title>

            <v-card-text>
              <div>
                <h4>Schedule</h4>
                <ul>
                  <li v-for="(scheduleItem, i) in event.schedule" :key="i">
                    <span v-text="scheduleItem"></span>
                  </li>
                </ul>
                <br>
                <h4>Activities</h4>
                <ul>
                  <li v-for="(activity, i) in event.activities" :key="i">
                    <span v-text="activity"></span>
                  </li>
                </ul>
              </div>
            </v-card-text>

            <v-card-actions>
             <v-btn v-if="event.requiresRegistration" flat large color="green" :href="event.registrationUrl" target="_blank">Register!</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
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
