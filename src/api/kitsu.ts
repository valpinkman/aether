import { MangaRaw } from '../types/MangaTypes'
const BASE_URL = 'https://kitsu.io/api/edge'

// const normalizeMangaResults = (mangaData) => {

// }

/**
 * Search a manga with the given `name`
 * @param name name of manga to search
 * @param opts fetch options
 */
const searchManga = async (name: string, opts = {}): Promise<MangaRaw[]> => {
  const url = `${BASE_URL}/manga?filter[text]=${name}`
  try {
    const res = await fetch(url, opts && { ...opts })
    const json: {
      data: MangaRaw[];
    } = await res.json()
    if (json && json.data && json.data.length > 0) {
      return json.data
    }

    return []
  } catch (error) {
    if (error && error.name === 'AbortError') return []
    console.log('error', { error })
    throw error
  }
}

export default {
  searchManga,
}
