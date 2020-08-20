db.auth('admin', 'adminpass')
db = db.getSiblingDB('db_mongo')

db.createUser(
  {
    user: 'user',
    pwd: 'userpass',
    roles: [
      {
        role: 'readWrite',
        db: 'db_mongo',
      },
    ],
  },
);