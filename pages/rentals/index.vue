<template>
  <div>
    <v-container>
      <h1>Rentals</h1>
    </v-container>
    <v-container>
      <v-layout row wrap>
        <v-flex md8>
          <p>Our facility is very suited for personal and group retreats and gatherings. Churches, youth groups, leadership teams, families and other groups are welcome to rent the facility based on availability.</p>
          <h2 id="accomodations">Accomodations</h2>
          <v-container grid-list-xl>
            <v-layout column wrap>
              <v-flex v-for="(rental, i) in rentals" :key="i">
                <v-card>
                  <v-card-title primary-title>
                    <h3 class="headline mb-0">
                      <span v-text="rental.title" />
                      <span class="grey--text">
                        (<span v-text="availabilityFor(rental.count)" />)
                      </span>
                    </h3>
                  </v-card-title>
                  <v-carousel :cycle="false" v-if="rental.images" height="300px" hide-delimiters>
                    <v-carousel-item
                      v-for="(item,i) in rental.images"
                      :key="i"
                      :src="item.src"
                    ></v-carousel-item>
                  </v-carousel>
                  <v-card-text>
                    <p v-text="rental.description" />
                    <h4>Amenities</h4>
                    <ul>
                      <li v-for="(amenity, i) in rental.amenities" :key="i">
                        <span v-text="amenity" />
                      </li>
                    </ul>
                    <br>
                    <h4 v-if="rental.fee_data">Fees</h4>
                    <v-data-table
                      v-if="rental.fee_data"
                      :headers="rental.fee_data.headers"
                      :items="rental.fee_data.fees"
                      hide-actions
                    >
                      <template slot="items" slot-scope="props">
                        <td>${{props.item.daily}}</td>
                        <td>${{props.item.weekly}}</td>
                        <td>${{props.item.monthly}}</td>
                        <td>${{props.item.seasonal}}</td>
                        <td>${{props.item.annual}}</td>
                      </template>
                    </v-data-table>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
          <br>
          <h2 id="rates">Meals & Lodging Rates</h2>
          <br>
          <p>If you are not part of an organized camp or event, and simply want to come to spend a night at the camp or enjoy a meal in the dining hall, the following rates apply.</p>
          <v-alert
            :value="true"
            color="info"
            icon="info"
            outline
            class="black--text"
          >
            <b>Dining Hall</b> services are available to the general public from mid-May to mid-October
          </v-alert>
          <br>
          <h2 id="group-rates">Group Rates</h2>
          <br>
          <p>2019 Pricing Coming Soon</p>
          <v-alert
            :value="true"
            color="info"
            icon="info"
            outline
            class="black--text"
          >
            <b>Student Retreat Group Fees</b> apply only to student groups, not an individual student within a family or other non-student groups.
          </v-alert>
          <v-alert
            :value="true"
            color="info"
            icon="info"
            outline
            class="black--text"
          >
            <b>Gluten/Dairy Free</b> preference meals are available upon request for an additional cost. Advanced notice is required, contact the office for more details. We are very cautious, and will consider each request, but for the safety of all involved we may have to decline a certain food request when we are not 100% certain we can accommodate (for example, Coeliac disease).
          </v-alert>
        </v-flex>
        <v-flex md3 offset-lg1 order-xs1>
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
                  <a href="/files/rental-policy.pdf">Rental Policy</a>
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="gray">picture_as_pdf</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  <a href="/files/campground-map.pdf">Facility Map</a>
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
          <br>
          <v-list class="elevation-5">
            <v-subheader>Rate Information</v-subheader>
            <v-divider inset></v-divider>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="gray">keyboard_arrow_down</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  <a href="#rates">Meal & Lodging Rates</a>
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-action>
                <v-icon color="gray">keyboard_arrow_down</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  <a href="#group-rates">Group Rates</a>
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
    components: {
      CampContactCard
    },
    methods: {
      availabilityFor: function(count) {
        return typeof count === 'number' ? `${count} Available` : 'Call for Availability';
      }
    },
    data () {
      return {
        rentals: this.$store.state.rentals.rentals
      }
    }
  }
</script>
