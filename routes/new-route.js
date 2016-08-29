import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../react/components/app';
import Home from '../react/pages/home';
import Contact from '../react/pages/contact';
import Gallery from '../react/pages/gallery';
import Reviews from '../react/pages/reviews';
import StorageServices from '../react/pages/storage-services';
import StorageSolutions from '../react/pages/storage-solutions';

const routes = (
  <Route path="/">
    <IndexRoute component={Home} url="/"/>
    <Route component={Contact} path="contact"/>
    <Route component={Gallery} path="gallery"/>
    <Route component={Reviews} path="reviews"/>
    <Route component={StorageServices} path="storage-services"/>
    <Route component={StorageSolutions} path="storage-solutions"/>
  </Route>
);

export default routes;
