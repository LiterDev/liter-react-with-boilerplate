/**
 *
 * Asynchronously loads the component for FollowController
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
