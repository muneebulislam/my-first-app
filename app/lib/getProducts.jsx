export default async function getProducts() {
    const res = await fetch('https://64f16fb30e1e60602d23c78a.mockapi.io/products', { cache: 'no-store' })
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
     return res.json()
  }
