import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Photos } from '../data/photos';

export default function About() {
  return (
    <div className='bios'>
      <div className='left-half'>
        <h1>Our Pictures</h1>
        <Carousel interval={2250}>
          {Photos.map(photo => (
            <Carousel.Item key={photo.id}>
              <img
                className='bios-img'
                alt='bios-photo'
                src={photo.imageUrl}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className='right-half'>
        <blockquote className='bios-desc'>
          <h1>Misson Statement</h1>
          <p className='bios-desc'>Our mission is to provide high-quality karaoke entertainment and services to create unforgettable experiences for our customers. We strive to create a welcoming and inclusive atmosphere where everyone can feel comfortable expressing themselves through music. Our state-of-the-art equipment and extensive song library ensure that our customers have the best possible karaoke experience. We are dedicated to providing exceptional customer service and making sure that every visit to our establishment is a memorable one.</p>
        </blockquote>
      </div>
    </div>
  );
}

{/* <a className='img-container'>
<img className='bios-img' alt="bios-photo" src={arnold}/>
</a> */}