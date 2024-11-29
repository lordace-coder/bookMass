/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0xkj4mpc1ercyk4")

  collection.listRule = "community.members:each ~ @request.auth.id"
  collection.viewRule = ""
  collection.createRule = "@request.auth.id = @collection.prayer_community.leader.id"
  collection.updateRule = "@request.auth.id = @collection.prayer_community.leader.id"
  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0xkj4mpc1ercyk4")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
