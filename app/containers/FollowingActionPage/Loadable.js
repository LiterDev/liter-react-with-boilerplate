/**
 *
 * Asynchronously loads the component for FollowingActionPage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
