import ReactDOM from "react-dom/client";
import "react-calendar/dist/Calendar.css";
import "semantic-ui-css/semantic.min.css";
import "react-toastify/dist/ReactToastify.min.css";
import "react-datepicker/dist/react-datepicker.css";
import { StoreContext, store } from "./app/stores/store.ts";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router/Routes.tsx";
// import './index.css'

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <StoreContext.Provider value={store}>
    <RouterProvider router={router}></RouterProvider>
  </StoreContext.Provider>
  // </React.StrictMode>,
);
