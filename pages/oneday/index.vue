<template>
  <div>
    <v-img cover :src="require('@/assets/img/oneoffs/one-day-give-landing-2020.jpg')"></v-img>
    <v-container>
      <h1>One Day Give : Thursday, July 23, 2020</h1>
    </v-container>
    <v-container>
      <v-layout row wrap>
        <p>With our overnight camps closed and our summer rentals all cancelled it’s been a huge surprise to see that our giving hasn’t dropped off. In fact, some weeks our giving has actually gone up from last year at the same time. It is through this generosity and the financial assistance we’ve received from the Federal Government that we are in a position to even attempt to hold Day Camps this summer. We continue to be blown away by our amazing donors who support this place and our mission of sharing the love of Jesus with as many as possible through camp ministry.</p>

        <p>It is with grateful hearts for all our donors and with an eye to a future and dreams of future summers where overnight camps are permitted that we turn our attention to <strong>ONE DAY GIVE 2020</strong>. Our ONE DAY GIVE was started last summer during Family Camp as a way to raise, much needed, funds to improve SLWC’s infrastructure and facilities. Our goal was to take our Family Camp offerings and move them outside of the camp to include people who want to support us but aren’t here. We did this by promoting ONE DAY GIVE on our social media accounts, website and through email. It was wonderful to see donations come in from all over the country and around North America. Silver Lake’s influence reaches far and wide as people who have experienced the love of Jesus here at camp have gone on to influence others all over the world.</p>

        <p>
          Last year we had our largest single day amount raised at a little over $42,000. We have a few projects in mind for that money and are excited to announce that we were able to start them all. Our camp docks are nearly complete with 4 of the 6 slips ready for use. The roof on the Beachside Cottage (home of our Executive Director) was put on in the fall last year and is functioning very well. We were able to order new commercial camp laundry machines and they will arrive and be installed in the next few weeks. We are so grateful to all who donated to ONE DAY GIVE last summer as to allow these new improvements to happen; they will all help to make this place better and continue to allow us to share the love of Jesus with as many as possible through camp ministry.
        </p>

        <p>
          This brings us to our ONE DAY GIVE 2020. We don’t have a dollar amount goal in mind but we would love to see us match or exceed last year’s amount. With the pandemic having an effect on the economy and many facing financial hardships as a result we understand that this may effect our ONE DAY GIVE as well. We also believe that God continues to have a plan for this place. We believe that God is NOT done with Silver Lake and is just getting started in how He wants to share the love of Jesus through us. It is with that in mind that we would ask you to consider what you are able to donate to Silver Lake Wesleyan Camp during our ONE DAY GIVE 2020 on <strong>Thursday July 23, 2020</strong>.
        </p>

        <p>
          Since we aren’t able to meet in person ONE DAY GIVE 2020 will take place completely online. We will be sharing from now until that day "Silver Lake to Me" stories of individuals and families who’s lives have been changed by God through this place. We will be holding a virtual service on the evening of July 23 with worship, a speaker, some fun surprises and a chance to chat together in the comments as we are together while we continue to be apart. You’ll hear more about our service plans as we come closer to the date, but for now mark your calendar for Thursday July 23rd at 7PM to join us on Facebook and YouTube LIVE, and follow us on our social accounts for our "Silver Lake to Me" stories.
        </p>

        <p>
          You can give anytime to Silver Lake at <nuxt-link to="/give">slwc.ca/give</nuxt-link>. If you’d like your donation to go towards ONE DAY GIVE, you can use the button below:
        </p>

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
