type ActionTypes = "SHOW_STREAMING_PLATFORMS" | "HIDE_STREAMING_PLATFORMS";

export interface StreamingModalPlatformState {
  isOpen: boolean;
}

export interface StreamingModalPlatformAction {
  type: ActionTypes;
}

export const streamingModalReducer = (
  state: StreamingModalPlatformState,
  action: StreamingModalPlatformAction
) => {
  switch (action.type) {
    case "SHOW_STREAMING_PLATFORMS":
      return { ...state, isOpen: true };
    case "HIDE_STREAMING_PLATFORMS":
      return { ...state, isOpen: false };
    default:
      throw new Error();
  }
};
