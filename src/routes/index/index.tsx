import React, { useState, useEffect } from 'react'

import { ComicVineResult } from '../../types/ComicVineTypes'
import { searchVolume, getResource } from '../../api/comicvine'
import { useDebounce } from '../../hooks/useDebounce'
import { useUser, useCollections } from '../../hooks/useFire'
import Result from '../../components/search/result'

import './index.css'
import Box, { Container } from '../../components/box/box'
import Input from '../../components/input/input'

function App() {
  const [value, setValue] = useState('')
  const [page, setPage] = useState(1)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mode, setMode] = useState('login')
  const [infos, setInfos] = useState<ComicVineResult | null>(null)
  const [results, setResults] = useState<ComicVineResult[]>([])
  const { user, loading, login, logout, signup } = useUser()
  const { create } = useCollections((user ? user.uid : ''))

  const debouncedValue = useDebounce(value, 500)

  const getNextResults = (nb?: number) => {
    if (nb) {
      setPage(nb)
    }

    setPage(page + 1)
  }

  const getInfo = async (url: string) => {
    const res = await getResource(url)
    const { results: apiResults } = res
    console.log(apiResults)
    setInfos(apiResults)
    return res
  }

  useEffect(() => {
    const search = async (
      val: string,
      page: number,
      setter: (value: ComicVineResult[]) => void
    ) => {
      const res = await searchVolume(val, page)
      const { results: apiResults } = res
      console.log(apiResults)
      if (results.length > 0) {
        setter([...results, ...apiResults])
      } else {
        setter(apiResults)
      }
    }

    if (debouncedValue) {
      search(debouncedValue, page, setResults)
    }

  }, [debouncedValue, page, setResults])

  return (
    // <Container>
    //   <h1>Hello</h1>
    // </Container>
    // <div>
    //   <Potion width="50%" />
    // </div>
    <div className="App">
      <header className="App-header">
        {/* <input
          onChange={e => setValue(e.currentTarget.value)}
          name="manga title"
          type="text"
        /> */}
        <Input
          // onChange={e => setValue(e.currentTarget.value)}
          name="manga title"
          type="text"
          color="text.main"
        />
      </header>
      <div className="content">
        {user ? (
          <Box bg="background.default">
            <div>{user.email}</div>
            <div>{user.uid}</div>
            <button onClick={() => logout()}>Logout</button>
            <button onClick={() => create('manga')}>
              Create Manga Collection
            </button>
          </Box>
        ) : !user && !loading ? (
          <div>
            <input
              type="email"
              placeholder="email"
              onChange={e => setEmail(e.currentTarget.value)}
            />
            <input
              type="password"
              placeholder="password"
              onChange={e => setPassword(e.currentTarget.value)}
            />
            <button
              onClick={() =>
                mode === 'login'
                  ? login(email, password)
                  : signup(email, password)
              }
            >
              {mode === 'login' ? 'Login' : 'Signup'}
            </button>
            <button
              onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
            >
              switch
            </button>
          </div>
        ) : loading ? (
          <div>Loading...</div>
        ) : null}
        {infos ? <div>infos found</div> : null}
        {results.length > 0 ? (
          <>
            <div>
              {results.map(result => (
                <Result entity={result} key={result.id} getInfos={getInfo} />
              ))}
            </div>
            <div>
              <button onClick={() => getNextResults()}>
                fetch next results
              </button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  )
}

export default App
