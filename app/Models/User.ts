import { DateTime } from 'luxon'

import {
  column,
  BaseModel,  
  belongsTo,
  BelongsTo
} from '@ioc:Adonis/Lucid/Orm'
import Account from 'App/Models/Account'

export default class User extends BaseModel {
  @belongsTo(() => Account)
  public account: BelongsTo<typeof Account>

  @column({ isPrimary: true })
  public id: number

  @column()
  public accountId: number | null

  @column()
  public role: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
