import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import { Contact } from "./pages/contact";
import { ErrorPage } from "./pages/error-page";
import { Home } from "./pages/home";
import { Posts, postsLoader } from "./pages/posts";

const withLayout = (Component: React.ElementType) => {
  return (
    <Layout>
      <Component />
    </Layout>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: withLayout(Home),
    errorElement: withLayout(ErrorPage),
  },
  {
    path: "/posts",
    children: [
      {
        path: "/posts/:id",
        element: withLayout(Posts),
        loader: postsLoader,
      },
    ],
  },
  {
    path: "/contact",
    element: withLayout(Contact),
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
