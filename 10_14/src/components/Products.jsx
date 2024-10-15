import { produtos } from "../utils/Produtos"
import Button from "./Button"

export default function Products() {
    return (
        <>
            <h1>Produtos</h1>
            <Button />
            {
                produtos.map((item) => {
                    return (
                        <>
                            <p>{item.nome}</p>
                            <img width={300} src={item.imageUrl} alt="" />
                        </>
                    )
                })
            }
        </>
    )
}