/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7a9zh9fc7zg7ajf")

  // remove
  collection.schema.removeField("1xjwyj6i")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ur6kcmzl",
    "name": "urgent",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7a9zh9fc7zg7ajf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1xjwyj6i",
    "name": "urgency",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "sf738f7nckh2mlx",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("ur6kcmzl")

  return dao.saveCollection(collection)
})
