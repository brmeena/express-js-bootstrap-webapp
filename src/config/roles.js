const allRoles = {
  customer: [],
  admin: ['addClient','getUsers', 'manageUsers'],
  staff: ['getUsers', 'manageUsers'],  
  guest:[],
  client_admin: [],
  client_user: [],
  client_staff:[],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
