import AliceCarousel from "react-alice-carousel";
import { Box, Image } from "grommet";
import "react-alice-carousel/lib/alice-carousel.css";

function MdxSlider({ path, length }) {
  const images = [];

  for (let i = 1; i <= length; i++) {
    images.push(`/images/${path}/carousel/${i}.jpg`);
  }

  return (
    <AliceCarousel
      autoPlay
      autoPlayInterval={5000}
      infinite
      items={images.map((image) => (
        <Box align="center" direction="row" height="60vh">
          <Image fill fit="contain" key={image} src={image} />
        </Box>
      ))}
    />
  );
}

export default MdxSlider;
