import { deepFreeze, deepMerge } from 'grommet/utils';
import { base } from 'grommet';

const mainColor = '#ffbe64';

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
    heading: {
      color: mainColor,
      extend: {
        fontFamily: "'Crimson Pro', serif",
      },
      level: {
        4: {
          size: '22px',
        },
      },
    },
    paragraph: {
      medium: {
        size: '16px',
        height: '24px',
        maxWidth: '600px',
      },
    },
    menu: {
      icons: {
        down: 'none',
        up: 'none',
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
