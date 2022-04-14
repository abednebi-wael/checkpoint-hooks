
import React from 'react'


function Trailer(props) {
  const Movie = props.Movies.find((el) => el.id == props.match.params.id);
  

    return (
      <div className="MovieTrailer">
        <div className="imgvid">
          <img src={Movie.postUrl} />
          <iframe width="800" height="500" src={Movie.trailer}></iframe>
        </div>
        <div className="trailerdescrip">
          <h1>{Movie.genre}</h1>
          <p>{Movie.description}</p>
        </div>
        <div className="btn-back">
          <button className="button-74" onClick={() => props.history.goBack()}>
            Go Back
          </button>
         
          <button className="button-74" onClick={() => props.history.push("/")}>
            Home
          </button>
        </div>
      </div>
    );
    }
export default Trailer 
