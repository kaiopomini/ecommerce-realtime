'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {

  //relacionamento entre categorias e imagens
  image() {
    return this.belongsTo('App/Models/Image')
  }

  // Relacionamento entre categoria e produtos
  products() {
    return this.belongsToMany('App/Models/Product')
  }
}

module.exports = Category
