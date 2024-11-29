/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sf738f7nckh2mlx")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ilwv3een",
    "name": "urgency",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 1,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sf738f7nckh2mlx")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ilwv3een",
    "name": "urgency",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
})
