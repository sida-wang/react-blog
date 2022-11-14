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
import { allPostsLoader, postsIdLoader } from './util/loaders';
import EditPostLayout from './components/EditPostLayout';
import NewPostLayout from './components/NewPostLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <PostsLayout />,
        loader: allPostsLoader,
      },
      {//diferentiate between new and edit:/id by changing what they fetch and their onSubmit
        path: "new",
        element: <NewPostLayout />,
      },
      {
        path: "posts",
        children: [
          {//differentiate between id and the others using a loader function
            path: "",
            element: <PostsLayout />,
            loader: allPostsLoader,
          },
          {
            path: "all",
            element: <PostsLayout />,
            loader: allPostsLoader,
          },
          {
            //figure out how to put edit and delete button into action section of posts layout 
            path: ":id",
            children: [
              {
                path: "",
                element: <PostsLayout isSinglePost={true} />,
                loader: postsIdLoader,
              },
              {
                path: "edit",
                element: <EditPostLayout />,
                loader: postsIdLoader,
              }
            ]
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
