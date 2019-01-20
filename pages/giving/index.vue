<template>
  <div>
    <v-container>
      <h1>Payments / Giving @ SLWC</h1>
    </v-container>
    <v-container>
      <v-layout row wrap>
        <v-flex md8>
          <p>This page contains all our donation and payment categories, currently processed via PayPal.</p>
          <h2 id="payments">Payments</h2>
          <v-container grid-list-xl>
            <v-layout column wrap>
              <v-flex v-for="(payment, i) in payments" :key="i">
                <v-card>
                  <v-card-title primary-title>
                    <h3 class="headline mb-0">
                      <span v-text="payment.title" />
                    </h3>
                  </v-card-title>
                  <v-card-text>
                    <p v-html="payment.description" />
                  </v-card-text>
                  <v-card-actions>
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                      <input type="hidden" name="cmd" value="_s-xclick">
                      <input type="hidden" name="hosted_button_id" :value="payment.paypal_form_id">
                      <v-btn type="submit" flat color="green">Make a Payment</v-btn>
                    </form>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
          <h2 id="giving">Giving</h2>
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
      }
    }
  }
</script>
