module.exports = function (req) {
  const { method, path, params, headers, query, body } = req

  if (method !== 'GET')
    throw new Error('Invalid request.  Must be GET request.')

  if (!params.resource) throw new Error('Invalid request.  Missing resource.')
  const resource = params.resource

  let identifier
  if (params.identifier) identifier = params.identifier

  if (JSON.stringify(query) === '{}')
    throw new Error('Invalid request.  Missing mandatory query params.')

  let fields = {}
  if (query.fields) {
    Object.keys(query.fields).forEach((field) => {
      fields[field] = query.fields[field].split(',')
    })
  }

  let filters = {}
  if (query.filter) {
    // TODO https://www.jsonapi.net/usage/reading/filtering.html
    filters = query.filter
  }

  let sort = {}
  if (query.sort) {
    Object.keys(query.sort).forEach((field) => {
      sort[field] = query.sort[field].split(',')
    })
  }

  const result = {
    resource,
    identifier,
    fields,
    filters,
    sort,
  }
  console.log(result)
  return result
}
