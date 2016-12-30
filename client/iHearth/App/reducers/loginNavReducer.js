import { AUTH_PUSH_ROUTE, AUTH_POP_ROUTE } from '../constants/ActionTypes';
import { NavigationExperimental } from 'react-native';
const {
  StateUtils: NavigationStateUtils
} = NavigationExperimental;

const initialState = {
  index: 0,
  key: 'loginRoot',
  routes: [
    {
      key: 'login',
      title: 'LoginView'
    }
  ]
}

// Export and define navReducer
export default function loginNavState(state = initialState, action) {
  switch (action.type) {
    case AUTH_PUSH_ROUTE:
      if (state.routes[state.index].key === (action.route && action.route.key)) {
        return state;
      }
      console.log('being pushed into loginreducer...', action.route);
      return NavigationStateUtils.push(state, action.route);

    case AUTH_POP_ROUTE:
      if (state.index === 0 || state.routes.length === 1) {
        return state;
      }
      console.log('being popped into loginreducer...', state.routes);
      return NavigationStateUtils.pop(state);

    default:
      return state;
  }
}