/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xvimhefttqb4g5z")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "guieyzlf",
    "name": "successful",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "teah47ll",
    "name": "amount",
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
  const collection = dao.findCollectionByNameOrId("xvimhefttqb4g5z")

  // remove
  collection.schema.removeField("guieyzlf")

  // remove
  collection.schema.removeField("teah47ll")

  return dao.saveCollection(collection)
})
