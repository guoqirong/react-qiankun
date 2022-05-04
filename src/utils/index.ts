import { qiankunApp } from "../constants"

export const getQiankunAppUrl = () => {
  return qiankunApp.map(item => {
    return {
      path: '/' + item.name,
      namespace: item.name,
    }
  })
}