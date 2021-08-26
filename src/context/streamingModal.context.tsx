import { createContext, Dispatch, FC, useMemo, useReducer } from "react";

import {
  streamingModalReducer,
  StreamingModalPlatformAction,
  StreamingModalPlatformState,
} from "~reducers";

interface StreamingModalContextValue {
  dispatch: Dispatch<StreamingModalPlatformAction>;
  state: StreamingModalPlatformState;
}

export const StreamingModalContext = createContext({} as StreamingModalContextValue);

export const StreamingModalContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(streamingModalReducer, {
    isOpen: false,
  });

  const value = useMemo(() => {
    return { dispatch, state };
  }, [state]);

  return <StreamingModalContext.Provider value={value}>{children}</StreamingModalContext.Provider>;
};
