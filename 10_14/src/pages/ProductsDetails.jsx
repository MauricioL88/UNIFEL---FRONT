import { useParams } from "react-router-dom"
import Button from "../components/Button"

function ProductsDatails() {
    
    const parans = useParams()
    
    return(
        <>
            <h1>Detalhes</h1>
            <Button />
        </>
    )
}

export default ProductsDatails