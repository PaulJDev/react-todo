export const chunk = (arr, size) => {
    return arr.reduce((a, c, i) => {
      return i % size === 0
      ? [...a, [c]]
      : [...a.slice(0, -1), [...a.slice(-1)[0], c]]
    }, [])
}