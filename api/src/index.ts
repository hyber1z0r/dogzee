require('dotenv').config();
import app from './app';
import sequelize from './db';

(async () => {
  try {
    await sequelize.authenticate();
    app.listen(app.get('port'), () => {
      console.log('Listening on port %s', app.get('port'));
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
