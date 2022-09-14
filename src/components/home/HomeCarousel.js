import Carousel from 'react-bootstrap/Carousel';

function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../images/terrasse.jpg"
          alt="Terrasse"
        />
        <Carousel.Caption>
          <h3>Terrasse 1</h3>
          <p>Tidligere Oppdrag</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../images/terrasse.jpg"
          alt="Terrasse"
        />

        <Carousel.Caption>
          <h3>Terrasse 2</h3>
          <p>Tidligere Oppdrag</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../images/terrasse.jpg"
          alt="Terrasse"
        />

        <Carousel.Caption>
          <h3>Terrasse 3</h3>
          <p>Tidligere Oppdrag</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;


