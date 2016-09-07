'use strict'

import './polyfill'

import asyncstorageDown from 'asyncstorage-down'
import CoreLevelPouch from 'pouchdb-adapter-leveldb-core'
import { extend } from 'js-extend'

function AsyncStoragePouch (opts, callback) {
  const _opts = extend({
    db: asyncstorageDown
  }, opts)

  CoreLevelPouch.call(this, _opts, callback)
}

AsyncStoragePouch.valid = () => () => {
  try {
    return require('react-native').AsyncStorage !== null
  } catch (error) {
    return false
  }
}

AsyncStoragePouch.use_prefix = false

export default function (PouchDB) {
  PouchDB.adapter('asyncstorage', AsyncStoragePouch, true)
}
