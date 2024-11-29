/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7a9zh9fc7zg7ajf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5qd1ggns",
    "name": "comment",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "7ff7zfwhc3zgpto",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sjupkcdi",
    "name": "praying",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7a9zh9fc7zg7ajf")

  // remove
  collection.schema.removeField("5qd1ggns")

  // remove
  collection.schema.removeField("sjupkcdi")

  return dao.saveCollection(collection)
})
