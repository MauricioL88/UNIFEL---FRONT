import { products } from "../utils/index"

function Products() {

    return (
        <>
            <h3>Produtcs</h3>
            <ol>
                {products.map((product) => {
                    return (
                        <>
                            <li>{product.name}</li>
                            <img src={product.image} alt="" />
                        </>
                    )
                })}
            </ol>
        </>
    )
}

export default Products
