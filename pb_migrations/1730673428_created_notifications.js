/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "sdoopi9ztijcpn9",
    "created": "2024-11-03 22:37:08.944Z",
    "updated": "2024-11-03 22:37:08.944Z",
    "name": "notifications",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vjqr9gdq",
        "name": "notification",
        "type": "text",
        "required": true,
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
  const collection = dao.findCollectionByNameOrId("sdoopi9ztijcpn9");

  return dao.deleteCollection(collection);
})
