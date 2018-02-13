const knex = require('../../db');

function getAllUsers() {
  return knex('users')
}

function getOneUser(id) {
  return knex('users')
    .where({ 'id': id })
    .first();
}

module.exports = { getAllUsers, getOneUser };
