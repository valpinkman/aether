import React from 'react'
import styled from 'styled-components'
import { ComicVineResult } from '../../types/ComicVineTypes'

interface Props {
  manga: ComicVineResult;
  getInfos?: (url: string) => Promise<any>;
}

const Img = styled.img`
  max-width: 100%;
`

const Manga = ({ manga, getInfos }: Props) => {
  return (
    <section>
      <div>
        <h2>{manga.name}</h2>
        <Img src={manga.image.original_url} />
      </div>
      <div>
        {getInfos && manga.site_detail_url ? (
          <button onClick={() => getInfos(manga.api_detail_url)}>
            get infos
          </button>
        ) : null}
      </div>
    </section>
  )
}

export default Manga
