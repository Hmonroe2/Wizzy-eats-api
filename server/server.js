const express = require('express')
const app = express(); 
const cors = require('cors')


app.set('port', process.env.PORT || 3001);
app.locals.title = 'Restaurants'
//middleWear 
app.use(cors())
app.use(express.json())




app.locals.restaurants = [
  {
    id: 1,
    name: 'Yard House',
    location: 'Denver',
    hours: [
      'Monday:11:00 AM-10:30 PM',
      'Tuesday: 11:00 AM - 10:30 PM',
      'Wednesday: 11:00 AM - 10:30 PM',
      'Thursday: 11:00 AM - 10:30 PM',
      'Friday: 11:00 AM - 11:00 PM',
      'Saturday: 11:00 AM - 11:00 PM',
      'Sunday: 11:00 AM - 10:30 PM',
    ],
    image:
      ' https://fastly.4sqi.net/img/general/600x600/Fvi-epT2stIXVutrTReMCkv6vqNhsyhympmX5iWJgcU.jpg',
    address: '8437 Park Meadows Center Dr Lone Tree, CO 80124 ',
    phone: '(303) 790-7453',
    website: 'https://www.yardhouse.com',
  },
  {
    id: 2,
    name: 'Cranelli\'s',
    location: 'Denver',
    hours: [
      'Monday: 11:00 AM - 9:00 PM',
      'Tuesday: 11:00 AM - 9:00 PM',
      'Wednesday: 11:00 AM - 9:00 PM',
      'Thursday: 11:00 AM - 9:00 PM',
      'Friday: 11:00 AM - 9:30 PM',
      'Saturday: 11:00 AM - 9:30 PM',
      'Sunday: 11:00 AM - 8:00 PM',
    ],
    image:
      ' https://media-cdn.tripadvisor.com/media/photo-s/11/e1/2e/e6/our-cozy-italian-restaurant.jpg',
    address: '10047 Park Meadows Dr Unit F, Lone Tree, CO 80124 ',
    phone: '(303) 799-3661',
    website: 'https://www.cranellis.com/',
  },
  {
    id: 3,
    name: 'Torchy\'s Tacos',
    location: 'Denver',
    hours: [
      'Monday: 10:00 AM - 10:00 PM',
      'Tuesday: 10:00 AM - 10:00 PM',
      'Wednesday: 10:00 AM - 10:00 PM',
      'Thursday: 10:00 AM - 10:00 PM',
      'Friday: 10:00 AM - 10:00 PM',
      'Saturday: 10:00 AM - 10:00 PM',
      'Sunday: 10:00 AM - 10:00 PM',
    ],
    image:
      'https://1.bp.blogspot.com/-cJec3kfk0rM/Xl8xg3-VdRI/AAAAAAAAQ8E/MYDVjWwjVqoYC17FcsJKugjya8mO4FqEQCLcBGAsYHQ/s1600/torchys.jpg',
    address: '8505 E Arapahoe Rd, Greenwood Village, CO 80111',
    phone: '(303) 721-0060',
    website: 'http://torchystacos.com/',
  },
  {
    id: 4,
    name: "Angelo's",
    location: 'Denver',
    hours: [
      'Monday: 11:00 AM - 10:00 PM',
      'Tuesday: 11:00 AM - 10:00 PM',
      'Wednesday: 11:00 AM - 10:00 PM',
      'Thursday: 11:00 AM - 10:00 PM',
      'Friday: 11:00 AM - 10:30 PM',
      'Saturday: 11:00 AM - 10:30 PM',
      'Sunday: 11:00 AM - 10:00 PM',
    ],
    image:
      'https://www.colorado.com/sites/default/files/listing_images/profile/7311/screenshot2019-06-27at94124am.png',
    address: '6885 S Santa Fe Dr, Littleton, CO 80120',
    phone: '(720) 532-1389',
    website: 'http://angelostaverna.com/littleton',
  },
  {
    id: 5,
    name: 'LongHorn SteakHouse ',
    location: 'Denver',
    hours: [
      'Monday: 11:00 AM - 10:00 PM',
      'Tuesday: 11:00 AM - 10:00 PM',
      'Wednesday: 11:00 AM - 10:00 PM',
      'Thursday: 11:00 AM - 10:00 PM',
      'Friday: 11:00 AM - 11:00 PM',
      'Saturday: 11:00 AM - 11:00 PM',
      'Sunday: 11:00 AM - 10:00 PM',
    ],
    image:
      'https://explorebeaufortsc.com/wp-content/uploads/2018/12/longhornsteakhouse.jpg ',
    address: '9625 East County Line Road, Centennial, CO 80112',
    phone: '(303) 649-9477',
    website: 'https://www.longhornsteakhouse.com/home',
  },
  {
    id: 6,
    name: "Hernando's Pizza Pub",
    location: 'Winter Park',
    hours: [
      'Monday: 5:00pm - 9:00 PM',
      'Tuesday: 5:00pm - 9:00 PM',
      'Wednesday: 5:00pm - 9:00 PM',
      'Thursday: 5:00pm - 9:00 PM',
      'Friday: 5:00pm - 9:30 PM',
      'Saturday: 5:00pm - 9:30 PM',
      'Sunday: 5:00pm - 8:00 PM',
    ],
    image:
      'https://coloradoskiauthority.com/assets/images/Winter%20Park/hernandos-pizza-winter-park.jpg ',
    address: '78199 US-40, Winter Park, CO 80482 ',
    phone: '(970) 726-5409',
    website: 'https://www.hernandospizzapub.com/Menu',
  },
  {
    id: 7,
    name: "Randi's Grill & Pub",
    location: 'Winter Park',
    hours: [
      'Monday: 8:00 AM - 10:00 PM',
      'Tuesday:  8:00 AM - 10:00 PM',
      'Wednesday:  8:00 AM - 10:00 PM',
      'Thursday:  8:00 AM - 10:00 PM',
      'Friday:  8:00 AM - 10:00 PM',
      'Saturday:  8:00 AM - 10:00 PM',
      'Sunday:  8:00 AM - 10:00 PM',
    ],
    image: 'https://randiswinterpark.com/images/logo.png',
    address: '78521 US-40, Winter Park, CO 80482',
    phone: '(970) 726-1172',
    website: 'https://randiswinterpark.com/',
  },
  {
    id: 8,
    name: 'Smokehouse BBQ',
    location: 'Winter Park',
    hours: [
      'Monday: 11:00 AM - 9:00 PM',
      'Tuesday: 11:00 AM - 9:00 PM',
      'Wednesday: 11:00 AM - 9:00 PM',
      'Thursday: 11:00 AM - 9:00 PM',
      'Friday: 11:00 AM - 9:00 PM',
      'Saturday: 11:00 AM - 9:00 PM',
      'Sunday: 11:00 AM - 9:00 PM',
    ],
    image:
      'https://static.wixstatic.com/media/16a51c_6febddaf5e4a408ba58e5161a2216318~mv2.jpg/v1/fill/w_713,h_421,al_c/16a51c_6febddaf5e4a408ba58e5161a2216318~mv2.jpg ',
    address: '78656 US-40, Winter Park, CO 80482',
    phone: '(970) 722-0227 ',
    website: 'http://www.smokehousewp.com/',
  },
  {
    id: 9,
    name: 'Denos Mountain Bistro',
    location: 'Denver',
    hours: [
      'Monday: 3 PM - 9:00 PM',
      'Tuesday: 3 PM- 9:00 PM',
      'Wednesday: 3 PM - 9:00 PM',
      'Thursday: 3 PM - 9:00 PM',
      'Friday: 3 PM - 9:00 PM',
      'Saturday: 11:00 AM - 9:00 PM',
      'Sunday: 11:00 AM - 9:00 PM',
    ],
    image:
      ' https://cdn.skyhinews.com/wp-content/uploads/sites/9/2017/10/Denos-1240x827.jpg',
    address: '78911 US-40, Winter Park, CO 80482',
    phone: '(970) 726-5332',
    website: 'http://www.denoswp.com/',
  },
  {
    id: 10,
    name: 'The Ditch on 40',
    location: 'Winter Park',
    hours: [
      'Monday: 11:00 AM - 8:00 PM',
      'Tuesday: 11:00 AM - 8:00 PM',
      'Wednesday: 11:00 AM - 8:00 PM',
      'Thursday: 11:00 AM - 8:00 PM',
      'Friday: 11:00 AM - 8:00 PM',
      'Saturday: 11:00 AM - 8:00 PM',
      'Sunday: 11:00 AM - 8:00 PM',
    ],
    image:
      'https://www.theditchon40.com/app/public/media/photos/content/the-ditch-on-40-deck-2-1920.jpg',
    address: '78941 US-40, Winter Park, CO 80482 ',
    phone: ' (970) 363-7113',
    website: 'https://theditchon40.com/',
  },
];

//Routes 
app.get('/api/v1/restaurants', (request, response) => {
  const restaurants = app.locals.restaurants;
  response.json({ restaurants });
});

app.get('/api/v1/restaurants/:id', (request, response) => {
  // console.log(request.params.id)
  const id  = parseInt(request.params.id);
  const restaurant = app.locals.restaurants.find(rest => rest.id === id);
  if (!restaurant) {
    return response.sendStatus(404);
  }

  response.status(200).json({ restaurant });
});


// app.listen(3001, () => {
//   console.log('App is listening on port 3001 ');
// });
app.listen(app.get('port'), () => {
  console.log(
    `${app.locals.title} is running on http://localhost:${app.get('port')}.`
  );
});