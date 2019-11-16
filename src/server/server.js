import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import staticRoutes from './routes/staticRoutes';
import helmet from 'helmet';

dotenv.config();
const ENV = process.env.NODE_ENV;
const { PORT } = process.env;
const app = express();
app.use(express.static(`${__dirname}/public`));

if (ENV === 'development') {
  console.log('Loading dev config');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleWare = require('webpack-dev-middleware');
  const webpackHotMiddleWare = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = {
    contentBase: `http://localhost:${ PORT }`,
    port: PORT,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true },
  };
  app.use(webpackDevMiddleWare(compiler, serverConfig));
  app.use(webpackHotMiddleWare(compiler));
} else {
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable('x-powered-by');
}

app.get('*', staticRoutes);

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Ocurrio el siguiente error: ${err}`);
  }
  console.log(`Server running on http://localhost:${PORT}`);
});
