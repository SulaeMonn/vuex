export const PUSH_NOTIFICATION = (state, notification) => {
  state.notification.push({
    ...notification,
    id: (Math.random().toString(36) + Date.now().toString(36)).substr(2),
  });
};

export const REMOVE_NOTIFICATION = (state, notification) => {
  state.notification = state.notification.filter((noti) => {
    return noti.id != notification.id;
  });
};
