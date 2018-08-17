/**
 *
 * Asynchronously loads the component for UserGrade
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
