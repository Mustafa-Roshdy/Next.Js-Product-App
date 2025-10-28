
import axios from 'axios'
import Image from 'next/image'


async function showDetails(name) {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_DUMMY}/${name}`)
  return res.data
}

async function getAllProducts() {
  const res =await axios.get(`${process.env.NEXT_PUBLIC_DUMMY}/products`)
  return res.data.products
}

export async function generateStaticParams() {
  const products = await getAllProducts()
  const myParams=products.map(product=>{
    return {id:product.id.toString()}
  })
  return myParams
}

export default async function Details({ params }) {

  const { name } = await params
  const product = await showDetails(name)




  console.log(product);
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 p-6">
      <div className="flex flex-col lg:flex-row max-w-5xl w-full bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl border border-white/20 hover:shadow-indigo-500/30 transition-all duration-300">

        {/* Left Image Section */}
        <div
          className="lg:w-1/2 h-72 lg:h-auto bg-cover bg-center"
          style={{ backgroundImage: `url(${product.thumbnail})` }}
          title={product.title}
        ></div>

        {/* Right Content Section */}
        <div className="flex flex-col justify-between p-8 lg:w-1/2 text-white">
          <div>
            <h2 className="text-4xl font-extrabold mb-4 drop-shadow-lg">
              {product.title}
            </h2>
            <p className="text-gray-200 text-base leading-relaxed mb-4">
              {product.description}
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 text-xs font-semibold bg-white/20 rounded-full">
                {product.category}
              </span>
              <span className="px-3 py-1 text-xs font-semibold bg-green-400/30 rounded-full">
                ${product.price}
              </span>
              <span className="px-3 py-1 text-xs font-semibold bg-yellow-400/30 rounded-full">
                Rate {product.rating}
              </span>
            </div>
          </div>

          {/* Footer / Brand */}
          <div className="mt-6 flex items-center">
            <Image
            width={300}
            height={300}
              className="w-12 h-12 rounded-full border-2 border-white/40"
              src={product.thumbnail}
              alt="Avatar"
            />
            <div className="ml-3">
              <p className="font-semibold text-lg">{product.brand || "Brand Name"}</p>
              <p className="text-gray-300 text-sm">Available Now</p>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}
