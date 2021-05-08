import { axios } from 'axios'
/**
 * @param {Object} params - your passed data
 * @return {Promise<unknown>}
 */
export const get[FTName | pascalcase] = params =>
  axios.get('api-path', { params }).then(res => res.data)

