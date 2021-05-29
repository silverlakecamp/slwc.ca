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

      <p>Registration is currently OPEN for all our summer camps. We are grateful that Ontario will be opening overnight camps this summer.</p>

      <p>We have added a new option to all of our kids camps as well as Family Camp. Due to the popularity of our Day Camps last summer we are delighted to offer those as an option for all of our kids camps (Family Camp, Jr. Kids, Kids I & II and Sports). You can register for these or any of our camps by clicking on the buttons below..
      </p>

      <p>Please find below the list of all our 2021 Camps.</p>

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
