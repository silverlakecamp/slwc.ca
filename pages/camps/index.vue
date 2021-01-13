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

      <p>SLWC is still finalizing plans for the 2021 Camping Season. With all of the uncertainty around COVID-19, vaccines, and government direction we are still not sure what camps and services we will be able to offer this year.
      </p>

      <p>Please stay tuned for more information coming soon on this page with details as we find out more.</p>

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
              <v-btn v-if="!camp.full" flat large color="green" :href="registrationLinkFor(camp)" target="_blank">Register!</v-btn>
              <v-btn v-if="camp.full" flat large color="green" :href="emailContactLinkFor(camp)">
                Contact the camp office for more info
              </v-btn>
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
      registrationLinkFor: function(camp) {
        return 'http://slwc.campbrainregistration.com';
      },
      emailContactLinkFor: function(camp) {
        return `mailto:office@slwc.ca?subject=${camp.title.split(' ').join('%20')}%20Registration`
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
