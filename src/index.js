import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import ErrorPage from "./error-page"
import PostEditor from "./components/PostEditor"
import PostsLayout from './components/PostsLayout';
import PostsContainer from './components/PostsContainer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <PostsLayout />,
        children: [
          {
            path: "",
            element: <PostsContainer />,
          },
        ]
      },
      {//diferentiate between new and edit:/id by changing what they fetch and their onSubmit
        path: "new",
        element: <PostEditor />,
      },
      {
        path: "edit/:id",
        element: <PostEditor />,
      },
      {
        path: "posts",
        element: <PostsLayout />,
        children: [
          {//differentiate between id and the others using a loader function
            path: "",
            element: <PostsContainer />,
          },
          {
            path: "all",
            element: <PostsContainer />,
          },
          {
            path: ":id",
            element: <PostsContainer />,
          },
        ]
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
