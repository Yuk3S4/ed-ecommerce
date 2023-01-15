import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Loader from "../atoms/Loader";
import ProductCard from "../molecules/ProductCard";
const Products = () => {
  const { data, error, loading } = useFetch("public/products")
  const [result, setResult] = useState([])

  useEffect(() => {
    if ( data ) setResult(data)
  }, [data])
  

  const handleFilter = (e) => {
    const filterValue = e.target.value.toLocaleLowerCase()
    
    setResult(
      data.filter(p => 
        JSON.stringify(p).toLocaleLowerCase().includes(filterValue)
      )
    )
  }

  if (loading) return <Loader />;
  if (error) return <h1>Error en la petición de productos</h1>
  
  return (
    <section className="py-16 max-w-256 m-auto">
        <h1 className="text-3xl mb-6">Explora nuestros productos</h1>
        <input 
          onChange={handleFilter} 
          className="mb-4" type="text" placeholder="Filtro de productos" />
        <div className="grid grid-cols-4 gap-6">
            {
                (result.length === 0) ? <p className="text-lg">Resultados no encontrados</p>
                :
                result.map( producto => (                    
                    <ProductCard key={ producto.id } producto={ producto } />
                ))
            }
        </div>
    </section>
  )
}

export default Products;
