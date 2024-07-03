import React from 'react'

const SearchBox = () => {
    const [active,setActive]=React.useState(false);
  return (
    <div className="mb-4 mt-2 font-Google2 flex justify-center">
    <label
      htmlFor="search"
      className="hidden mb-2 text-sm font-medium text-green-700 dark:text-green-500"
    >
      {`Success input`}
    </label>
    <input
      type="text"
      id="search"
      className={`border ${active?"border-green-500 placeholder-green-700 focus:ring-green-500 focus:border-green-500 ":"border-mytext/50 placeholder-mytext"} text-mytext w-1/2 text-xs rounded-lg bg-copy_secondary block py-1.5 px-2.5`}
      placeholder="Search Project .."
    />
    
  </div>
  )
}

export default SearchBox
