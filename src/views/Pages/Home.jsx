import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../layouts/Layout";
import packageJson from "../../../package.json";

function Home() {
  return (
    <Layout>
      <main className="px-3 mt-5 text-center">
        <h1>Lets Build Something !</h1>
        <p className="lead">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <p className="lead mt-5">
          <Link to="/todo" className="btn  fw-bold border-white bg-white">
            Browse Todo
          </Link>
        </p>
        <p>App Version {packageJson.version}</p>
      </main>
    </Layout>
  );
}

export default Home;
