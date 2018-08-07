<style lang="stylus">
  .application
    font-family 'Raleway', sans-serif

  .loon
    vertical-align bottom
    max-width 40px
    margin-right 10px

  .text-logo
    max-width 140px

  .white-loon
    max-width 100%
    max-height 80px

  #app-footer
    background-color #777776
    color white
    a
      color #F1F2F2
      text-decoration none
      .meta
        color darken(#777776, 60%)
        &:before
          content: " | "
      &:hover
        text-decoration underline
</style>

<template>
  <v-app light>
    <v-navigation-drawer v-model="drawer" right temporary app>
      <v-list>
        <v-list-tile nuxt :to="item.to" :key="i" v-for="(item, i) in items" exact>
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app primary>
      <nuxt-link to="/" id="back-to-homepage">
        <img class="loon" src="~/assets/img/slwc_icon_black.png" alt="logo" />
        <img class="text-logo" src="~/assets/img/slwc_text_black.png" :alt="title" />
      </nuxt-link>
      <v-toolbar-title v-text="title" hidden />
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click="drawer = !drawer" />
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
    <footer id="app-footer">
      <v-container grid-list-xl>
        <v-layout row wrap>
          <v-flex lg2>
            <img class="white-loon" src="~/assets/img/slwc_alt_icon_white.png" :alt="title" />

            <div class="vcard">
              <div class="org">Silver Lake Wesleyan Camp</div>
              <div class="adr">
                <div class="street-address">512 Wesleyan Camp Lane</div>
                <span class="locality">Maberly</span>, <span class="region">ON</span>, <span class="country-name">Canada</span>
                <br/>
                <span class="postal-code">K0H 2B0</span>
              </div>
              <div class="tel">
                <a href="tel:+18775112267">1-877-511-2267</a>
              </div>
              <a class="email" href="mailto:info@slwc.ca">info@slwc.ca</a>
            </div>

            <div class="about">
              <br>
              <h3>About SLWC</h3>
              <a href="/history">History</a>
              <br>
              <a href="/policy">Policy</a>
            </div>

            <div class="social-media">
              <br>
              <h3>Social Media</h3>
              <a href="//facebook.com/slwc.ca">Facebook</a>
              <br>
              <a href="//instagram.com/silverlakewc">Instagram</a>
              <br>
              <a href="//www.youtube.com/user/silverlakewc">YouTube</a>
            </div>
          </v-flex>
          <v-flex lg3>
            <div class="camps">
              <h3>Camps</h3>
              <br>
              <h4>Kids &amp; Youth</h4>
              <nuxt-link to="/camps/vbc">Vacation Bible Camp <span class="meta">age 6-12</span></nuxt-link>
              <br>
              <nuxt-link to="/camps/explorer">Explorers <span class="meta">age 7-10</span></nuxt-link>
              <br>
              <nuxt-link to="/camps/boys-and-girls">Boys &amp; Girls<span class="meta">age 9-12</span></nuxt-link>
              <br>
              <nuxt-link to="/camps/youth">Youth <span class="meta">grades 6-12</span></nuxt-link>
              <br>
              <br>
              <h4>Families</h4>
              <nuxt-link to="/camps/family">Family Camp <span class="meta">all ages</span></nuxt-link>
              <br>
              <nuxt-link to="/camps/geezers">Geezer Camp <span class="meta">ages 60+</span></nuxt-link>
              <br>
              <br>
              <h4>Leadership</h4>
              <nuxt-link to="/camps/leaders-in-training">Leaders in Training <span class="meta">age 14-16</span></nuxt-link>
              <br>
              <br>
              <h3>Events</h3>
              <br>
              <nuxt-link to="/events/collide">Collide <span class="meta">grades 6-12</span></nuxt-link>
              <br>
              <nuxt-link to="/events/young-adults-retreat">Young Adults Retreat <span class="meta">age 18-25</span></nuxt-link>
              <br>
              <nuxt-link to="/events/work-bee">Work Bee <span class="meta">all ages</span></nuxt-link>
            </div>
          </v-flex>
          <v-flex lg7>
            <iframe style="border: 0;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11317.272312879688!2d-76.5932308!3d44.8354553!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x224570bad32dad0c!2sSilver+Lake+Wesleyan+Camp!5e0!3m2!1sen!2sca!4v1473269309127" frameborder="0" width="600" height="450"></iframe>
          </v-flex>
        </v-layout>
      </v-container>
    </footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        title: 'Silver Lake Wesleyan Camp',
        drawer: false,
        items: [
          { icon: 'beach_access', title: 'Camps', to: '/camps' },
          { icon: 'event', title: 'Events', to: '/events' },
          { icon: 'book', title: 'Rentals', to: '/rentals' },
          { icon: 'attach_money', title: 'Giving', to: '/giving' }
        ]
      }
    }
  }
</script>
