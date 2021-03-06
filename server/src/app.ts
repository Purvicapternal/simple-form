const cors = require('cors');
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Routes } from './routes';

class App {
  public app: express.Application;
  public router: Routes = new Routes();
  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cors());
    this.router.routes(this.app);
  }
}

export default new App().app;