import { Home, About, Service, Contact, Posts, ErrorPage , Blog, PostItem } from "@pages";

const router = [
  {
    path: "/",
    element: <Home />,
    content:"Home",
  },
  {
    path: "/about",
    element: <About />,
    content:"About",
  },
  {
    path: "/service",
    element: <Service />,
    content:"Service"
  },
  {
    path: "/contact",
    element: <Contact />,
    content:"Contact"
  },
  {
    path: "/posts",
    element: <Posts />,
    content:"Posts"
  },
  {
    path: "/posts/:id",
    element: <PostItem />,
    content:"Posts"
  },
  {
    path: "/blog",
    element: <Blog/>,
    content:"Blog"
  },
  {
    path: "*",
    element: <ErrorPage />
  }
];

export default router;
