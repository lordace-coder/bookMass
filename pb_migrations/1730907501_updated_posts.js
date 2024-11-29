/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0xkj4mpc1ercyk4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gv1avzya",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0xkj4mpc1ercyk4")

  // remove
  collection.schema.removeField("gv1avzya")

  return dao.saveCollection(collection)
})
