<style lang="stylus">
  .bg-video
    video
      object-fit cover
      width 100%
    .overlay
      position absolute
      right 0
      left 0
      margin auto
      top 25px

  .image-overlay
    position relative
    &:hover
      .image-overlay-text
        opacity 1
        transition: 1s ease-out
      .v-image__image
        filter sepia(100%)
        transition: 1s ease-out
    .image-overlay-text
      opacity 0
      position absolute
      bottom 20%
      font-size 3rem
      z-index 1
      background-color transparent
      span
        padding 10px
        padding-right 20px
        color white
        background rgb(0,0,0)
        background rgba(0,0,0,0.7)

</style>

<template>
  <div>
    <v-responsive max-height="400px" class="bg-video" :aspect-ratio="16/9">
      <v-img
        class="overlay"
        contain
        height="85%"
        :src="require('@/assets/img/slwc_alt_logo_white.png')" alt="Silver Lake Wesleyan Camp Logo" />
      <video loop autoplay muted>
        <source :src="require('@/assets/video/index-bg.mp4')" />
      </video>
    </v-responsive>
    <v-container fluid pa-0>
      <v-layout row wrap>
        <v-flex lg4>
          <nuxt-link to="/camps">
            <v-card class="image-overlay" flat tile hover raised>
              <h2 class="image-overlay-text">
                <span>Camps</span>
              </h2>
              <v-img :src="require('@/assets/img/features/1.jpg')" height="500px"></v-img>
            </v-card>
          </nuxt-link>
        </v-flex>
        <v-flex lg8>
          <v-layout row wrap>
            <v-flex d-flex>
              <nuxt-link to="/events">
                <v-card class="image-overlay" flat tile hover raised>
                  <h2 class="image-overlay-text">
                    <span>Events</span>
                  </h2>
                  <v-img :src="require('@/assets/img/features/2.jpg')" height="250px"></v-img>
                </v-card>
              </nuxt-link>
            </v-flex>
            <v-flex d-flex>
              <nuxt-link to="/giving">
                <v-card class="image-overlay" flat tile hover raised>
                  <h2 class="image-overlay-text">
                    <span>Giving</span>
                  </h2>
                  <v-img :src="require('@/assets/img/features/3.jpg')" height="250px"></v-img>
                </v-card>
              </nuxt-link>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex d-flex>
              <nuxt-link to="/rentals">
                <v-card class="image-overlay" flat tile hover raised>
                  <h2 class="image-overlay-text">
                    <span>Rentals</span>
                  </h2>
                  <v-img :src="require('@/assets/img/features/4.jpg')" height="250px"></v-img>
                </v-card>
              </nuxt-link>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
