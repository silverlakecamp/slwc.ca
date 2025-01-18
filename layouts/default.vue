<style>
.application {
  font-family: 'Raleway', sans-serif;
}

.application h1 {
  font-family: 'Arvo', sans-serif;
  font-weight: bold;
}

.application h2,
.application h3,
.application h4,
.application h5,
.application h6 {
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
}

.loon {
  vertical-align: bottom;
  max-width: 40px;
  margin-right: 10px;
}

.text-logo {
  max-width: 140px;
  display: inline-block;
  vertical-align: middle;
  line-height: 0;
}

#back-to-homepage {
  text-decoration: none;
  font-size: 0;
  display: flex;
  align-items: center;
}

.white-loon {
  max-width: 100%;
  max-height: 80px;
}

#app-header a {
  color: #4c5821;
}

#app-header a .meta,
#app-footer a .meta {
  color: #1a1a1a;
}

#app-header a .meta:before,
#app-footer a .meta:before {
  content: " | ";
}

#app-footer {
  background-color: #777776;
  color: white;
  padding: 2rem 0;
}

#app-footer a {
  color: #F1F2F2;
  text-decoration: none;
  display: inline-block;
  padding: 0.5rem 0;
}

#app-footer .vcard {
  margin: 1.5rem 0;
}

#app-footer .vcard .org {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

#app-footer h3 {
  margin: 1.5rem 0 1rem;
  font-size: 1.2rem;
}

#app-footer .about,
#app-footer .social-media {
  margin-top: 1.5rem;
}

#app-footer iframe {
  width: 100%;
  height: 100%;
  min-height: 450px;
  border-radius: 4px;
}

.mobile-map {
  display: none;
}

@media (max-width: 960px) {
  #app-footer .white-loon {
    display: none;
  }

  #app-footer .vcard,
  #app-footer .about,
  #app-footer .social-media {
    text-align: center;
  }

  #app-footer a {
    padding: 0.75rem 0;
  }

  #app-footer br {
    display: none;
  }

  #app-footer .about a,
  #app-footer .social-media a {
    display: block;
    margin: 0.25rem 0;
  }

  #app-footer .vcard .adr > *:not(:last-child):after {
    content: ", ";
  }

  #app-footer .vcard .adr br {
    display: none;
  }

  .mobile-map {
    display: block !important;
    margin: 2rem -24px -2rem -24px;
    position: relative;
    width: calc(100% + 48px);
  }

  .mobile-map iframe {
    width: 100%;
    height: 300px;
    border-radius: 0;
    border: 0;
    display: block;
  }
}

.theme--light.v-toolbar {
  background-color: #b0c954;
}
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
            <v-flex text-xs-center style="margin-left: -10%">
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
                    <v-flex xs12 md4 lg3>
                        <img class="white-loon" src="~/assets/img/slwc_alt_icon_white.png" :alt="title" />

                        <div class="vcard">
                            <div class="org">Silver Lake Wesleyan Camp</div>
                            <div class="adr">
                                <span class="street-address">512 Wesleyan Camp Lane</span>
                                <span class="locality">Maberly</span>
                                <span class="region">ON</span>
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
                            >
                                Directions
                            </a>
                        </div>

                        <div class="social-media">
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
                    <v-flex xs12 md8 lg9 class="hidden-sm-and-down">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11317.272312879688!2d-76.5932308!3d44.8354553!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x224570bad32dad0c!2sSilver+Lake+Wesleyan+Camp!5e0!3m2!1sen!2sca!4v1473269309127"
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </v-flex>
                </v-layout>
            </v-container>
            <div class="mobile-map hidden-md-and-up">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11317.272312879688!2d-76.5932308!3d44.8354553!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x224570bad32dad0c!2sSilver+Lake+Wesleyan+Camp!5e0!3m2!1sen!2sca!4v1473269309127"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
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
                { icon: "school", title: "LIT Program", to: "/lit" },
                { icon: "event", title: "Events", to: "/events" },
                { icon: "book", title: "Rentals", to: "/rentals" },
                { icon: "attach_money", title: "Give", to: "/giving" },
                { icon: "attach_money", title: "Payments", to: "/payments" },
            ],
        };
    },
};
</script>
