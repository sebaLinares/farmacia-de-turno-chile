import React from 'react'

const Select = ({ setSelectValue, options, defaultOptionLegend }) => {
  React.useEffect(() => {
    console.log('options..', options)
  }, [options])

  return (
    <div className="md:hidden">
      <select
        className="h-8 w-64 border-2 border-black rounded-lg focus:shadow-outline focus:outline-none"
        onChange={event => setSelectValue(event.target.value)}
      >
        <option>{defaultOptionLegend}</option>
        {options.length > 0
          && options.map(a => (
            <option key={a.id} value={a.id}>
              {a.name}
            </option>
          ))}
      </select>
    </div>
  )
}

export default Select
