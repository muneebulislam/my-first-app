import getProducts from "./lib/getProducts";
import { addProductToDatabase } from "./actions/serverActions";

export const metadata = {
  title:'Home Page',
  description: 'page for Home'
}
export default async function Home() {
  return(
  <h1 className="h-screen flex items-center justify-center text-3xl">Welcome Home</h1>
  )
}
  