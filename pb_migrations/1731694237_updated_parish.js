/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("immlzgwhlad3qlr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "by5xouu0",
    "name": "location",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("immlzgwhlad3qlr")

  // remove
  collection.schema.removeField("by5xouu0")

  return dao.saveCollection(collection)
})
