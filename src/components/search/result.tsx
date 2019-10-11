import React from 'react'
import styled from 'styled-components'
import { ComicVineResult } from '../../types/ComicVineTypes'

interface Props {
  entity: ComicVineResult;
  getInfos?: (url: string) => void;
}

const Img = styled.img`
  max-width: 100%;
`

const Result = ({ entity, getInfos }: Props) => {
  return (
    <section>
      <div>
        <h2>{entity.name}</h2>
        <Img src={entity.image.original_url} />
      </div>
      <div>
        {getInfos && entity.site_detail_url ? (
          <button onClick={() => getInfos(entity.api_detail_url)}>
            get infos
          </button>
        ) : null}
      </div>
    </section>
  )
}

export default Result
