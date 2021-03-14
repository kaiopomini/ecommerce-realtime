'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  // Categories ressource routes
  Route.resource('categories', 'CategoryContoller').apiOnly()

  // Products ressource routes
  Route.resource('products', 'ProductContoller').apiOnly()

  // Coupon ressource routes
  Route.resource('coupons', 'CouponController').apiOnly()

  // Order ressource routes
  Route.resource('orders', 'OrderController').apiOnly()

  // Image ressource routes
  Route.resource('images', 'ImageController').apiOnly()

  // Users ressource routes
  Route.resource('users', 'UserController').apiOnly()
})
  .prefix('v1/admin')
  .namespace('Admin')