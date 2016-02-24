import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import routes from './routes/index';
import serverRendered from './routes/server-rendered';
import {notFound, devError, prodError} from './routes/error-handler';

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon(path.join(__dirname, 'public/favicon', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/server', serverRendered);

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
