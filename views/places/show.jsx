const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main className='container'>
            <img id="showPic" src={data.place.pic}  />
            <div>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
  Edit
</a>  
<form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
  <button type="submit" className="btn btn-danger">
    Delete
  </button>
</form>     


            </div>
            


            <h1>{ data.place.name }</h1>
            <aside>Rating</aside>
            <aside>Description</aside>
            <footer>
                Comments
            </footer>
          </main>
        </Def>
    )
}

module.exports = show
