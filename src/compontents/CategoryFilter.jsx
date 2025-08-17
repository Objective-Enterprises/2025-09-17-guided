export default function CategoryFilter(props) {
  const categories = props.tasks.map(task => task.category)
  const set = new Set(categories)

  const unique = [...set]
  // const unique = []
  // for (const element of set) {
  //   unique.push(element)
  // }

  const options = unique.map(category => {
    return (
      <option key={category} value={category}>
        {category}
      </option>
    )
  })
  return (
    <select onChange={event => props.setSelection(event.target.value)}>
      <option value=''>All</option>
      {options}
    </select>
  )
}