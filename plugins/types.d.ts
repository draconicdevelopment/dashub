export type StateType = {
  user: {
    uid?: string;
    email?: string | null;
    displayName?: string;
    profilePicture?: string;
    admin: boolean;
    loggedIn: boolean;
  };
};
