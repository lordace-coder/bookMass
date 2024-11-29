/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "sf738f7nckh2mlx",
    "created": "2024-11-08 14:51:25.026Z",
    "updated": "2024-11-08 14:51:25.026Z",
    "name": "prayer_request_urgency",
    "type": "base",
    "system": false,
    "schema": [
      {
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
  const collection = dao.findCollectionByNameOrId("sf738f7nckh2mlx");

  return dao.deleteCollection(collection);
})
