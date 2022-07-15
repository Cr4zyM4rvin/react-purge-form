import React from "react"

const PurgeForm = ({ formdata, children, purger, onDataChange }) => {
  const [data, setData] = React.useState({ ...formdata })
  const Children = children

  const doPurge = (key, val) => {
    if (purger?.[key])
      for (const rule of purger?.[key])
        if (!rule(val))
          return rule
    return false
  }

  const handleSet = (key, val) => {
    const purged = doPurge(key, val)
    if (purged) {
      return setData({ ...data, [key]: { purged } })
    }
    return setData({ ...data, [key]: val }) && onDataChange?.(data)
  }

  const purging = _ => {
    for (const key in purger)
      if (Object.hasOwnProperty.call(purger, key))
        if (doPurge(key, data[key]))
          return true
    return false
  }

  return <Children set={handleSet} values={data} purging={purging} />
}

export default PurgeForm