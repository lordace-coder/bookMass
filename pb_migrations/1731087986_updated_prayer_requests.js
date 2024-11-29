/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7a9zh9fc7zg7ajf")

  // update
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7a9zh9fc7zg7ajf")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1xjwyj6i",
    "name": "urgency",
    "type": "relation",
    "required": true,
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

  return dao.saveCollection(collection)
})
