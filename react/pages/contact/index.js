import React from "react";
import MainLayout from '../../components/main-layout/index.js';
import renderClient from '../../client.js';
import render from '../../server.js';

class ContactUsPage extends React.Component {
  render() {
    return (
      <div>
        <MainLayout
          url={this.props.url}
          pageTitle='Contact Us'>
          <div>{'Rest of content...'}</div>
        </MainLayout>
      </div>
    );
  }
}

export default function (props) {
  return render(ContactUsPage, props);
}

//client rendering
if (process.env.CLIENT_RENDER) {
  require('./small.less');
  renderClient(ContactUsPage);
}