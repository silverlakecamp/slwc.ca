<template>
  <div>
    <v-container fill-height>
      <v-layout>
        <v-flex text-xs-center>
          <img style="max-height: 360px; max-width: 100%;" src="~/assets/img/slwc_logo_color.png" alt="Silver Lake Wesleyan Camp Logo">
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid pa-0>
      <v-layout row wrap>
        <v-flex lg4>
          <v-card flat tile hover raised>
            <v-card-media :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
              height="500px"
            ></v-card-media>
          </v-card>
        </v-flex>
        <v-flex lg8>
          <v-layout row wrap>
            <v-flex d-flex>
              <v-card flat tile hover raised>
                <v-card-media :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
                  height="250px"
                ></v-card-media>
              </v-card>
            </v-flex>
            <v-flex d-flex>
              <v-card flat tile hover raised>
                <v-card-media :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
                  height="250px"
                ></v-card-media>
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex d-flex>
              <v-card flat tile hover raised>
                <v-card-media :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
                  height="250px"
                ></v-card-media>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
