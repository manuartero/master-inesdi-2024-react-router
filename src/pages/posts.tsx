import { Outlet, useLoaderData } from "react-router-dom";

import type { LoaderFunction } from "react-router-dom";

type PostsProps = {
  postId: string;
};

// eslint-disable-next-line react-refresh/only-export-components
export const postsLoader: LoaderFunction<PostsProps> = async ({ params }) => {
  return { postId: params.id };
};

export function Posts() {
  const { postId } = useLoaderData() as PostsProps;
  return (
    <main className="posts-page">
      Posts page {postId}
      <Outlet />
    </main>
  );
}
