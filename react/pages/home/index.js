import React from "react";
import MainLayout from '../../components/main-layout/index.js';
import renderClient from '../../client.js';
import render from '../../server.js';

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <MainLayout
          url={this.props.url}
          pageTitle='Welcome to Ample Storage'>
          <div className='content-panel'>
            <p>Do you need a secure, 24hr self storage facility that meets all your storage requirements whilst remaining affordable to domestic and commercial customers?</p>
            <p>At Ample Storage we pride ourselves on offering a personalised and friendly service in a safe and secure containerised storage facility on Purdeys Industrial Estate, Rochford and we believe our storage services, and prices, are second to none.</p>
            <p>Each storage unit is clean, dry and easy to access. We have a fully enclosed yard with 7' perimeter fencing, electronic gate access and 24 hour CCTV for added security and peace of mind.</p>
            <p>Don't look any further for a professional, great value storage company in the Southend-on-Sea area. Ample Storage caters for all your self-storage needs. Call us now.</p>
          </div>
        </MainLayout>
      </div>
    );
  }
}

export default function (props) {
  return render(MainPage, props);
}

//client rendering
if (process.env.CLIENT_RENDER) {
  require('./small.less');
  renderClient(MainPage);
}