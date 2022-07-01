import { Link } from 'react-router-dom';

export default function BeanieBaby({ id, image, title, astroSign }) {
  return (
    <Link to={`/beanies/${id}`}>
      <div className='beanie'>
        <h3>{title}</h3>
        <p>{astroSign}</p>
        <img src={image}/>
      </div>
    </Link>
    // this should contain a react-router-dom Link to the detail page for this particular beanie baby.
    // it should also render the beanie baby's image and show the beanie baby's name

  );
}
