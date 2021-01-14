import { GeneralLayout } from '@/components/layouts/GeneralLayout';
import { createContext, useReducer } from 'react';
import * as types from '../core/store/types';

import './styles/styles.css';

function PagesReducer(state, action) {
  console.log(action, 'what is my action', state);
  switch (action.type) {
    case types.PAGE_SET:
      return { page: action.page };
    default:
      return state;
  }
}

export const PageContext = createContext({ page: null });

export default function App({ Component, pageProps }) {
  const [page, dispatch] = useReducer(PagesReducer, {
    page: null,
  });
  return (
    <PageContext.Provider value={{ page, dispatch }}>
      {/* <GeneralLayout> */}
      <Component {...pageProps} />
      {/* </GeneralLayout> */}
    </PageContext.Provider>
  );
}
