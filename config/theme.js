import { deepFreeze, deepMerge } from 'grommet/utils';
import { base } from 'grommet';

const mainColor = 'rgba(75, 70, 70, 0.9)';

const theme = deepFreeze(
  deepMerge(base, {
    global: {
      colors: {
        brand: mainColor,
        'accent-1': mainColor,
        focus: 'brand',
      },
      font: {
        family: "'Sarabun', sans-serif",
        size: '16px',
      },
    },
    anchor: {
      textDecoration: 'underline',
    },
    heading: {
      color: mainColor,
      extend: {
        fontFamily: "'Yeseva One', serif",
      },
      level: {
        4: {
          size: '22px',
        },
      },
    },
    menu: {
      icons: {
        down: 'none',
        up: 'none',
      },
    },
    paragraph: {
      medium: {
        size: '16px',
        height: '24px',
        maxWidth: '600px',
      },
    },
    text: {
      medium: {
        size: '16px',
      },
    },
  })
);

export default theme;
