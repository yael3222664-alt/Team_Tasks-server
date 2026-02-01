import db from '../db.js';

export function listUsers(req, res) {
  const users = db
    .prepare('SELECT id, name, email FROM users ORDER BY name')
    .all();
  res.json(users);
}
