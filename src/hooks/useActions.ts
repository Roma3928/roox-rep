import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { rootAction } from '../store/config'

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(rootAction, dispatch);
};
