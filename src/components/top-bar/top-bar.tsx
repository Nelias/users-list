import React from 'react'
import { useDispatch } from 'react-redux'
import { Header, Button, Search } from './top-bar-styles'
import { setSearchPhrase } from '../../store/actions/search'

const TopBar: React.FC<{}> = () => {
  const [inputPhrase, setInputPhrase] = React.useState('')
  const dispatch = useDispatch()

  const handleSearchInput = (phrase: string) => {
    setInputPhrase(phrase)
    setSearchPhrase(dispatch, phrase)
  }

  const handleKeyPress = (key: string) => {
    if (key === 'Enter') {
      setSearchPhrase(dispatch, inputPhrase)
    }
  }

  return (
    <Header>
      <Search
        placeholder="Search users"
        onChange={(e) => handleSearchInput(e.target.value)}
        onKeyDown={(e) => handleKeyPress(e.key)}
        type="search"
        aria-label="Search through site content"
      />
      <Button
        onClick={() => {
          setSearchPhrase(dispatch, inputPhrase)
        }}
        type="button"
      >
        Search
      </Button>
    </Header>
  )
}

export default TopBar
