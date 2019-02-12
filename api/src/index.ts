require('dotenv').config();
import app from './app';
import sequelize from './db';

(async () => {
  await sequelize.authenticate();
  app.listen(app.get('port'), () => {
    console.log('Listening on port %s', app.get('port'));
  });
})();
