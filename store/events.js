export const state = () => ({
  events: [
    {
      title: 'Bikers for Christ - Rally for the Son',
      description: `Love motorcycles? This event is for you! Two days at SLWC with rides, special guest speakers, good food and more!`,
      dates: 'TBD - 2020',
      times: '9:00am to 5:00pm',
      image: require(`@/assets/img/events/rally-for-the-son.jpg`),
      schedule: null,
      activities: null,
      meta: [
        'Bikers for Christ',
        // 'International Elder',
        // 'Joey Beldon Collins "Chief"'
      ],
      externalContacts: [
        'Don McGlashing',
        'seobikersforchrist@hotmail.com',
        '613-922-7071'
      ],
      // externalMediaUrl: '/events/2019-rally-for-the-son-poster.pdf',
      externalMediaUrl: null,
      requiresRegistration: false,
      emailForInfo: true,
      emailForInfoUrl: 'mailto:office@slwc.ca?subject=Biker%20Rally%20Info',
      registrationUrl: 'https://campscui.active.com/orgs/SilverLakeWesleyanCamp#/selectSessions/2607807'
    },
    {
      title: 'Family Day at the Lake',
      description: `Spend a day in the beautiful scenery of frozen Silver Lake with family and friends. There is something for everyone.`,
      dates: 'Monday, February 17th - 2020',
      times: '9:00am to 5:00pm',
      image: require(`@/assets/img/events/family-day-2020.jpg`),
      schedule: [
        'Lunch - 11:00am to 2:00pm'
      ],
      activities: [
        'Wagon Rides',
        'Dog Sleds',
        'Sledding*',
        'Ice Hockey*',
        'Maple Taffy Pull',
        'Axe Throwing',
        'Skating*',
        'Ice Fishing*',
        'Great Food'
      ],
      meta: [
        'Cost: $12/person or $39/family',
        '*bring your own equipment'
      ],
      requiresRegistration: true,
      registrationUrl: 'https://www.eventbrite.ca/e/family-day-2020-tickets-85106282181'
    },
    {
      title: 'Spring Work Bee',
      description: `You are welcome to come for an afternoon, a day, or the whole week. There is lots to do! All generations and skill sets are encouraged to join us! Acommodations and meals are provided if you would like to stay overnight or for multiple days. It's a great time to get to know some others in the community and spend some time early in the season up at the Lake!`,
      dates: 'TBA',
      times: '9:00AM to 5:00PM',
      image: require(`@/assets/img/events/work-bee.jpg`),
      schedule: [
        'Workin\' - Dawn \'til Dusk!'
      ],
      activities: [
        'Raking / Shoveling',
        'Gardening',
        'Carpentry',
        'Cleaning',
        'Painting',
        'Landscaping',
        'Garbage Disposal'
      ],
      meta: '',
      requiresRegistration: false
    }
  ]
})

export const mutations = {}
