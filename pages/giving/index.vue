<template>
  <div>
    <v-carousel height="500px" hide-delimiters>
      <v-carousel-item
        v-for="(item,i) in carousel_items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <v-container>
      <h1>Donate</h1>
    </v-container>
    <v-container>
      <v-layout row wrap>
        <v-flex md8>
          <v-container grid-list-xl>
            <v-layout column wrap>
              <v-flex v-for="(giving, i) in giving" :key="i">
                <v-card>
                  <v-card-title primary-title>
                    <h3 class="headline mb-0">
                      <span v-text="giving.title" />
                    </h3>
                  </v-card-title>
                  <v-card-text>
                    <p v-html="giving.description" />
                  </v-card-text>
                  <v-card-actions>
                    <form v-if="giving.paypal_form_id"
                        action="https://www.paypal.com/cgi-bin/webscr"
                        method="post"
                        target="_blank"
                    >
                      <input type="hidden" name="cmd" value="_s-xclick">
                      <input type="hidden" name="hosted_button_id" :value="giving.paypal_form_id">
                      <v-btn type="submit" flat color="green">
                        Donate to&nbsp;<span v-text="giving.title" />
                      </v-btn>
                    </form>
                    <v-btn flat color="green"
                      v-if="giving.form_url"
                      :href="giving.form_url"
                      target="_new">
                      Download Auto Debit Form
                    </v-btn>
                    <v-btn flat color="green"
                      v-if="giving.static_url"
                      :href="giving.static_url"
                      target="_new">
                      Learn More about Donating Securities
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
          <br>
        </v-flex>
        <v-flex md3 offset-lg1>
          <CampContactCard />
          <br />
          <v-list class="elevation-5">
            <v-subheader>Documents</v-subheader>
            <v-divider inset></v-divider>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="gray">picture_as_pdf</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  <a href="/files/auto-debit-donation-form.pdf">Auto Debit Donation Form</a>
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import CampContactCard from '~/components/camp-contact-card.vue';
  export default {
    components: {CampContactCard},
    data () {
      return {
        giving: this.$store.state.giving.giving,
        payments: this.$store.state.giving.payments,
        carousel_items: Array.from(Array(6).keys()).map(i => {
          return {src: require(`@/assets/img/giving/carousel/${i+1}.jpg`)}
        }),
      }
    }
  }
</script>
