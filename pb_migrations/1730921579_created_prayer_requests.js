/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "7a9zh9fc7zg7ajf",
    "created": "2024-11-06 19:32:59.044Z",
    "updated": "2024-11-06 19:32:59.044Z",
    "name": "prayer_requests",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bui6pjnf",
        "name": "request",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ju9bs8ou",
        "name": "user",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
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
  const collection = dao.findCollectionByNameOrId("7a9zh9fc7zg7ajf");

  return dao.deleteCollection(collection);
})
