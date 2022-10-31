import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const RenderApp = children => {
  const initialState = {
    userState: {
      users: [
        { id: "001", name: "Abdelrahman" },
        { id: "002", name: "hossam" },
        { id: "003", name: "ahmed" },
        { id: "004", name: "mohamed" }
      ],
      isEditingMode: false,
      editingUser: null
    }
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);
  return render(<Provider store={store}>{children}</Provider>);
};
export default RenderApp;
