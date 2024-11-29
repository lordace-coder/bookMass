/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nnh9nuyiwl32nsv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zvy4td5h",
    "name": "read",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "btm19clt",
    "name": "reciever",
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
  const collection = dao.findCollectionByNameOrId("nnh9nuyiwl32nsv")

  // remove
  collection.schema.removeField("zvy4td5h")

  // remove
  collection.schema.removeField("btm19clt")

  return dao.saveCollection(collection)
})
