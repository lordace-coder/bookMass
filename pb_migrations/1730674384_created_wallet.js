/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "8qlgw58cwsdpzsq",
    "created": "2024-11-03 22:53:03.941Z",
    "updated": "2024-11-03 22:53:03.941Z",
    "name": "wallet",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mif2psbe",
        "name": "balance",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
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
  const collection = dao.findCollectionByNameOrId("8qlgw58cwsdpzsq");

  return dao.deleteCollection(collection);
})
