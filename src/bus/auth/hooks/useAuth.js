import { useSelector, useDispatch } from 'react-redux';

import { authActions } from '../actions';

export const useAuth = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.auth);
  const { loggedIn } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(authActions.logout());
  };

  return {
    data,
    logout,
    loggedIn
  }
};
