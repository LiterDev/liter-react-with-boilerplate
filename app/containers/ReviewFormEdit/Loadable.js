/**
 *
 * Asynchronously loads the component for ReviewFormEdit
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
