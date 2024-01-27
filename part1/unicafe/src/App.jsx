import { useState } from 'react'

const Header = ( {text} ) => (
  <h1>{text}</h1>
)

const StatisticLine = ({text, value}) => {
  if (text === 'Positive') {
    return(
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{value} %</td>
        </tr>
      </tbody>
    )
  }
  return(
    <tbody>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </tbody>
  )
}

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <table>
      <StatisticLine text='Good' value = {props.good}/>
      <StatisticLine text='Neutral' value = {props.neutral}/>
      <StatisticLine text='Bad' value = {props.bad}/>
      <StatisticLine text='All' value = {props.all}/>
      <StatisticLine text='Average' value = {(props.good - props.bad) / (props.all)}/>
      <StatisticLine text='Positive' value = {(props.good) / (props.all) * 100}/>
      {/* <p>Positive {(props.good) / (props.all) * 100} %</p> */}
    </table>
  )
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () => {
    return (

      setGood(good + 1),
      setAll(all + 1)

    )
  }
  const handleNeutralClick = () => {
    return (
      setNeutral(neutral + 1),
      setAll(all + 1)
    )
  }
  const handleBadClick = () => {
    return (
      setBad(bad + 1),
      setAll(all + 1)
    )
  }
 
  
  return (
    <div>
      <Header text = "Give feedback" />
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>
      <Header text = "Statistics" />
      <Statistics good = {good} neutral = {neutral} bad = {bad} all = {all}/>
    </div>
  )
}

export default App