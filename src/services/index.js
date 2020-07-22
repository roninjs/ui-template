import config from '../config'
import rest from '../util/rest' 


async function login( username, password ) {
  return await rest.post( `${config.services.host}/auth/login`, { username, password } )
}

async function searchEntities( entity ) {
  return await rest.get( `${config.services.host}/${entity}` )
}

async function getById( entity, id ) {
  return await rest.get( `${config.services.host}/${entity}/${id}` )
}

export default {
  searchEntities,
  getById
}