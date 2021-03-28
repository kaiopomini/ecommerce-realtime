'use strict'

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/


const Role = use('Role')
class RoleSeeder {
  async run () {

    const admin = new Role()
    admin.name = 'Admin'
    admin.slug = 'admin'
    admin.description = 'Administrador do Sistema'
    await admin.save()

    const manager = new Role()
    manager.name = 'Gerente'
    manager.slug = 'manager'
    manager.description = 'Manager do Sistema'
    await manager.save()

    const client = new Role()
    client.name = 'Cliente'
    client.slug = 'client'
    client.description = 'Cliente do Sistema'
    await client.save()

    // // Cria admin role
    // await Role.create({
    //   name: 'Admin',
    //   slug: 'admin',
    //   description: 'Administrador do sistema'
    // })

    // // Cria o cargo de gerente
    // await Role.create({
    //   name: 'Manager',
    //   slug: 'manager',
    //   description: 'Gerente da loja'
    // })

    // // Cria o cargo Cliente
    // await Role.create({
    //   name: 'Client',
    //   slug: 'client',
    //   description: 'Cliente da loja'
    // })
  }
}

module.exports = RoleSeeder
