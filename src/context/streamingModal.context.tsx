import { createContext, Dispatch, FC, useMemo, useReducer } from "react";

import {
  streamingModalReducer,
  StreamingModalPlatformAction,
  StreamingModalPlatformState,
} from "~reducers";

interface StreamingModalContextValue {
  state: StreamingModalPlatformState;
  dispatch: Dispatch<StreamingModalPlatformAction>;
}

export const StreamingModalContext = createContext(
  {} as StreamingModalContextValue
);

export const StreamingModalContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(streamingModalReducer, {
    isOpen: false,
  });

  const value = useMemo(() => {
    return { state, dispatch };
  }, [state]);

  return (
    <StreamingModalContext.Provider value={value}>
      {children}
    </StreamingModalContext.Provider>
  );
};
