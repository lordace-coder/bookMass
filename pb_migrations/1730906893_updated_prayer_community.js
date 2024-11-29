/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lum789er255hyzk")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5xxuxqwm",
    "name": "community",
    "type": "text",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "min": null,
      "max": 200,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lum789er255hyzk")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5xxuxqwm",
    "name": "name",
    "type": "text",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "min": null,
      "max": 200,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
