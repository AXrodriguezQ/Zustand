//import { shallow } from "zustand/shallow"
import { useCounterStore } from "./store/counterStore"

const App = () => {

  // ? Bringing many values at the same time from the global context
  // ? 'Shallow' It is so that the object variables can be modified
  //  const values = useCounterStore(state => ({
  //    counter: state.count,
  //    userName: state.name 
  //  }), shallow)

  // ? Destructure
  //  const { count, name} = useCounterStore(state => ({
  //    state.count,
  //    state.name 
  //  }), shallow)

  // ? Bring the global context
  const count = useCounterStore(state => state.count)

  //const increment = useCounterStore(state => state.increment)
  const { posts, increment, multiplay } = useCounterStore()

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => increment(1)}>increment</button>
      <button onClick={() => multiplay(5)}>multiplay</button>
      <hr />
      {
        JSON.stringify(posts)
      }
    </div>
  )
}

export default App
