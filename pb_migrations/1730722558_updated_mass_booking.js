/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("90mazdsnj6g7vvc")

  collection.viewRule = "@request.auth.id = user.id || @request.auth.priest = true || @request.auth.staff = true"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("90mazdsnj6g7vvc")

  collection.viewRule = "@request.auth.id = user.id || @request.auth.priest = true"

  return dao.saveCollection(collection)
})
