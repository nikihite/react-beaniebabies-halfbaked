import { Link } from 'react-router-dom';

export default function BeaniesList({ beanieBabies }) {
  return (
    <div className='beanies'>
      {
        beanieBabies.map((BeanieBaby, i) =>
          <Link key={BeanieBaby.title + i + BeanieBaby.id} to={`/BeanieBabies/${BeanieBaby.id}`}>
            <div className='beanie-baby'>
              <h3>{BeanieBaby.title}</h3>
              <p>{BeanieBaby.astroSign}</p>
              <img src={BeanieBaby.image} />
            </div>
          </Link>)
      }
    </div>);
}
