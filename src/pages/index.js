import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ExtUrl from "../components/ext-url";

import urls from '../data/urls';

const externalUrls = urls.map(({url, label, description}) => (
  <div className="column" key={url}>
      <ExtUrl url={url}>
        <p className="title is-4">{label}</p>
        <p className="subtitle">{description}</p>
      </ExtUrl>
  </div>
));

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="section">
      <div className="columns"> 
        { externalUrls }
      </div>
    </section>
  </Layout>
)

export default IndexPage
