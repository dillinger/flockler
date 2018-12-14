import React, { Component } from "react";
import { checkJsonType, catchErrors } from "../../utils";
import "./fetchData.css";

import response from "../../response.json";

export default class FetchData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
      articles: [],
      isFetching: true
    };
  }

  componentDidMount() {
    console.log(response.articles);

    this.setState((state, props) => ({
      response: response,
      articles: this.filterData(response.articles),
      isFetching: false
    }));
  }

  handleFilterClick = (e, type) => {
    e.preventDefault();
    const filterFn = this.filterByType(type);
    this.setState((state, props) => ({
      articles: filterFn(state.response.articles)
    }));
  };

  filterByTagName = tagName => {
    const rawArticles = this.state.response.articles;
    this.setState((state, props) => ({
      articles: this.isTag(tagName)
        ? rawArticles.filter(item => {
            return item.tags.includes(this.replaceHash(tagName.trim()));
          })
        : rawArticles
    }));
  }

  filterByType(typeName) {
    return response => {
      return typeName === "all"
        ? response
        : response.filter(item => {
            return item.type === typeName;
          });
    };
  }

  isTag(str) {
    return str.indexOf("#") === 0 && str.length > 3;
  }

  replaceHash(str) {
    return str.replace(/\#/, "");
  }

  filterData(response) {
    return response.map(item => {
      const {
        attachments,
        cover_url = "",
        full_url,
        published_at,
        title,
        type,
        tags
      } = item;
      return {
        attachments,
        cover_url,
        full_url,
        published_at,
        title,
        tags,
        type
      };
    });
  }

  render() {
    const propsToPass = Object.assign({}, this.state, {
      handleFilterClick: this.handleFilterClick,
      handleChange: this.filterByTagName
    });
    return (
      <div className="page-content">
        {this.state.isFetching ? null : this.props.children(propsToPass)}
      </div>
    );
  }
}
