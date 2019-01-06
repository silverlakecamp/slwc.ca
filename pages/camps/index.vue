<template>
  <div>
    <v-carousel height="300px" hide-delimiters>
      <v-carousel-item
        v-for="(item,i) in carousel_items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <v-container>
      <h1><span v-text="currentYear" /> Camps</h1>
    </v-container>
    <v-container grid-list-xl>
      <v-layout row wrap justify-space-between>
        <v-flex v-for="(camp, i) in camps" :key="i">
          <v-card>
            <v-img height="200px" :src="camp.image" />
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0" v-text="camp.title" />
                <span class="grey--text" v-text="camp.dates" />
                <div v-text="camp.description" />
              </div>
            </v-card-title>

           <v-card-actions>
             <v-btn flat large color="green">Register!</v-btn>
           </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        carousel_items: Array.from(Array(6).keys()).map(i => {
          return {src: require(`@/assets/img/features/${i+1}.jpg`)}
        }),
        camps: [
          {
            title: 'Young Adults Retreat',
            dates: 'May 31 - June 2',
            description: 'Come join with other young adults for an amazing weekend to kick off our camping season!',
            for: 'ages 18-28',
            image: require(`@/assets/img/camps/young-adults.jpg`)
          },
          {
            title: 'Collide Weekend',
            dates: 'June 7 - 9',
            description: `An awesome time for students! You won't want to miss it!`,
            for: 'grades 6-12',
            image: require(`@/assets/img/camps/collide-weekend.jpg`)
          },
          {
            title: 'Leaders in Training',
            dates: 'July 1 - 20',
            description: `For those who want to help in a leadership capacity during the summer of camping.`,
            for: 'age 14+, limited spots',
            image: require(`@/assets/img/camps/leaders-in-training.jpg`)
          },
          {
            title: 'Family Camp',
            dates: 'July 7 - 13',
            description: `Family fun! Activities! Slides! Watersports... and lots more!`,
            for: 'all ages',
            image: require(`@/assets/img/camps/family-camp.jpg`)
          },
          {
            title: 'Junior Kids Camp',
            dates: 'July 14 - 20',
            description: `For kids! A great first-time camping experience!`,
            for: 'ages 7-10',
            image: require(`@/assets/img/camps/junior-kids.jpg`)
          },
          {
            title: 'Youth Camp',
            dates: 'July 21 - 27',
            description: `Yoooooouth Caaaaaamp! Be there!`,
            for: 'grades 6-12',
            image: require(`@/assets/img/camps/youth-camp.jpg`)
          },
          {
            title: 'Kids Camp 1',
            dates: 'July 28 - Aug 3',
            description: `First kids camp of the season. Bring your friends!`,
            for: 'ages 9-12',
            image: require(`@/assets/img/camps/kids-camp-1.jpg`)
          },
          {
            title: 'Geezer Camp',
            dates: 'Aug 5 - 9',
            description: `For the young at heart! Bring your funnest self!`,
            for: 'age 60+',
            image: require('@/assets/img/camps/geezer-camp.jpg')
          },
          {
            title: 'Kids Camp 2',
            dates: 'Aug 11 - 17',
            description: `If you didn't have enough fun in the first kids camp, come on out for round two!`,
            for: 'ages 9-12',
            image: require(`@/assets/img/camps/kids-camp-2.jpg`)
          },
          {
            title: 'Sports Camp',
            dates: 'Aug 18 - 24',
            description: `For the sporty kids! 3-2-1 Break!`,
            for: 'ages 9-12',
            image: require(`@/assets/img/camps/sports-camp.jpg`)
          }
        ]
      }
    }
  }
</script>
