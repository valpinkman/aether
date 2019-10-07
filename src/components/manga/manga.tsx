import React from 'react'
import { MangaRaw } from '../../types/MangaTypes'
import styled from 'styled-components'

interface Props {
  manga: MangaRaw;
}

const Img = styled.img`
  max-width: 100%;
`

const Manga = ({ manga }: Props) => {
  return (
    <section>
      <div>
        <h2>{manga.attributes.titles.en || manga.attributes.titles.en_jp}</h2>
        <Img src={manga.attributes.posterImage.original} />
        <ul>
          {manga.attributes.volumeCount ? (
            <li>Volumes: {manga.attributes.volumeCount}</li>
          ) : null}
          {manga.attributes.chapterCount ? (
            <li>Chapters: {manga.attributes.chapterCount}</li>
          ) : null}
        </ul>
      </div>
    </section>
  )
}

export default Manga
