export const state = () => ({
  camps: [
    {
      slug: 'young-adults-retreat',
      title: 'Young Adults Weekend',
      dates: 'June 5 - June 7',
      description: 'Come join with other young adults for an amazing weekend to kick off our camping season!',
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
      description: `An awesome time for students! You won't want to miss it!`,
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
      dates: 'July 14 - 20',
      description: `For kids! A great first-time camping experience!`,
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
      description: `Yoooooouth Caaaaaamp! Be there!`,
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
      description: `First kids camp of the season. Bring your friends!`,
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
      description: `For the sporty kids! 3-2-1 Break!`,
      for: 'age 9-12',
      image: require(`@/assets/img/camps/sports-camp.jpg`),
      group: 'kids',
      activeSessionId: '2746211',
      full: false
    }
  ]
})

export const mutations = {}
