import React, { useState } from 'react'

function App() {
  const [transformation, setTransformation] = useState('Kaioken')

  const toggleTransformation = () => {
    setTransformation((prev) =>
      prev === 'Kaioken' ? 'SuperSaiyan' : 'Kaioken'
    )
  }

  return (
    <div>
      <h1>Transformation App</h1>
      <p>
        Current Transformation: {transformation}
      </p>
      <button onClick={toggleTransformation}>Toggle Transformation</button>
    </div>
  )
}

export default App
