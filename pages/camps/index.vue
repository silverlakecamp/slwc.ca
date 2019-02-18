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
      <h1><span v-text="currentYear" /> Camps</h1>
    </v-container>
    <v-container grid-list-xl>
      <v-layout row wrap justify-space-between>
        <v-flex v-for="(camp, i) in camps" :key="i">
          <v-card>
            <v-img height="200px" :src="camp.image" />
            <v-card-title primary-title>
              <div :id="camp.slug">
                <h3 class="headline mb-0" v-text="camp.title" />
                <span class="grey--text" v-text="camp.dates" />
                <div v-text="camp.description" />
              </div>
            </v-card-title>

           <v-card-actions>
             <v-btn flat large color="green" :href="registrationLinkFor(camp.activeSessionId)" target="_blank">Register!</v-btn>
           </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    methods: {
      registrationLinkFor: function(sessionId) {
        return `https://campscui.active.com/orgs/SilverLakeWesleyanCamp#/selectSessions/${sessionId}`;
      }
    },
    data () {
      return {
        carousel_items: Array.from(Array(6).keys()).map(i => {
          return {src: require(`@/assets/img/camps/carousel/${i+1}.jpg`)}
        }),
        camps: this.$store.state.camps.camps
      }
    }
  }
</script>
