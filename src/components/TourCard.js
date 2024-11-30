import { tours } from '../data';

const TourCard = () => {
  return (
    <section className='section' id='tours'>
      <div className='section-center featured-center'>
        {tours.map((tour) => {
          const { id, date, title, text, country, duration, price, image } = tour;
          return (
            <article className='tour-card' key={id}>
              <div className='tour-img-container'>
                <img src={image} className='tour-img' alt='' />
                <p className='tour-date'>{date}</p>
              </div>
              <div className='tour-info'>
                <h4>{title}</h4>
                <p>{text}</p>
                <div className='tour-footer'>
                  <p>
                    <span>
                      <i className='fas fa-map'></i>
                    </span>
                    {country}
                  </p>
                  <p>{`${duration} days`}</p>
                  <p>{`from $${price}`}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default TourCard;
