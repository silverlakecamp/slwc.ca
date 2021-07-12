<template>
  <div>
    <!-- <v-img cover :src="require('@/assets/img/oneoffs/one-day-give-landing-2021.jpg')"></v-img> -->
    <v-container>
      <h1>One Day Give</h1>
    </v-container>
    <v-container>
      <v-layout row wrap>
        <p>ONE DAY GIVE is an opportunity for us all to support the ministry of Silver Lake Wesleyan Camp. With the return or overnight camps this season the value of camp ministry becomes even more evident. ONE DAY GIVE started out as the offering day of our SLWC Family Camp. Rather than take up an offering in each of our services during the week of Family Camp we decided to take up one offering on the Thursday of our Family Camp week.</p>

        <p>The secondary goal of ONE DAY GIVE was to provide a chance for those not able to attend Family Camp in person to get behind and support SLWC financially. This took on a whole new meaning last summer when we moved ONE DAY GIVE fully online. Our first ONE DAY GIVE in 2019 set a record for Silver Lake as we received more donations in that single day than had been received in any full week in SLWC’s history. And last year in the midst of this global pandemic we topped the 2019 total and set a new giving record.</p>

        <p>
          Through the generosity of the people who support SLWC through ONE DAY GIVE and throughout the year we have been able to see some amazing improvements to our infrastructure and facilities at the lake. It was through ONE DAY GIVE that we were able to support the build of our new camp docks, add a commercial washer & dryer to our laundry room, repair the roof of our Beachside cottage and many more projects around the campgrounds. All these changes and improvements will continue to allow us to share the love of Jesus with as many as possible through camp ministry for many years to come.
        </p>

        <p>
          This summer we once again don’t want to set a “goal” for our ONE DAY GIVE. We simply know we want to do more. We have many hopes and dreams for this place. For the projects and improvements, we’d like to make “One Day”. ONE DAY GIVE is our chance to see some of these improvements realized. We will be sharing more about the improvements we’ve made at SLWC over the last few years because of ONE DAY GIVE and also, we’ll share our dreams of things we’d like to see happen in the future on our social media channels over the coming weeks so make sure to like and subscribe to all our channels..
        </p>

        <p>
          ONE DAY GIVE is our chance to get behind the vision of SLWC. Which is to share the love of Jesus with as many as possible through camp ministry. So, we ask that you give generously. Every dollar helps because every camper matters. Everything we do because of the generosity shown during our ONE DAY GIVE helps us pursue our vision. So please give generously. Give so that “One Day” can be sooner than we thought.
        </p>

        <p>
          You can give anytime to Silver Lake at <nuxt-link to="/give">slwc.ca/give</nuxt-link>. If you’d like your donation to go towards ONE DAY GIVE, you can use the button below:
        </p>

        <v-btn color="green"
          href="https://slwc.campbraingiving.com"
          target="_new">
          Give Generously
        </v-btn>
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
