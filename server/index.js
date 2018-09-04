import express from 'express';
import exphbs from 'express-handlebars';
import compression from 'compression';
import helmet from 'helmet';

const app = express();

app.use(helmet());
app.use(compression());
app.use('/public', express.static('dist'));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => res.render('home'));

app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}`));