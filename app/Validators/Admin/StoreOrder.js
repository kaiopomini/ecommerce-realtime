'use strict'

class AdminStoreOrder {
  get rules () {
    return {
      // validation rules
      'items.*.product_id': 'exists:products,id',
      'idems.*.quantity': 'min:1'
    }
  }
}

module.exports = AdminStoreOrder
