<template>
  <div>
    <v-container>
      <h1>Worship @ SLWC</h1>
    </v-container>
    <v-container grid-list-xl>
      <v-layout row>
        <v-flex xs12>
          <v-card>
            <v-img
              :src="require('@/assets/img/worship/worship-order-of-service.jpg')"
              aspect-ratio="2.25"
            ></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">
                  Order of Service Template
                </h3>
                <div>
                  <p>If you are participating in or planning a service we ask that you make a copy of our order of service template , fill it out, and distribute it to worship and tech teams during your practice sessions.</p>

                  <p>(in Google Docs: select 'File > Make a Copy')</p>
                </div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-btn flat color="green" href="https://docs.google.com/document/d/1AxCImpkFK7_Ww_n7-zaF4Cnai6zPiyLSwVKPSzJzyNE/edit?usp=sharing">
                <v-icon color="gray">assignment</v-icon>
                &nbsp;
                Google Doc Template
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12>
          <v-card>
            <v-img
              :src="require('@/assets/img/worship/worship-resources-big.png')"
              aspect-ratio="2.4"
            ></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">
                  Music Resources
                </h3>
                <div>
                  <p>Many of the songs sung over the last few years are available for you to download as PDFs on our Camp Music repository.</p>

                  <p>If you require a chord chart that isn't listed, the camp has access to CCLI Song-Select. Please reach out using the link below to send an email with your requested song and key.</p>
                </div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-btn flat color="green" href="https://github.com/silverlakecamp/camp-music/tree/master/songs/pdfs">
                <v-icon color="gray">piano</v-icon>
                &nbsp;
                Camp Chord Charts
              </v-btn>
              <v-btn flat color="green" href="mailto:worship@slwc.ca?subject=Worship%20Service%20|%20Chord%20Chart%20Request">
                <v-icon color="gray">mail_outline</v-icon>
                &nbsp;
                Request a Chart
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>
  </div>
</template>