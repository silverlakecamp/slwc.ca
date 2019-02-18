export const state = () => ({
  events: [
    {
      title: 'Family Day at the Lake',
      description: `Spend a day in the beautiful scenery of frozen Silver Lake with family and friends. There is something for everyone.`,
      dates: 'Monday, February 18th - 2019',
      times: '9:00am to 5:00pm',
      image: require(`@/assets/img/events/family-day.jpg`),
      schedule: [
        'Lunch - 11:00am to 2:00pm',
        'Supper - 4:00pm'
      ],
      activities: [
        'Dog Sleds',
        'Sleigh Rides',
        'Hockey*',
        'Ice Fishing*',
        'Sledding*',
        'Snow Shoeing*',
        'Skating*',
        'Cross Country Skiing*'
      ],
      meta: '*bring your own equipment',
      requiresRegistration: true,
      registrationUrl: 'https://www.eventbrite.ca/e/family-day-2019-tickets-54995373643'
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
