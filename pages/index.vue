<style lang="stylus">
  .mb-10
    margin-bottom 10px

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
        background rgb(0,0,0)
        background rgba(0,0,0,0.7)
        transition: 1s ease-out
      .v-image__image
        filter grayscale(100%)
        transition: 1s ease-out
    .image-overlay-text
      position absolute
      width 100%
      bottom 10px
      text-align right
      font-size 3rem
      font-weight bolder
      text-transform uppercase
      z-index 1
      background-color transparent
      span
        text-shadow 2px 4px 3px rgba(0,0,0,0.3)
        padding 10px
        padding-right 20px
        color white

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
    <v-container fluid pa-0 mb-10>
      <v-layout :column="$vuetify.breakpoint.smAndDown" :row="$vuetify.breakpoint.mdAndUp" wrap>
        <v-flex lg4>
          <nuxt-link to="/camps">
            <v-card class="image-overlay" flat tile hover raised>
              <h2 class="image-overlay-text">
                <span>Camps</span>
              </h2>
              <v-img cover :src="require('@/assets/img/features/1.jpg')" :height="$vuetify.breakpoint.smAndDown ? '250px' : '500px'"></v-img>
            </v-card>
          </nuxt-link>
        </v-flex>
        <v-flex lg8>
          <v-layout :column="$vuetify.breakpoint.smAndDown" :row="$vuetify.breakpoint.mdAndUp" wrap>
            <v-flex d-flex>
              <nuxt-link to="/events">
                <v-card class="image-overlay" flat tile hover raised>
                  <h2 class="image-overlay-text">
                    <span>Events</span>
                  </h2>
                  <v-img cover :src="require('@/assets/img/features/8.jpg')" height="250px"></v-img>
                </v-card>
              </nuxt-link>
            </v-flex>
            <v-flex d-flex>
              <nuxt-link to="/giving">
                <v-card class="image-overlay" flat tile hover raised>
                  <h2 class="image-overlay-text">
                    <span>Give</span>
                  </h2>
                  <v-img cover :src="require('@/assets/img/features/9.jpg')" height="250px"></v-img>
                </v-card>
              </nuxt-link>
            </v-flex>
          </v-layout>
          <v-layout :column="$vuetify.breakpoint.smAndDown" :row="$vuetify.breakpoint.mdAndUp" wrap>
            <v-flex d-flex>
              <nuxt-link to="/rentals">
                <v-card class="image-overlay" flat tile hover raised>
                  <h2 class="image-overlay-text">
                    <span>Rentals</span>
                  </h2>
                  <v-img cover :src="require('@/assets/img/features/14.jpg')" height="250px"></v-img>
                </v-card>
              </nuxt-link>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
