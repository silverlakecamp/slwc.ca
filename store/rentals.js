export const state = () => ({
  rentals: [
    {
      title: 'Tenting Sites',
      description: 'Brook Kidron Tenting Sites',
      count: 5,
      amenities: [
        'Water',
        'Comfort Station (Washrooms, Showers)'
      ]
    },
    {
      title: 'Trailer Sites',
      description: 'Brook Kidron Trailer Sites',
      count: 'Call',
      amenities: [
        'Water',
        'Comfort Station (Washrooms, Showers)',
        'Dumping Station',
        '15 Amp Service',
        '30\' and 32\' Trailers',
      ],
      fee_data: {
        headers: [
          { text: 'Daily', align: 'left', value: 'daily', sortable: false },
          { text: 'Weekly', align: 'left', value: 'weekly', sortable: false },
          { text: 'Monthly', align: 'left', value: 'monthly', sortable: false },
          { text: 'Seasonal', align: 'left', value: 'seasonal', sortable: false },
          { text: 'Annual', align: 'left', value: 'annual', sortable: false }
        ],
        fees: [
          { daily: 35, weekly: 200, monthly: 400, seasonal: 794, annual: 953 }
        ]
      }
    },
    {
      title: 'Cabins',
      description: 'Cedarholm Cabins',
      count: 4,
      amenities: [
        'Heat',
        'Comfort Station (Washrooms, Showers)',
        'Additional Cots (subject to availability on request)',
        'Sleeps 3x4, and 1x3'
      ],
      images: [
        { src: require(`@/assets/img/rentals/cabins/1.jpg`) },
        { src: require(`@/assets/img/rentals/cabins/2.jpg`) },
        { src: require(`@/assets/img/rentals/cabins/3.jpg`) },
        { src: require(`@/assets/img/rentals/cabins/4.jpg`) },
        { src: require(`@/assets/img/rentals/cabins/5.jpg`) },
        { src: require(`@/assets/img/rentals/cabins/6.jpg`) }
      ]
    },
    {
      title: 'Cottage',
      description: 'Hill Top Villa',
      count: 1,
      amenities: [
        'Water',
        'Heat',
        'Full Bathroom',
        'Full Kitchen (Stove, Fridge)',
        'Bedding & Towels Provided',
        'Sleeps 2, 4, and 3'
      ],
      images: [
        { src: require(`@/assets/img/rentals/hilltopvilla/1.jpg`) },
        { src: require(`@/assets/img/rentals/hilltopvilla/2.jpg`) },
        { src: require(`@/assets/img/rentals/hilltopvilla/3.jpg`) },
        { src: require(`@/assets/img/rentals/hilltopvilla/4.jpg`) },
        { src: require(`@/assets/img/rentals/hilltopvilla/5.jpg`) },
        { src: require(`@/assets/img/rentals/hilltopvilla/6.jpg`) },
        { src: require(`@/assets/img/rentals/hilltopvilla/7.jpg`) },
        { src: require(`@/assets/img/rentals/hilltopvilla/8.jpg`) },
        { src: require(`@/assets/img/rentals/hilltopvilla/9.jpg`) }
      ]
    },
    {
      title: 'Motel Room',
      description: 'Bethany Lodge',
      count: 12,
      amenities: [
        'Water',
        'Heat',
        'Air Conditioning',
        'Full Bathroom',
        'Bedding & Towels Provided',
        'Sleeps 4'
      ],
      images: [
        { src: require(`@/assets/img/rentals/motel/1.jpg`) },
        { src: require(`@/assets/img/rentals/motel/2.jpg`) },
        { src: require(`@/assets/img/rentals/motel/3.jpg`) },
        { src: require(`@/assets/img/rentals/motel/4.jpg`) },
        { src: require(`@/assets/img/rentals/motel/5.jpg`) }
      ]
    },
    {
      title: 'Administration Building Room',
      description: 'The Upper Room',
      count: 4,
      amenities: [
        'Shared Full Bathroom',
        'Bedding & Towels Provided',
        'Sleeps 2, 2, 2, and 4'
      ],
      images: [
        { src: require(`@/assets/img/rentals/administration/1.jpg`) },
        { src: require(`@/assets/img/rentals/administration/2.jpg`) },
        { src: require(`@/assets/img/rentals/administration/3.jpg`) },
        { src: require(`@/assets/img/rentals/administration/4.jpg`) },
        { src: require(`@/assets/img/rentals/administration/5.jpg`) }
      ]
    },
    {
      title: 'Dorm Room',
      description: 'Silverholm',
      count: 12,
      amenities: [
        'Comfort Station (Washrooms, Showers)',
        'Sleeps 8x10, and 4x4'
      ],
      images: [
        { src: require(`@/assets/img/rentals/girlsdorm/1.jpg`) },
        { src: require(`@/assets/img/rentals/girlsdorm/2.jpg`) },
        { src: require(`@/assets/img/rentals/girlsdorm/3.jpg`) },
        { src: require(`@/assets/img/rentals/girlsdorm/4.jpg`) }
      ]
    },
    {
      title: 'Dorm Room',
      description: 'Boys Dormitory',
      count: 12,
      amenities: [
        'Comfort Station (Washrooms, Showers)',
        'Sleeps 7x10'
      ],
      images: [
        { src: require(`@/assets/img/rentals/boysdorm/1.jpg`) },
        { src: require(`@/assets/img/rentals/boysdorm/2.jpg`) },
        { src: require(`@/assets/img/rentals/boysdorm/3.jpg`) },
        { src: require(`@/assets/img/rentals/boysdorm/4.jpg`) },
        { src: require(`@/assets/img/rentals/boysdorm/5.jpg`) },
        { src: require(`@/assets/img/rentals/boysdorm/6.jpg`) }
      ]
    }
  ]
})

export const mutations = {}
