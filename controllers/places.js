const router = require('express').Router()

router.get('/new', (req, res) => {
  res.render('places/new')
})

// GET /places
router.get('/', (req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/thai.jpg'
    // Photo by <a href="https://unsplash.com/@picoftasty?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mae Mu</a> on <a href="https://unsplash.com/s/photos/free-asian-food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
  }, {
      name: 'Coding Cat Cafe',
      city: 'Phoenix',
      state: 'AZ',
      cuisines: 'Coffee, Bakery',
      pic: '/images/coffee.jpg'
     // Photo by <a href="https://unsplash.com/@demidearest?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Demi DeHerrera</a> on <a href="https://unsplash.com/@demidearest?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
  }]
  
      
      res.render('places/index', { places })

  })
  
  router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
  })
  

module.exports = router
