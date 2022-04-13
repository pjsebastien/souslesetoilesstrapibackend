module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8ef2beb34958e14c66baa7e604409fc3'),
  },
});
