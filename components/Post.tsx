import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

export type PostProps = {
  id: number;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
};

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const authorName = post.author ? post.author.name : "Unknown author";
  return (
    <div>
      <span>11th Jan, 2021</span>
      <Link href={`/p/${post.id}`}>
      <a className="ml-5">{post.title}</a>
      </Link>
    </div>
  );
};

export default Post;
