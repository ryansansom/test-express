import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { compile } from 'pug';
import slash from 'slash';
import fs from 'fs';

import routes from './routes/index';
import {notFound, devError, prodError} from './routes/error-handler';

const app = express();
const layoutLoc = path.join(__dirname, 'views/react-layout.jade');
const masterLayout = fs.readFileSync(layoutLoc, 'utf8');
const layoutFunc = compile(masterLayout, {filename: layoutLoc});

// view engine setup
app.set('views', path.join(__dirname, 'react/pages'));
app.set('view engine', 'js');
app.engine('js', (view, locals, cb) => {
  locals.props = Object.assign({}, locals._locals.props, locals.props);
  delete locals.settings;
  delete locals._locals;
  delete locals.cache;
  locals.bundleName = slash(path.relative(__dirname, view)).replace(/^react\/pages\/([^\/]+).*$/, '$1');
  const page = require(view);
  page.default(locals.props)
    .then(content => {
        locals.content = content;
        cb(null, layoutFunc(locals));
    })
    .catch((err) => {
      return cb(err);
    });
});

app.use(favicon(path.join(__dirname, 'public/favicon', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'site/public')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(notFound);

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(devError);
}

// production error handler
// no stacktraces leaked to user
app.use(prodError);


module.exports = app;
