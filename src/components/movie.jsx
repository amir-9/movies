import { useParams, useNavigate } from "react-router-dom";
const Movie = (props) => {
  let params = useParams();

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };
  return (
    <div>
      <h1>{params.movieId}</h1>
      <button className="px-4 btn" onClick={routeChange}>
        movie
      </button>
    </div>
  );
};

export default Movie;
