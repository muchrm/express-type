export default function(router) {
    'use strict';
    // This will handle the url calls for /users/:user_id
    router.route('/:userId')
    .get(function(req, res, next) {
      res.json({data:"kuy"})
    }) 
    .put(function(req, res, next) {
      // Update user
    })
    .patch(function(req, res,next) {
      // Patch
    })
    .delete(function(req, res, next) {
      // Delete record
    });
  
    router.route('/')
    .get(function(req, res, next) {
        res.json({ data: "kuy" });
    }).post(function(req, res, next) {
      // Create new user
    });
  };