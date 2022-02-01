import React, { useState } from "react";
import Layout from "../components/Layout";
import Router from "next/router";
import {inDevEnvironment} from '../lib/DevEnv';

const Draft: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { title, content };
      await fetch(`http://localhost:3000/api/post`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await Router.push("/drafts");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      {inDevEnvironment ?
        <div>
          <form onSubmit={submitData}>
            <h1>New Draft</h1>
            <div className="mb-5">
            <a><input disabled={!content || !title} type="submit" value="Create" /></a>
            {" "}or{" "}
            <a className="back" href="#" onClick={() => Router.push("/")}>
              Cancel
            </a>
            </div>
            <input
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              type="text"
              value={title}
              className="w-full outline-none"
            />
            <textarea
              cols={50}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Content"
              rows={8}
              value={content}
              className="w-full outline-none h-auto resize-none"
            />
          </form>
        </div>
        :
        <div>
          <h1>Unauthorized</h1>
        </div>
      }
    </Layout>
  );
};

export default Draft;
