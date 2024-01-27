import { useState } from 'react'

const Header = ( {text} ) => (
  <h1>{text}</h1>
)

const MostVoted = ( {anecdotes, votes} ) => {
  const maxVotes = Math.max(...votes)
  if (maxVotes === 0) {
    return (
      <>No votes yet</>
    )
  }
  return (
    <div>
      <>{anecdotes[votes.indexOf(maxVotes)]}</>
      <br></br>
      <>has {maxVotes} votes</>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const randomizeNext = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
    
  }

  return (
    <div>
      <Header text="Anecdote of the day"/>
      {anecdotes[selected]}
      <br></br>
      <>has {votes[selected]} votes</>
      <br></br>
      <button onClick={handleVote}>vote</button>
      <button onClick={randomizeNext}>next anecdote</button>
      <Header text="Anecdote with most votes"/>
      <MostVoted anecdotes={anecdotes} votes={votes}/>
    </div>
  )
}

export default App