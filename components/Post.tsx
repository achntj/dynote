import React from "react";
import Link from "next/link";

export type PostProps = {
  id: number;
  title: string;
  content: string;
  published: boolean;
  date: Date;
};

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const date = new Date(post.date);
  const data = date.toLocaleDateString().replace(/\//g, "-")
  return (
    <div>
      <span>{data}</span>
      <Link href={`/p/${post.id}`}>
      <a className="ml-5">{post.title}</a>
      </Link>
    </div>
  );
};

export default Post;
