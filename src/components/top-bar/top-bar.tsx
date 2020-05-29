import React from 'react'
import { connect } from 'react-redux'
import { Header, Button, Search } from './top-bar-styles'

export const TopBar: React.FC<{}> = () => {
  const [inputPhrase, setInputPhrase] = React.useState('')

  const handleSearchInput = (phrase: string) => {
    setInputPhrase(phrase)
  }

  const handleKeyPress = (key: string) => {
    if (key === 'Enter') {
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
        value={inputPhrase}
      />
      <Button onClick={() => {}} type="button">
        Search
      </Button>
    </Header>
  )
}

export default connect(null, {})(TopBar)
