
import './App.css'
import Counter from './counter'
import Team from './Team'
import Users from './Users'
function App() {
 
  function handleClick(){
    alert('button click')
  }

  const handleClick2 = ()=>{
    alert('button 2 click')
  }

  const addToFive = (num)=>{
    alert(num + 5);
  }

  return (
    <>
  <h3>React Core Concepts</h3>

  <Users></Users>

  <Team></Team>

<Counter></Counter>

  <button onClick={handleClick}>Click Me</button>
  <button onClick={handleClick2}>Click2</button>
  <button onClick={()=>{alert('third click')}}>third</button>
  <button onClick={()=> addToFive(3)}>Four</button>
    </>
  )
}

export default App
