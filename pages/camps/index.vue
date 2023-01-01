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
      <h1><span v-text= Camps</h1>

      <p>Registration for our 2023 camps is open. </p>

      <p>We offer Day Camp options for all our Kids Camps (Jr. Kids, Kids I, II & III). These Day Camps run 9AM-5PM Monday through Friday. Campers can be dropped off and picked up each day or lodging and meals are available for grown ups to stay with their campers in one of our accommodations for an additional fee and based on availability. For more information about our accommodations for Day Camps please contact the office at office@slwc.ca. You can register for these or any of our camps by clicking on the buttons below.
      </p>

      <p><strong>Wondering what to pack for camp?</strong> Check out our <a href="/packing">Camp Packing Lists</a> for Day Camps and Overnight Camps.</p>

      <p><strong>Want to know about our camp fees, or need financial help?</strong> Check out our <a href="/camps/fees">Camp Fees & Financial Help page</a> for information about fees & financial help. </p>

      <iframe class="airtable-embed" src="https://airtable.com/embed/shr2HJ3HUJx6PB35b?backgroundColor=cyan" frameborder="0" onmousewheel="" width="100%" height="1210" style="background: transparent; border: 1px solid #ccc;"></iframe>
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
