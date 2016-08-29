import React from "react";
import MainLayout from '../../components/main-layout/index.js';
import renderClient from '../../client.js';
import render from '../../server.js';

export default class ReviewsPage extends React.Component {
  render() {
    return (
      <MainLayout
        url={this.props.url}
        pageTitle='Reviews'>
        <div>{'Rest of content...'}</div>
      </MainLayout>
    );
  }
}
