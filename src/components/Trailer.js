import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function Trailer({ movies }) {
  const [movie, setMovie] = useState({});

  const { id } = useParams();
  const location = useLocation()
  const navigate = useNavigate()

  console.log(location)

  const findMovie = () => {
    setMovie(movies.find((el) => el.id == id));
  };

  useEffect(() => {
    findMovie();
  }, []);

  return (
    <div className="MovieTrailer">
      <div className="imgvid">
        <img src={movie.postUrl} />
        <iframe
          width="941"
          height="530"
          src={movie.trailer}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>{" "}
      </div>
      <div className="trailerdescrip">
        <h1>{movie.genre}</h1>
        <p>{movie.description}</p>
      </div>
      <div className="btn-back">
        <button className="button-74"  onClick={() => navigate(-1)}>Go Back</button>

        <button className="button-74"  onClick={() => navigate('/')}>Home</button>
      </div>
    </div>
  );
}
export default Trailer;
