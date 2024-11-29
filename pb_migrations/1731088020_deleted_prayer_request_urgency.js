/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("sf738f7nckh2mlx");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "sf738f7nckh2mlx",
    "created": "2024-11-08 14:51:25.026Z",
    "updated": "2024-11-08 17:44:40.485Z",
    "name": "prayer_request_urgency",
    "type": "base",
    "system": false,
    "schema": [
      {
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
})
