import Link from 'next/link';
import getProducts from './lib/getProducts';
import {addProductToDatabase} from './actions/serverActions';
export default async function Home() {
  const products = await getProducts();
  return (
    <main className="bg-green-100">
      <Link href='/users' className="bg-white hover:bg-blue-600">Go to users page</Link>
      {/* block max-w-sm rounded-md p-d m-6 */}
      <div> 
        <h1 className='text-2xl text-center font-bold'>Product Details</h1>
      <form action={addProductToDatabase}>
        <div className="flex flex-col items-center">
        <input type="text" name="product" placeholder="Enter Product" className="form-input px-4 py-3 rounded-full m-6" />
        <input type="text" name="price" placeholder="Enter Price" className="form-input px-4 py-3 rounded-full m-6" />
        <button className='px-4 py-3 rounded-full m-6 border-4 border-black '>Add Product</button>
        </div>
      </form>
      </div>
      <div className='flex flex-wrap gap-6'>
        {products.map(p =>{
          return (
            <div key={p.id} className='ml-6 p-4 border border-black rounded-md shadow-md'>
            <h1 className='text-bold-400 text-xl text-green-300'>{p.product}</h1>
            <p>${p.price}</p>
            </div>
          )
        })}

      </div>
      
    </main>
  )
}