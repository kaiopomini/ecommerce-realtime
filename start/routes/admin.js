'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  // Categories ressource routes
  Route.resource('categories', 'CategoryController').apiOnly().validator(new Map([
    [['categories.store'], ['Admin/StoreCategory']],
    [['categories.updadte'], ['Admin/StoreCategory']],
  ]))

  // Products ressource routes
  Route.resource('products', 'ProductController').apiOnly()

  // Coupon ressource routes
  Route.resource('coupons', 'CouponController').apiOnly()

  // Order ressource routes
  Route.post('orders/:id/discount', 'OrderController.applyDiscount')
  Route.delete('orders/:id/discount', 'OrderController.removeDiscount')
  Route.resource('orders', 'OrderController').apiOnly().validator( new Map(
    [
      [['orders.store'], ['Admin/StoreOrder']]
    ]
  ))

  // Image ressource routes
  Route.resource('images', 'ImageController').apiOnly()

  // Users ressource routes
  Route.resource('users', 'UserController').apiOnly().validator(new Map(
    [
      [['users.store'], ['Admin/StoreUser']],
      [['users.update'], ['Admin/StoreUser']]
    ]
  ))

  
})
  .prefix('v1/admin')
  .namespace('Admin')
  .middleware(['auth', 'is:( admin || manager )'])