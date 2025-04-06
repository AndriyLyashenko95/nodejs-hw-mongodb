import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import initMongoConnection from './db/initMongoConnection.js';
import { getContacts, getContactById } from './services/contacts.js';

initMongoConnection();

const setupServer = () => {
  const app = express();
  
  app.use(cors());
  app.use(express.json());

  app.use(pino());

  app.get('/contacts', getContacts);

  app.get('/contacts/:contactId', getContactById);

  app.all('*', (req, res) => {
    res.status(404).json({ message: 'Not found' });
  });

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

export default setupServer;
