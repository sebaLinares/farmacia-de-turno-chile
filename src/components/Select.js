import React from 'react'

const Select = ({ setSelectValue, options, defaultOptionLegend }) => (
  <div className="md:hidden">
    <select
      className="h-8 w-56 md:w-64 border-2 border-black rounded-lg focus:shadow-outline focus:outline-none text-base"
      onChange={event => setSelectValue(event.target.value)}
    >
      <option className="text-6xl">{defaultOptionLegend}</option>
      {options.length > 0
        && options.map(a => (
          <option className="text-6xl" key={a.id} value={a.id}>
            {a.name}
          </option>
        ))}
    </select>
  </div>
)

export default Select
