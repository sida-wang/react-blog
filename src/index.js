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
import PostEditor from "./components/Editor"
import PostsLayout from './pages/PostsLayout';
import PostsContainer from './components/PostsContainer';
import { allPostsLoader, postsIdLoader, getTagsLoader, tagsIdLoader } from './util/loaders';
import EditPostLayout from './pages/EditPostLayout';
import NewPostLayout from './pages/NewPostLayout';
import NewTagLayout from './pages/NewTagLayout';
import TagsLayout from './pages/TagsLayout';
import EditTagLayout from './pages/EditTagLayout'

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
      {
        path: "newpost",
        element: <NewPostLayout />,
      },
      {
        path: "newtag",
        element: <NewTagLayout />,
      },
      {
        path: "tags/:id",
        children: [
          {
            path: "",
            element: <TagsLayout />,
            loader: allPostsLoader,
          },
          {
            path: "edit",
            element: <EditTagLayout />,
            loader: tagsIdLoader,
          }
        ]
      },
      {
        path: "posts",
        children: [
          {
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
            path: ":id",
            children: [
              {
                path: "",
                element: <PostsLayout type="post" />,
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
