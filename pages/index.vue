<style>
  .mb-10 {
    margin-bottom: 10px;
  }

  .bg-video video {
    object-fit: cover;
    width: 100%;
  }

  .bg-video .overlay {
    position: absolute;
    right: 0;
    left: 0;
    margin: auto;
    top: 25px;
    filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.5));
  }

  .image-overlay {
    position: relative;
  }

  .image-overlay:hover .image-overlay-text {
    background: rgb(0,0,0);
    background: rgba(0,0,0,0.7);
    transition: 1s ease-out;
  }

  .image-overlay:hover .v-image__image {
    filter: grayscale(100%);
    transition: 1s ease-out;
  }

  .image-overlay .image-overlay-text {
    position: absolute;
    width: 100%;
    bottom: 10px;
    text-align: right;
    font-size: 3rem;
    font-weight: bolder;
    text-transform: uppercase;
    z-index: 1;
    background-color: transparent;
  }

  .image-overlay .image-overlay-text span {
    text-shadow: 2px 4px 3px rgba(0,0,0,0.3);
    padding: 10px;
    padding-right: 20px;
    color: white;
  }
</style>

<template>
  <div>
    <v-responsive max-height="400px" class="bg-video mb-10" :aspect-ratio="16/9">
      <v-img
        class="overlay"
        contain
        height="85%"
        :src="require('@/assets/img/slwc_alt_logo_white.png')" alt="Silver Lake Wesleyan Camp Logo" />
      <video loop autoplay muted>
        <source src="/video/index-bg.mp4" type="video/mp4" />
      </video>
    </v-responsive>
    <v-container fluid pa-0 mb-10>
      <v-layout row wrap>
        <v-flex xs12 lg4>
          <nuxt-link to="/camps">
            <v-card class="image-overlay" flat tile hover raised>
              <h2 class="image-overlay-text">
                <span>Camps</span>
              </h2>
              <v-img cover :src="require('@/assets/img/features/2020/1.jpg')" :height="$vuetify.breakpoint.smAndDown ? '250px' : '500px'"></v-img>
            </v-card>
          </nuxt-link>
        </v-flex>
        <v-flex xs12 lg8>
          <v-layout row wrap>
            <v-flex xs12 md6>
              <nuxt-link to="/events">
                <v-card class="image-overlay" flat tile hover raised>
                  <h2 class="image-overlay-text">
                    <span>Events</span>
                  </h2>
                  <v-img cover :src="require('@/assets/img/features/8.jpg')" height="250px"></v-img>
                </v-card>
              </nuxt-link>
            </v-flex>
            <v-flex xs12 md6>
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
          <v-layout row wrap>
            <v-flex xs12>
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
