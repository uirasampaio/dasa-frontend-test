import React, { useState } from 'react';
import { getUserRepo } from '../../Service/Api'
import { Loading } from '../../Components/Loading/Loading'
import { RepoCard } from '../../Components/RepoCard/Card'

export const RepoView = () => {
  const [userRepo, setUserRepo] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSearchQuery = (e) => {
    const { value } = e.target
    setSearchQuery(value)
  }

  const handleSearch = () => {
    if (!searchQuery || searchQuery === '') return

    setIsLoading(true)
    getUserRepo(searchQuery)
      .then(answer => {
        setUserRepo(answer.data)
        setIsLoading(false)
        setSearchQuery('')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <label forHtml='searchQuery'></label>
      <input
        id='searchQuery'
        value={searchQuery}
        onChange={handleSearchQuery}
        placeholder='search for repo'
        onKeyDown={handleSearch}
      />
      <button onClick={handleSearch}>Search</button>
      {isLoading ? <Loading /> :
        userRepo.map((item, index) => {
          return <RepoCard {...item} />
        })
      }
    </div>
  )
}