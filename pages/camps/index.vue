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

      <p>SLWC is still finalizing plans for the 2021 Camping Season. With all of the uncertainty around COVID-19, vaccines, and government direction we are still not sure what camps and services we will be able to offer this year.</p>

      <p>Below you will find our current 2021 Camp Schedule. Please note that all of these camps are subject to change as we continue to follow current Ontario COVID-19 guidelines for camps and retreats. Registration are OPEN for all our 2021 camps at this time. Be assured that any fees paid for camps are 100% refundable if those camps are not able to run.
      </p>

      <p>Please stay tuned for more information coming soon on this page with details as we find out more.</p>

      <iframe class="airtable-embed" src="https://airtable.com/embed/shr2HJ3HUJx6PB35b?backgroundColor=cyan" frameborder="0" onmousewheel="" width="100%" height="620" style="background: transparent; border: 1px solid #ccc;"></iframe>
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
