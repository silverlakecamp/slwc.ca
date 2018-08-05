<template>
  <div>
    <v-jumbotron>
      <v-container fill-height>
        <v-layout>
          <v-flex text-xs-center>
            <img style="max-height: 360px" src="~/assets/img/slwc_logo_color.png" alt="Silver Lake Wesleyan Camp Logo">
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
    <v-container>
      <h3>This is the <em>Home</em> page</h3>
    </v-container>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex
          v-for="n in 9"
          :key="n"
          xs4
        >
          <v-card flat tile>
            <v-card-media
              :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
              height="150px"
            ></v-card-media>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
