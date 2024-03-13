import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import { Contact } from "./pages/contact";
import { ErrorPage } from "./pages/error-page";
import { Home } from "./pages/home";
import { Posts, postsLoader } from "./pages/posts";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: (
      <Layout>
        <ErrorPage />
      </Layout>
    ),
  },
  {
    path: "/posts",
    children: [
      {
        path: "/posts/:id",
        element: (
          <Layout>
            <Posts />
          </Layout>
        ),
        loader: postsLoader,
      },
    ],
  },
  {
    path: "/contact",
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
