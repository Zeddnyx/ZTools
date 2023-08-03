export const binValidator = (bin: string) => {
  if (bin?.length === 3) {
    const random = Math.floor(Math.random() * (9999999999999 - 1000000000 + 1)) + 1000000000
    return `${bin}${random}`
  }
  else if (bin?.length === 4) {
    const random = Math.floor(Math.random() * (999999999999 - 1000000000 + 1)) + 1000000000
    return `${bin}${random}`
  }
  else if (bin?.length === 5) {
    const random = Math.floor(Math.random() * (99999999999 - 1000000000 + 1)) + 1000000000
    return `${bin}${random}`
  }
  else if (bin?.length === 6) {
    const random = Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000
    return `${bin}${random}`
  }
  else if (bin?.length === 7) {
    const random = Math.floor(Math.random() * (999999999 - 100000000 + 1)) + 100000000
    return `${bin}${random}`
  }
  else if (bin?.length === 8) {
    const random = Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000
    return `${bin}${random}`
  }
  else if (bin?.length === 9) {
    const random = Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000
    return `${bin}${random}`
  }
  else if (bin?.length === 10) {
    const random = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000
    return `${bin}${random}`
  }
  else if (bin?.length === 11) {
    const random = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000
    return `${bin}${random}`
  }
  else if (bin?.length === 12) {
    const random = Math.floor(Math.random() * (9998 - 1000 + 1)) + 1000
    return `${bin}${random}`
  }
  else if (bin?.length === 13) {
    const random = Math.floor(Math.random() * (999 - 100 + 1)) + 100
    return `${bin}${random}`
  }
  else if (bin?.length === 14) {
    const random = Math.floor(Math.random() * (99 - 10 + 1)) + 10
    return `${bin}${random}`
  }
  else if (bin?.length === 15) {
    const random = Math.floor(Math.random() * (9 - 0 + 0)) + 0
    return `${bin}${random}`
  }
  else {
    return bin
  }
}
