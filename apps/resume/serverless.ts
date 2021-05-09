import 'zone.js/dist/zone-node';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';
import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';
import * as compression from 'compression';
export const app = express();

app.use(compression())
const distFolder = join(process.cwd(), 'dist/resume/browser');
const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';
// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)


const domino = require('domino');
const fs = require('fs');
const path = require('path');

// Use the browser index.html as template for the mock window
const template = fs
  .readFileSync(path.join(join(process.cwd(), 'dist/resume/browser'), 'index.html'))
  .toString();

const window = domino.createWindow(template);
global['window'] = window;
global['document'] = window.document;

app.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
}));
app.set('view engine', 'html');
app.set('views', distFolder);
// Example Express Rest API endpoints
// app.get('/api/**', (req, res) => { });
// Serve static files from /browser
app.get('*.*', express.static(distFolder, {
    maxAge: '1y'
}));
// All regular routes use the Universal engine
app.get('*', (req, res) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
});
export * from './src/main.server';
