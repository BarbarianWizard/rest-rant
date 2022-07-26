const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  let rating = (
    <h3 className="inactive">
      Not yet rated
    </h3>
  )
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = Math.round(sumRatings / data.place.comments.length)
    let stars = ''
    for (let i = 0; i < averageRating; i++) {
      stars += '☆'
    }
rating = (
  <h3>
    {stars}  stars
  </h3>
)
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! ಠ益ಠ ' : 'Rave! (/◕ヮ◕)/'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
<form method="POST" action={`${data.place.id}/comment/${c.id}?_method=DELETE`}>
  <input type="submit" className="btn btn-danger" value="Delete Comment" />
</form>
        </div>
      )
    })
  }
    return (
      <Def>
      <main>
        <div className="row">
          <div className="col-sm-6">
            <img src={data.place.pic} alt={data.place.name} />
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
          </div>
          <div className="col-sm-6">
            <h1>{data.place.name}</h1>
           <h2>Rating</h2>
           {rating}
           <br />
            <h2>
              Description
            </h2>
            <h3>
              {data.place.showEstablished()}
            </h3>
            <h4>
              Serving {data.place.cuisines}
            </h4>
            <div id="editDelete">
            <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"> 
  Edit
</a>  
<br></br>
<form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
  <button type="submit" className="btn btn-danger">
    Delete
  </button>
</form>
</div>
</div>

<hr></hr>

<h2>Comments</h2>
{comments}
        </div>
        <br></br>
        <h2> ಠ益ಠ Rant  or  (/◕ヮ◕)/ Rave?</h2>
        <form action={`${data.place.id}/comment`} method="POST">
          <div>
          <div>
            <label htmlFor="content">Content</label>
          <textarea id="content" name="content"></textarea>
          </div>
          <div>
          <label htmlFor="author">Author</label>
          <input id="author" name="author" ></input>
          </div>
          <div>
          <label htmlFor="stars">Star Rating ☆</label>
          <input type="range" min="1" max="5"   id="stars" name="stars" step='0.5'></input>
          </div>
          <div>
          <label htmlFor="rant">Rant</label>
          <input id="rant" name="rant" type="checkbox"></input>
          </div>
          </div>
          <input type="submit" className="btn btn-primary" value="Add Comment" />
        </form>
      </main>
    </Def>
    
    )
}

module.exports = show
/*
<div>
            <label htmlFor="stars"></label>
            <input></input>
          </div>


*/

/* 
        <form action={`/places/${data.place.id}/comment`} method="POST">
          <input id="author" name="author" >Author</input>
          <input id="content" name="content">Content</input>
          <input id="stars" name="stars" step='0.5'>Star Rating</input>
          <input id="rant" name="rant" type="checkbox">Rant</input>
        </form>
      */