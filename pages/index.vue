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
          <v-card flat tile hover raised>
            <v-img :src="require('@/assets/img/features/1.jpg')" height="500px"></v-img>
          </v-card>
        </v-flex>
        <v-flex lg8>
          <v-layout row wrap>
            <v-flex d-flex>
              <v-card flat tile hover raised>
                <v-img :src="require('@/assets/img/features/2.jpg')" height="250px"></v-img>
              </v-card>
            </v-flex>
            <v-flex d-flex>
              <v-card flat tile hover raised>
                <v-img :src="require('@/assets/img/features/3.jpg')" height="250px"></v-img>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex d-flex>
              <v-card flat tile hover raised>
                <v-img :src="require('@/assets/img/features/4.jpg')" height="250px"></v-img>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
