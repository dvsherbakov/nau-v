import React from 'react'
import Api from '../Api'

export const Check = () => {
  async function getProducts() {
    //jwtApi.register({ email: 'ds.tura.ru', password: 'gzaktpf6' })
    await jwtApi.login({ email: 'ds.tura.ru', password: 'gzaktpf6' })
    console.log(jwtApi.token)
    const res = await jwtApi.getProducts()
    console.log(res)
    return res
  }
  const jwtApi = new Api()
  getProducts()
  return (
    <>
      <h2>Check Page component</h2>
    </>
  )
}
