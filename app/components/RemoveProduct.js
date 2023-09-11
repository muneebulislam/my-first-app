"use client";
import removeProduct from '../lib/removeProduct';
import {HiOutlineTrash} from 'react-icons/hi'
function RemoveProduct({id}) {
  return <button onClick={removeProduct(id)} className='text-red-400'><HiOutlineTrash size={24}/></button>;
}
export default RemoveProduct;
