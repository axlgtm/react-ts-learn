import { FormEvent, useState } from 'react'

function App() {
  const [items, setItems] = useState<string[]>([])

  function onSubmit (e: FormEvent<HTMLFormElement>) {

  }

  return (<>
    <label>
      Search :
      <input type="search" />
    </label>
    <br />
    <br />
    <form onSubmit={onSubmit}>
      <label>
        New Item: 
        <input type="text" />
      </label>
      <button type='submit'>Add</button>
    </form>
    <h1>Items: </h1>
    {
      items.map((item, index) => <p key={index}>{item}</p>)
    }
  </>)
}

export default App
