<style lang="stylus">
.application
  font-family 'Raleway', sans-serif
  h1
    font-family 'Arvo', sans-serif
    font-weight bold
  h2, h3, h4, h5, h6
    font-family 'Montserrat', sans-serif
    font-weight bold

.loon
  vertical-align bottom
  max-width 40px
  margin-right 10px

.text-logo
  max-width 140px

.white-loon
  max-width 100%
  max-height 80px

#app-header
  a
    color darken(#B0C954, 60%)

#app-header, #app-footer
  a
    text-decoration none
    .meta
      color darken(#777776, 60%)
      &:before
        content: " | "

#app-footer
  a
    color #F1F2F2
  background-color #777776
  color white

.theme--light.v-toolbar
  background-color #b0c954
</style>

<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" right temporary app>
            <v-list>
                <v-list-tile nuxt :to="item.to" :key="i" v-for="(item, i) in items" exact>
                    <v-list-tile-action>
                        <v-icon v-html="item.icon"></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar dense fixed app primary id="app-header">
            <nuxt-link to="/" id="back-to-homepage">
                <img class="loon" src="~/assets/img/slwc_icon_black.png" alt="logo" />
                <img class="text-logo" src="~/assets/img/slwc_text_black.png" :alt="title" />
            </nuxt-link>
            <v-toolbar-title v-text="title" hidden />
            <v-spacer></v-spacer>
            <v-flex text-xs-center style="margin-left: -10%" class="hidden-sm-and-down">
                <a href="mailto:info@slwc.ca">info@slwc.ca</a>
                |
                <a href="tel:+18775112267">1-877-511-2267</a>
            </v-flex>
            <v-spacer></v-spacer>
            <v-toolbar-side-icon @click="drawer = !drawer" />
        </v-toolbar>
        <v-content>
            <v-container fluid pa-0>
                <nuxt />
            </v-container>
        </v-content>
        <footer id="app-footer">
            <v-container grid-list-xl>
                <v-layout row wrap>
                    <v-flex lg2>
                        <img class="white-loon" src="~/assets/img/slwc_alt_icon_white.png" :alt="title" />

                        <div class="vcard">
                            <div class="org">Silver Lake Wesleyan Camp</div>
                            <div class="adr">
                                <div class="street-address">512 Wesleyan Camp Lane</div>
                                <span class="locality">Maberly</span>, <span class="region">ON</span>,
                                <span class="country-name">Canada</span>
                                <br />
                                <span class="postal-code">K0H 2B0</span>
                            </div>
                            <div class="tel">
                                <a href="tel:+18775112267">1-877-511-2267</a>
                            </div>
                            <a class="email" href="mailto:info@slwc.ca">info@slwc.ca</a>
                        </div>

                        <div class="about">
                            <br />
                            <h3>Quick Links</h3>
                            <a href="/about">About SLWC</a>
                            <br />
                            <a href="/history">History</a>
                            <br />
                            <a href="/policy">Policy</a>
                            <br />
                            <a href="/newsletter">Newsletter</a>
                            <br />
                            <a href="/work-at-slwc">Work at SLWC</a>
                            <br />
                            <a
                                class="hidden-md-and-up"
                                href="https://maps.google.com/maps?ll=44.835455,-76.593231&z=14&t=m&hl=en-US&gl=CA&mapclient=embed&cid=2469503918391799052"
                                target="_blank"
                                >Directions</a
                            >
                        </div>

                        <div class="social-media">
                            <br />
                            <h3>Social Media</h3>
                            <a href="https://facebook.com/slwc.ca">Facebook</a>
                            <br />
                            <a href="https://instagram.com/silverlakewc">Instagram</a>
                            <br />
                            <a href="https://www.twitter.com/slwc_ca">Twitter</a>
                            <br />
                            <a href="https://www.youtube.com/channel/UCadYSQrkHIxECxNjoXfRv3g">YouTube</a>
                            <br />
                            <a href="https://www.vimeo.com/silverlake">Vimeo</a>
                        </div>
                    </v-flex>
                    <v-flex lg7 hidden-sm-and-down>
                        <iframe
                            style="border: 0"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11317.272312879688!2d-76.5932308!3d44.8354553!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x224570bad32dad0c!2sSilver+Lake+Wesleyan+Camp!5e0!3m2!1sen!2sca!4v1473269309127"
                            frameborder="0"
                            width="600"
                            height="450"
                        ></iframe>
                    </v-flex>
                </v-layout>
            </v-container>
        </footer>
    </v-app>
</template>

<script>
export default {
    methods: {
        campsForGroups: function (groups) {
            let camps = this.$store.state.camps.camps;
            return groups
                .map(function (group) {
                    return camps.filter(function (camp) {
                        return camp.group === group;
                    });
                })
                .flat();
        },
    },
    data() {
        return {
            year: new Date().getFullYear(),
            title: "Silver Lake Wesleyan Camp",
            drawer: false,
            items: [
                { icon: "help", title: "About SLWC", to: "/about" },
                { icon: "beach_access", title: "Camps", to: "/camps" },
                { icon: "event", title: "Events", to: "/events" },
                { icon: "book", title: "Rentals", to: "/rentals" },
                { icon: "attach_money", title: "Give", to: "/giving" },
                { icon: "attach_money", title: "Payments", to: "/payments" },
            ],
        };
    },
};
</script>
