/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "0e8iyvomxox1qky",
    "created": "2024-11-03 22:06:31.014Z",
    "updated": "2024-11-03 22:06:31.014Z",
    "name": "masstype",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fxzqdddh",
        "name": "mass_type",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0e8iyvomxox1qky");

  return dao.deleteCollection(collection);
})
