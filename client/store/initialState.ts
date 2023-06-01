interface UserState {
    user: User | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
  }
  
  interface User {
    email: string;
  }
  
  const initialState: UserState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  };
  
  export default initialState;
  