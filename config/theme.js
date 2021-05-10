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
    },
    heading: {
      color: mainColor,
    },
    menu: {
      icons: {
        down: 'none',
        up: 'none',
      },
    },
  })
);

export default theme;
