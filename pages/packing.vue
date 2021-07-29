<template>
  <div>
    <v-container>
      <h1>Camp Packing Lists</h1>
    </v-container>
    <v-container>
      <v-layout row wrap>
        <v-flex md12>
          <h2>Overnight Camps</h2>
          <p>The following list is for campers who are staying overnight. Camps typically run from Sunday at 4pm to the following Saturday at 10am.</p>
          <iframe class="airtable-embed" src="https://airtable.com/embed/shrPDJcrGdMhyk4Dl?backgroundColor=yellow" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>

          <br>
          <br>
          <br>

          <h2>Day Camps</h2>
          <p>The following list is for campers who are only here for the day. Day campers arrive at 9am and depart at 5pm each day.</p>

          <iframe class="airtable-embed" src="https://airtable.com/embed/shrs3A8GANqO2puuK?backgroundColor=yellow" frameborder="0" onmousewheel="" width="100%" height="533" style="background: transparent; border: 1px solid #ccc;"></iframe>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
