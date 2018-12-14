import React, { Component } from "react";
import { checkJsonType, catchErrors } from "../../utils";

export default class FetchData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      isFetching: true
    };
  }

  componentDidMount() {
    const apiRequest = new Request(
      "https://api.flockler.com/v1/sites/5437/articles"
    );
    fetch(apiRequest)
      .then(checkJsonType)
      .then(response => {
        this.setState({
          articles: this.filterData(response.articles),
          isFetching: false
        });
        return response;
      })
      .catch(catchErrors);
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
    return (
      <React.Fragment>
        {this.state.isFetching
          ? null
          : this.props.children(this.state.articles)}
      </React.Fragment>
    );
  }
}
