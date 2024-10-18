import Dados from "../utils/Dados"

export default function Corpo() {
    
    const cnl = 'CFB Cursos'
    const ytb = 'youtube.com/cfbcuros'
    const crs = 'ReactJS'

    return(
        <section>
            <h2>Aula de Props</h2>
            <Dados
                canal={cnl}
                youtube={ytb}
                curso={crs}
            />
        </section>
    )
}