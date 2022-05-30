function trimString(string, length) {
  if (!string) return null
  return string.length < length ? string : string.substr(0, length-1) + "..."
}

async function contentResolver(uri) {
  async function getData(uri) {
    const response = await fetch(uri);
  
    return response.json();
  }
  
  const data = await getData(uri);
  
  console.log({ data })
  return data
}

const fetchData = async (uri) => {
  const response = await fetch(uri)
  const data = await response.json()
  console.log(data.content)
  if (data.content) return data.content
}

export {
  trimString,
  contentResolver,
  fetchData
}