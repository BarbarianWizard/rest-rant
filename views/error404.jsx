const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div className='bg'>
                <img src="/images/oops.jpg" alt="oops"  />
                <div>
                Photo by <a href="https://unsplash.com/@rojekilian?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sarah Kilian</a> on <a href="https://unsplash.com/s/photos/oops?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </div>
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404
