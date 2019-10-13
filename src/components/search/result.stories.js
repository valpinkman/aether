// @ts-check
/* eslint @typescript-eslint/camelcase: 0 */
import React from 'react'
import { action } from '@storybook/addon-actions'

import Result from './result'

const entity = {
  aliases: 'ナルト',
  api_detail_url: 'https://comicvine.gamespot.com/api/volume/4050-34585/',
  count_of_issues: 72,
  date_added: '2010-07-21 20:51:34',
  date_last_updated: '2017-02-22 21:22:42',
  description:
    '<p><b>Proper Japanese Title</b>: ナルト</p><p>Originally serialized in <a href="https://comicvine.gamespot.com/weekly-shonen-jump/4050-43519/" data-ref-id="4050-43519">Weekly Shonen Jump</a>. Translated into English as <a href="/naruto/4050-18836/" data-ref-id="4050-18836">Naruto</a> by <a href="//www.comicvine.com/viz/4010-428/" data-ref-id="4010-428">Viz</a>.</p>',
  first_issue: {
    api_detail_url: 'https://comicvine.gamespot.com/api/issue/4000-225842/',
    id: 225842,
    issue_number: '1',
    name: 'Uzumaki Naruto',
  },
  id: 0,
  image: {
    icon_url:
      'https://comicvine.gamespot.com/api/image/square_avatar/5715426-01.jpg',
    image_tags: 'All Images',
    medium_url:
      'https://comicvine.gamespot.com/api/image/scale_medium/5715426-01.jpg',
    original_url:
      'https://comicvine.gamespot.com/api/image/original/5715426-01.jpg',
    screen_large_url:
      'https://comicvine.gamespot.com/api/image/screen_kubrick/5715426-01.jpg',
    screen_url:
      'https://comicvine.gamespot.com/api/image/screen_medium/5715426-01.jpg',
    small_url:
      'https://comicvine.gamespot.com/api/image/scale_small/5715426-01.jpg',
    super_url:
      'https://comicvine.gamespot.com/api/image/scale_large/5715426-01.jpg',
    thumb_url:
      'https://comicvine.gamespot.com/api/image/scale_avatar/5715426-01.jpg',
    tiny_url:
      'https://comicvine.gamespot.com/api/image/square_mini/5715426-01.jpg',
  },
  issues: [],
  last_issue: {
    api_detail_url: 'https://comicvine.gamespot.com/api/issue/4000-479179/',
    id: 479179,
    issue_number: '72',
    name: 'Naruto Uzumaki!!',
  },
  locations: undefined,
  name: 'naruto',
  people: undefined,
  publisher: {
    api_detail_url: 'https://comicvine.gamespot.com/api/publisher/4010-1867/',
    id: 1867,
    name: 'Shueisha',
  },
  site_detail_url: 'https://comicvine.gamespot.com/naruto/4050-34585/',
  start_year: '2000',
  resource_type: 'volume',
}

export default {
  title: 'Search Result',
}

export const WithData = () => {
  return <Result entity={entity} getInfos={action('getInfos')} />
}
