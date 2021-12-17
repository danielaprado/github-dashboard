import elmo from '../../../assets/elmo.gif';
import './NotFound.css';

export const NotFound = (): JSX.Element => {
  return (
    <div className='not-found-container'>
      <div>We can't seem to find results to show...</div>
      <img src={elmo} alt='Elmo GIF' className='not-found-image' />
    </div>
  );
};
