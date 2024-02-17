const Filter = ({filter, onFilterChange}) => {
    return (
    <form>
      <div>
        filter shown with <input
        value = {filter}
        onChange = {onFilterChange}
        />
      </div>
    </form>
    )
  }

export default Filter