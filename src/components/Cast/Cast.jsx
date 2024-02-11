import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchActors } from 'services/TmbdApi';
import Loader from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const onActorsOfMovie = () => {
      setLoading(true);

      fetchActors(movieId)
        .then(actors => {
          setActors(actors);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    onActorsOfMovie();
  }, [movieId]);

  return (
    <div className="CastContainer">
      {loading && <Loader />}

      <ul className="CastList">
        {actors.map(({ id, profile_path, original_name, name, character }) => (
          <li className="CastItem" key={id}>
            <img
              className="CastImage"
              width="200px"
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
              }
              alt={original_name}
            />
            <p className="CastText">{name}</p>
            <p className="CastText">Character: {character}</p>
          </li>
        ))}
      </ul>
      {actors.length === 0 && <div>We don't have any casts for this movie</div>}
    </div>
  );
};
export default Cast;
