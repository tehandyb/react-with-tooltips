import React from 'react'
import ReactDOM from 'react-dom'
import WithTooltips from '../src/WithTooltips'

const demoData = [
  { name: 'Andrew', value: 100 },
  { name: 'Bobby', value: 50 },
  { name: 'Christine', value: 80 },
  { name: 'Jen', value: 89 }
]

const SomeComponent = ({ data, onMouseOver }) => {
  const elementsWithTooltips = data.map(d => (
    <div 
      data-tip 
      data-for="global-tooltip"
      onMouseOver={() => onMouseOver(d)}
    >
      {d.name}
    </div>
  ))

  return <div>{elementsWithTooltips}</div>
}

const SomeComponentWithTooltips = WithTooltips(SomeComponent)

ReactDOM.render(
  <SomeComponentWithTooltips data={demoData} />,
  document.getElementById('entry')
)