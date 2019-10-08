import React, { useState, SyntheticEvent, useEffect } from 'react'
import { MangaRaw } from './types/MangaTypes'
import kitsu from './api/kitsu'
import logo from './logo.svg'
import './App.css'
import Manga from './components/manga/manga'

function App() {
  const [value, setValue] = useState('')
  const [results, setResults] = useState<MangaRaw[]>([])

  const setVal = (e: SyntheticEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal

    const search = async (signal: AbortSignal) => {
      if (!value) return
      const res = await kitsu.searchManga(value, { method: 'get', signal })
      console.log(res)
      if (res && res.length > 0) {
        setResults(res)
      }
    }

    search(signal)

    return () => {
      controller.abort()
    }
  }, [value, setResults])

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
        {results.length > 0 ? results.map(result => <Manga manga={result} key={result.id} />) : null}
      </div>
    </div>
  )
}

export default App
