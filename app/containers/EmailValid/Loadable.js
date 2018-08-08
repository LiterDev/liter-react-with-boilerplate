/**
 *
 * Asynchronously loads the component for EmailValid
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
