import React from "react";
import { GetServerSideProps } from "next";
import ReactMarkdown from "react-markdown";
import Layout from "../../components/Layout";
import Router from "next/router";
import { PostProps } from "../../components/Post";
import prisma from '../../lib/prisma'


export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  let post = await prisma.post.findUnique({
    where: {
      id: Number(params?.id) || -1,
    },
  });
  post = JSON.parse(JSON.stringify(post));
  return {
    props: post,
  };
};

async function publishPost(id: number): Promise<void> {
  await fetch(`http://localhost:3000/api/publish/${id}`, {
    method: "PUT",
  });
  await Router.push("/")
}

async function deletePost(id: number): Promise<void> {
  await fetch(`http://localhost:3000/api/post/${id}`, {
    method: "DELETE",
  });
  await Router.push("/")
}

const Post: React.FC<PostProps> = (props) => {

  let title = props.title;
  if (!props.published) {
    title = `${title} (Draft)`;
  }

  return (
    <Layout>
      <div>
        <h2>{title}</h2>
        <ReactMarkdown children={props.content} />
        <div className="space-x-2 mt-5">
        {!props.published && (
          <button onClick={() => publishPost(props.id)}><a>Publish</a></button>
        )}
          <button onClick={() => deletePost(props.id)}><a>Delete</a></button>
        </div>
      </div>      
    </Layout>
  );
};

export default Post;
