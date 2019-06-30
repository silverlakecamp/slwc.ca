<template>
  <div>
    <v-img cover :src="require('@/assets/img/oneoffs/one-day-give.jpg')" style="max-height: 500px"></v-img>
    <v-container>
      <h1>One Day Give</h1>
    </v-container>
    <v-container>
      <v-layout row wrap>
        <p>We will not be taking up offerings during our evening worship times at Family Camp. Instead we will be focusing on <strong>Thursday, our ONE DAY GIVE</strong> as a chance to raise much needed funds for the ministry here at Silver Lake.</p>

        <p>As you know our camp is over 60 years old now and many of our buildings and much of our infrastructure is in need of improvements and upgrades. We have done amazing things here over the years on a very limited budget and have done our best to keep the cost of camp as low as we can so that as many people as possible can experience the love of Jesus here through camping ministry.</p>

        <p>But it takes money to improve a camp. So to keep ministry happening here for the next 60 years we are going to have our <strong>ONE DAY GIVE on Thursday July 11 at Family Camp</strong> as a chance for us all to give what we can so that God can be glorified in this place and we can continue to serve Jesus through camping ministry for the coming decades.
        </p>

        <p>If you are unable to attend Family Camp we will be taking donations right here on this page. Click below to donate. Please pray and consider donating what you can to SLWC so that future generations can be blessed, as many of us have been, through the ministry here at Silver Lake Wesleyan Camp.</p>

        <form action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_blank">
          <input type="hidden" name="cmd" value="_s-xclick">
          <input type="hidden" name="hosted_button_id" value="2HLDPEAVNQDGC">
          <v-btn type="submit" color="success" large>
            Give Generously
          </v-btn>
        </form>
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
