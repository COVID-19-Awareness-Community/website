import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ExtUrl from "../components/ext-url";

import generateUrls from '../data/urls';

const filterUrls = (data, {searchInput}) => data.filter(({url, label, description}) => [url, label, description].find(field => field.indexOf(searchInput) >= 0))
  .map(({url, label, type, description}) => (
    <div className="columns" key={url}>
      <div className="column">
        <div className="card">
          <div className="card-header">
            <div className="card-title">
              <ExtUrl url={url}>
                <p className="title is-4">{label}</p>
              </ExtUrl>
            </div>
          </div>
          <div className="card-content">
              <p>Type: {type}</p>
              <p>Description: {description || "(No Description)"}</p>
          </div>
        </div>
      </div>
    </div>
  ))

class IndexPage extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      searchInput: '',
      data: []
    }
  }

  handleSearch(evt) {
    const { value } = evt.target;

    this.setState({
      searchInput: value
    });
  }

  componentDidMount() {
    generateUrls().then(data => {
      this.setState({ data })
    })
  }
  
  render() {
    const { data, searchInput } = this.state;
    console.log(data);
    const externalUrls = filterUrls(data, { searchInput });

    return (
      <Layout>
        <SEO title="Home" />
        <section className="section">
          <label className="search" htmlFor="search-input">Search</label>
          <input name="search-input" id="search-input" type="text" className="input" placeholder="Search..." onChange={evt => this.handleSearch(evt)}/>
        </section>
        <section className="section">
            { externalUrls }
        </section>
      </Layout>
    );
  }
}

export default IndexPage
