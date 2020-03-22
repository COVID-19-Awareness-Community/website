import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ExtUrl from "../components/ext-url";

import urls from '../data/urls';

const generateUrls = ({searchInput}) => urls
  .filter(({url, label, description}) => [url, label, description].find(field => field.indexOf(searchInput) >= 0))
  .map(({url, label, description}) => (
    <div className="column" key={url}>
        <ExtUrl url={url}>
          <p className="title is-4">{label}</p>
          <p className="subtitle">{description}</p>
        </ExtUrl>
    </div>
  ))

class IndexPage extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      searchInput: ''
    }
  }

  handleSearch(evt) {
    const { value } = evt.target;

    this.setState({
      searchInput: value
    });
  }
  
  render() {
    const { searchInput } = this.state;
    const externalUrls = generateUrls({ searchInput });

    return (
      <Layout>
        <SEO title="Home" />
        <section className="section">
          <label className="search" htmlFor="search-input">Search</label>
          <input name="search-input" id="search-input" type="text" className="input" placeholder="Search..." onChange={evt => this.handleSearch(evt)}/>
        </section>
        <section className="section">
          <div className="columns"> 
            { externalUrls }
          </div>
        </section>
      </Layout>
    );
  }
}

export default IndexPage
