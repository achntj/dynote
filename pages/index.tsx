import React from "react";
import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import Post, { PostProps } from "../components/Post";
import prisma from '../lib/prisma'
var config = require('../config.json');

const name = config.name;
const description = config.description;


export const getStaticProps: GetStaticProps = async () => {
  let feed = await prisma.post.findMany({
    where: {
      published: true,
    }, 
  });
  feed = JSON.parse(JSON.stringify(feed));
  return {
    props: { feed },
  };
};

type Props = {
  feed: PostProps[];
};

const Home: React.FC<Props> = (props) => {
  return (
    <Layout>
      <div>
        <h1>{name}'s Notes</h1>
        <p>{description}</p>
        <main>
           {
              props.feed.length == 0 ? <p>(Nothing to see here) ʕ•ᴥ•ʔ</p> 
              :
              props.feed.map((post) => (
            <div key={post.id} className="my-2 border-b-2 dark:border-slate-500">
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
    </Layout>
  );
};

export default Home;


