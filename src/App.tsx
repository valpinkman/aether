import React, { useState, SyntheticEvent, useEffect } from 'react'
import { searchVolume, getResource } from './api/comicvine'
import { useDebounce } from './hooks/useDebounce'
import { ComicVineResult } from './types/ComicVineTypes'
import Manga from './components/manga/manga'
import logo from './logo.svg'
import './App.css'

function App() {
  const [value, setValue] = useState('')
  const [page, setPage] = useState(1)
  const [infos, setInfos] = useState<ComicVineResult | null>(null)
  const [results, setResults] = useState<ComicVineResult[]>([])

  const setVal = (e: SyntheticEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  const debouncedValue = useDebounce(value, 500)

  const search = async (val: string, page: number, setter: (value: ComicVineResult[]) => void ) => {
    const res = await searchVolume(val, page)
    const { results: apiResults } = res
    if (results.length > 0) {
      setter([...results, ...apiResults])
    } else {
      setter(apiResults)
    }

  }

  const getNextResults = (nb?: number) => {
    if (nb) {
      setPage(nb)
    }

    setPage(page + 1)
  }

  const getInfo = async (url: string) => {
    const res = await getResource(url)
    const { results } = res
    setInfos(results)
    return res
  }

  useEffect(() => {
    if (debouncedValue) {
      search(debouncedValue, page, setResults)
    }

  }, [debouncedValue, page, setResults])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input onChange={setVal} name="manga title" type="text" />
      </header>
      <div className="content">
        {infos ? <div>infos found</div> : null}
        {results.length > 0
          ? (
            <>
              <div>
                {results.map(result => (
                  <Manga manga={result} key={result.id} getInfos={getInfo} />
                ))}
              </div>
              <div>
                <button onClick={() => getNextResults()}>fetch next results</button>
              </div>
            </>
          )
          : null}
      </div>
    </div>
  )
}

export default App
