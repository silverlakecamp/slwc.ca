<template>
  <div>
    <v-carousel height="500px" hide-delimiters>
      <v-carousel-item
        v-for="(item,i) in carousel_items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <v-container fluid>
      <h1><span v-text="currentYear" /> Day Camps</h1>
      <p>SLWC is pleased to be able to offer DAY CAMPS throughout the summer.  There is no limit to the number of sessions you can sign your kids up for.</p>

      <p>Please note: For those who do not live close to the camp, full family packages including day camp, motel rental and meals are available. Please contact the office for all the details and availability.</p>

      <v-container>
        <v-data-table
            :headers="headers"
            :items="camps"
            class="elevation-1"
            hide-actions
          >
            <template v-slot:items="props">
              <td>
                {{ props.item.day }}
              </td>
              <td>
                <v-btn large color="green" :href="emailRegistrationLinkFor('Day Camp', props.item.day)">
                  Email to Register
                </v-btn>
              </td>
              <td>{{ props.item.weekend }}</td>
              <td>
                <v-btn v-if="props.item.available" large color="green" :href="emailRegistrationLinkFor('Weekend Camp', props.item.weekend)">
                  Email to Register
                </v-btn>
                <b v-if="!props.item.available">
                  NOT AVAILABLE
                </b>
              </td>
            </template>
        </v-data-table>
      </v-container>

      <h2>What ages can attend DAY CAMP?</h2>

      <p>Camps will be provided for AGES 4-17 broken up into 4 age groups. Note: Without knowing exact numbers registered, the age ranges in each group may need to flex to accommodate the maximum number of children per group.</p>


      <h2>What activities will be included at DAY CAMP?</h2>

      <ul>
        <li>Water sports – including canoeing, tubing, and swimming</li>
        <li>Outside activities – such as scavenger hunts, hikes, archery and more</li>
        <li>Inside activities – such as crafts, bible lesson and more</li>
        <li>Lunch, snack, and tuck time</li>
      </ul>
      <br>

      <h2>How will safe physical distancing be achieved?</h2>

      <p>Camp "cohorts" (think cabins) will be limited to 10 persons, including leaders and will stay together for the 2- or 3-day camp. They won't be physically interacting with other cohorts.</p>

      <p>We are limited to 6 Cohorts per session, so that’s a total of 54 campers per session.</p>

      <p>We WILL be following all Ontario Health guidelines regarding Covid-19 (daily temp check, 2-meter distancing, wearing masks when you can't distance, cleaning procedures etc).
      </p>


      <h2>What time will DAY CAMP run?</h2>

      <p>Camps will run 9AM-5PM and include lunch for all campers.</p>


      <h2>What is the cost of DAY CAMP?</h2>

      <p>Cost per day is $25 and you must register for the entire 3-day or 2-day session.</p>


      <h2>Who will attend DAY CAMP?</h2>

      <p>Children from the surrounding communities of Silver Lake, Maberly, Perth, Sharbot Lake etc Children who have families staying on the grounds of SLWC including rentals of our motel, cabin, trailer or tent area rentals as well as our seasonal leaseholders</p>


      <h2>What should my children bring to DAY CAMP?</h2>

      <ul>
        <li>Bible</li>
        <li>Water Bottle</li>
        <li>Sunscreen</li>
        <li>Modest swimsuit</li>
        <li>Towel</li>
        <li>Sneakers</li>
        <li>Hat</li>
        <li>Reusable Spoon (for lunch)</li>
      </ul>

      <br>
      <h2>What special instructions are in place due to COVID?</h2>

      <p>No child with any COVID symptoms will be admitted to camp. We will be taking temperatures upon arrival and asking questions regarding symptoms. Final decision on admittance to the program will be the decision of our camp director in consultation with our camp nurse. If your child is not feeling well, they must remain at home.</p>

      <p>Children will be instructed in fun ways on how to maintain their distance from other children and wash their hands frequently. Any reminders will be done gently and age appropriately.</p>

      <p>Parents dropping children off will NOT be permitted in the same area as our day campers. This includes off-site parents as well as those who are onsite, renting our facilities and our seasonal leaseholders. The health unit requires detailed contact tracing records so your compliance makes our job easier to do.</p>

      <p>Lunch will be done “take out” style, away from other cohorts. We are asking parents to please supply a reusable water bottle and a spoon.</p>

      <p>We thank you for your patience as we put this new camp format together. There is a lot of work going on to get this ready and planned as we have taken a drastic turn from our planned summer.</p>

      <p>Please note that we are following the directives from our governing officials and we are asking for understanding and flexibility in the event of procedural changes. The health and safety of our campers and staff will remain our top priority.</p>

      <p>Our prayer is that God continues to use this place to bless as many people as possible through camp ministry.</p>

      <p>We will continue to follow our mandate of sharing God’s love…this summer it will simply be from 2 meters apart.</p>

    </v-container>
  </div>
</template>

<script>
  export default {
    methods: {
      emailRegistrationLinkFor: function(campType, campDates) {
        const formattedCampType = `${campType.split(' ').join('%20')}`
        const formattedCampDates = `${campDates.split(' ').join('%20')}`
        const emailSubject = `Registration:${formattedCampDates}:${formattedCampType}`
        return `mailto:office@slwc.ca?subject=${emailSubject}`
      }
    },
    data () {
      return {
        carousel_items: Array.from(Array(5).keys()).map(i => {
          return {src: require(`@/assets/img/camps/carousel/2020/${i+1}.jpg`)}
        }),
        headers: [
          {
            text: 'Day Camp Dates',
            value: 'day'
          },
          {
            text: 'Registration'
          },
          {
            text: 'Weekend Camp Dates',
            value: 'weekend'
          },
          {
            text: 'Registration'
          }
        ],
        camps: [
          { day: 'July 7-9', weekend: 'July 11-12', available: true},
          { day: 'July 14-16', weekend: 'July 18-19', available: false},
          { day: 'July 21-23', weekend: 'July 25-36', available: true},
          { day: 'July 28-30', weekend: 'August 1-2', available: true},
          { day: 'August 4-6', weekend: 'August 8-9', available: true},
          { day: 'August 11-13', weekend: 'August 15-16', available: true},
          { day: 'August 18-20', weekend: 'CLOSED', available: false},
        ]
      }
    }
  }
</script>
