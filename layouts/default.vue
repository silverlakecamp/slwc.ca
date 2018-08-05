<style lang="stylus">
  .application
    font-family 'Raleway', sans-serif

  #back-to-homepage
    img
      margin-right 10px
    .loon
      vertical-align bottom
      max-width 40px
    .text-logo
      max-width 140px

  #app-footer
    background-color #9E9E9E
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
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <footer id="app-footer">
      <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs4>
            <span>&copy; 2017 Silver Lake Wesleyan Camp</span>
          </v-flex>
          <v-flex xs8>

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
        drawer: false,
        items: [
          { icon: 'beach_access', title: 'Camps', to: '/camps' },
          { icon: 'event', title: 'Events', to: '/events' },
          { icon: 'book', title: 'Rentals', to: '/rentals' },
          { icon: 'attach_money', title: 'Giving', to: '/giving' }
        ],
        miniVariant: false,
        right: true,
        title: 'Silver Lake Wesleyan Camp'
      }
    }
  }
</script>
