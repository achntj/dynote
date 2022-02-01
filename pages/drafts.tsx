import React from "react";
import { GetServerSideProps } from "next";
import Layout from "../components/Layout";
import Post, { PostProps } from "../components/Post";
import prisma from '../lib/prisma'


export const getServerSideProps: GetServerSideProps = async () => {


  let drafts = await prisma.post.findMany({
    where: {
      published: false,
    },
  });
  drafts = JSON.parse(JSON.stringify(drafts));
  return {
    props: { drafts },
  };
};

type Props = {
  drafts: PostProps[];
};

const Drafts: React.FC<Props> = (props) => {

  return (
    <Layout>
      <div>
        <h1>Drafts</h1>
        <main>
          {
          props.drafts.length == 0 ? <p>(Nothing to see here) ʕ•ᴥ•ʔ</p> 
          :
          props.drafts.map((post) => (
            <div key={post.id}  className="m-2 border-b-2">
              <Post post={post} />
            </div>
          ))
          }
        </main>
      </div> 
    </Layout>
  );
};

export default Drafts;
