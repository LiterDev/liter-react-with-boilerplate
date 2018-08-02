/**
 *
 * Asynchronously loads the component for ReviewCardSlider
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
