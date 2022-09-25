module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2a3400e83b245e6c7d3e945e0240c3ee'),
  },
});
