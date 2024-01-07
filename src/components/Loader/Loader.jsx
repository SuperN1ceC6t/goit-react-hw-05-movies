import { BallTriangle } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className='LoaderContainer'>
      <BallTriangle
        height="100"
        width="100"
        color="tomato"
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loader;
