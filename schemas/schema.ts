import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import authorDocument from './documents/author'
import postDocument from './documents/post'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    authorDocument,
    postDocument
  ])
})
