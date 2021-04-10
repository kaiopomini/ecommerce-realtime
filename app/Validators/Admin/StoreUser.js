'use strict'

class AdminStoreUser {
  get rules () {
    let userID = this.ctx.params.id
    let rule = ''
    //significa que o usuario está atualizando

    if(userID) {
      rule = `unique:users,email,id,${userID}`
    } else {
      rule = `unique:uses,email|required`
    }
    return {
      // validation rules
      email: rule,
      image_id: 'exists:images,id'
      
    }
  }
}

module.exports = AdminStoreUser
