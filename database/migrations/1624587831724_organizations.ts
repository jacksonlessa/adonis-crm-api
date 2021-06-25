import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Organizations extends BaseSchema {
  protected tableName = 'organizations'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('account_id').index().notNullable()
      table.string('name', 100).notNullable()
      table.string('email', 50)
      table.string('phone', 50)
      table.string('address', 150)
      table.string('city', 50)
      table.string('region', 50)
      table.string('country', 2)
      table.string('postal_code', 2)
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      table.timestamp('deleted_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
