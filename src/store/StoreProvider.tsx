import { persistor, store } from "../store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// Define the StoreProvider component to wrap the application with the Redux store and persistor
export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    // Provide the Redux store to the application
    <Provider store={store}>
      {/* Delay rendering until the persisted state has been rehydrated */}
      <PersistGate loading={null} persistor={persistor}>
        {children} {/* Render children components */}
      </PersistGate>
    </Provider>
  );
};
