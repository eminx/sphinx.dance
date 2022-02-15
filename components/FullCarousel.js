import { Anchor, Box, Image, Layer } from 'grommet';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import useTranslation from 'next-translate/useTranslation';

export default function FullCarousel ({ images, onClose }) {
  const { t, lang } = useTranslation('common');

  return (
    <Layer full="horizontal" onEsc={onClose} onClickOutside={onClose}>
      <Anchor
        href="#"
        size="xsmall"
        onClick={onClose}
        style={{ padding: 6, textAlign: 'center' }}
      >
        {t('close')}
      </Anchor>
      <AliceCarousel
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={5000}
        animationDuration={500}
        animationType="fadeout"
        infinite
        disableDotsControls
        items={images.map((image) => (
          <Box direction="row" align="center" height="90vh">
            <Image fit="contain" fill="vertical" src={image} />
          </Box>
        ))}
      />
    </Layer>
  );
}
