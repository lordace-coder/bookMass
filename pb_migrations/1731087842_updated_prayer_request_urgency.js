/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sf738f7nckh2mlx")

  // remove
  collection.schema.removeField("g3c7dxhx")

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sf738f7nckh2mlx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g3c7dxhx",
    "name": "urgency",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("ilwv3een")

  return dao.saveCollection(collection)
})
