import unfetch from 'isomorphic-unfetch'
import { ComicVineSearchResponse, ComicVineResourceResponse } from '../types/ComicVineTypes'

type SearchResponse = {
  status: 'ok' | 'ko';
  data: ComicVineSearchResponse;
}

type ResourceResponse = {
  status: 'ok' | 'ko';
  data: ComicVineResourceResponse;
}

export const searchVolume = async (
  query: string,
  page: number,
): Promise<ComicVineSearchResponse> => {
  try {
    const res = await unfetch('http://localhost:5000/search', {
      method: 'post',
      body: JSON.stringify({
        query,
        page
      }),
    })

    if (res.ok) {
      const json: SearchResponse = await res.json()
      if (json.data) {
        return json.data
      }

      throw new Error('no results')
    }

    throw new Error('no results')
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getResource = async (url: string): Promise<ComicVineResourceResponse> => {
  try {
    const res = await unfetch('http://localhost:5000/resource', {
      method: 'post',
      body: JSON.stringify({
        url,
      }),
    })

    if (res.ok) {
      const json: ResourceResponse = await res.json()
      return json.data
    }

    throw new Error('no results')
  } catch (error) {
    console.log(error)
    throw error
  }
}