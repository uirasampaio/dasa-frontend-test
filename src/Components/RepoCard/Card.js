import React from 'react';


export const RepoCard = (props) => {
  console.log(props)
  const { name, language, watchers, stargazers_count, html_url } = props
  const { avatar_url} = props.owner
  return (
    <div>
      <h1>{name}</h1>
      <img style={{ width: '20px'}}src={avatar_url} alt={`${name} avatar`} />
      <div>{watchers}</div>
      <div>{stargazers_count}</div>
      <a href={html_url}>Go to github</a>
      {language && <ul>{language}</ul>}
    </div>
  )
}

