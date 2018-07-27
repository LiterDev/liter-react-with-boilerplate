/**
 *
 * Asynchronously loads the component for SlideTest
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
