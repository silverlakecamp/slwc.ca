export const state = () => ({
  camps: [
    {
      slug: 'young-adults-retreat',
      title: 'Young Adults Weekend',
      dates: 'June 5 - June 7',
      description: 'Come together to celebrate Christ working in your life with a community of Kingdom people. This event is a laid back time to have fun and grow in your faith while enjoying the beauty of Silver Lake. A great weekend to spend at the lake growing in your relationship with Jesus and making some new friends.',
      for: 'age 18-28',
      image: require(`@/assets/img/camps/young-adults.jpg`),
      group: 'young-adults',
      activeSessionId: '2741101',
      full: false
    },
    {
      slug: 'collide-weekend',
      title: 'Collide Weekend',
      dates: 'June 12 - June 14',
      description: `A great event for Middle & High School students to "Collide" together and celebrate Christ working in their day to day lives. Along with a group of your peers you’ll be inspired and encourage to grow in your walk with Jesus while having fun and enjoying the beauty of Silver Lake. A great way to end the school year and get a jump on summer.`,
      for: 'grade 6-12',
      image: require(`@/assets/img/camps/collide-weekend.jpg`),
      group: 'youth',
      activeSessionId: '2739605',
      full: false
    },
    // {
    //   slug: 'leaders-in-training',
    //   title: 'Leaders in Training',
    //   dates: 'July 1 - 20',
    //   description: `For those who want to help in a leadership capacity during the summer of camping.`,
    //   for: 'age 14+',
    //   image: require(`@/assets/img/camps/leaders-in-training.jpg`),
    //   group: 'leadership',
    //   activeSessionId: '2542412',
    //   full: false
    // },
    {
      slug: 'family-camp',
      title: 'Family Camp',
      dates: 'July 5 - 11',
      description: `Family fun! Activities! Slides! Watersports... and lots more!`,
      for: 'all ages',
      image: require(`@/assets/img/camps/family-camp.jpg`),
      group: 'families',
      activeSessionId: null,
      full: true
    },
    {
      slug: 'junior-kids-camp',
      title: 'Junior Kids Camp',
      dates: 'July 12 - 18',
      description: `A “starter” camp for our youngest campers. For ages 7-10 this is our youngest camp of the summer. With all the fun you’d expect at camp. There will be camp fires, activities, games and all kinds of fun on the water. Junior Kids Camp is a week for our youngest campers to grow in their relationship with Jesus and meet some new friends while doing it.`,
      for: 'age 7-10',
      image: require(`@/assets/img/camps/junior-kids.jpg`),
      group: 'kids',
      activeSessionId: '2739914',
      full: false
    },
    {
      slug: 'youth-camp',
      title: 'Youth Camp',
      dates: 'July 19 - 25',
      description: `Middle & High School can be incredibly challenging. Focused on developing their relationship with Jesus - Youth Camp serves to get youth active, challenge them with new experiences and make memories and friends that last a life time. Youth Camp is a week to get away from our everyday lives, spend some time outdoors, and get to know Jesus and some new friends.`,
      for: 'grade 6-12',
      image: require(`@/assets/img/camps/youth-camp.jpg`),
      group: 'youth',
      activeSessionId: '2741809',
      full: false
    },
    {
      slug: 'kids-camp-1',
      title: 'Kids Camp 1',
      dates: 'July 26 - Aug 1',
      description: 'Kids Camp is a week of fun outdoors at the lake. For ages 9-12 this is a week for campers to grow in their relationship with Jesus, make some new friends, have fun and get outside. With all the usual camp activities like archery, canoeing, tubing and so much more your youngster is going to have the best week of their summer at Kids Camp.',
      for: 'age 9-12',
      image: require(`@/assets/img/camps/kids-camp-1.jpg`),
      group: 'kids',
      activeSessionId: '2739116',
      full: false
    },
    {
      slug: 'geezer-camp',
      title: 'Geezer Camp',
      dates: 'August 3 - 7',
      description: `For the young at heart! Bring your funnest self!`,
      for: 'age 60+',
      image: require('@/assets/img/camps/geezer-camp.jpg'),
      group: 'families',
      activeSessionId: null,
      full: true
    },
    {
      slug: 'kids-camp-2',
      title: 'Kids Camp 2',
      dates: 'August 9 - 15',
      description: `If you didn't have enough fun in the first kids camp, come on out for round two!`,
      for: 'age 9-12',
      image: require(`@/assets/img/camps/kids-camp-2.jpg`),
      group: 'kids',
      activeSessionId: '2747304',
      full: false
    },
    {
      slug: 'sports-camp',
      title: 'Sports Camp',
      dates: 'August 16 - 22',
      description: `Sports Camp is for those who enjoy sports and just want to have some fun playing them! Of course, some time is spent doing other essential camp activities like archery, tubing and canoeing, but the focus is on sports! Our goal at Sports Camp is for campers to grow in their relationship with Jesus while having some fun at camp and playing lots of sports. You don’t have to be a super athlete to enjoy Sports Camp - you just have to love sports`,
      for: 'age 9-12',
      image: require(`@/assets/img/camps/sports-camp.jpg`),
      group: 'kids',
      activeSessionId: '2746211',
      full: false
    }
  ]
})

export const mutations = {}
