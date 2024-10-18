export default function Dados(props) {
    return (
        <section>
            <h4>Informações do Curso</h4>
            <p>Canal: {props.canal}</p>
            <p>Youtube: {props.youtube}</p>
            <p>Curso : {props.curso}</p>
        </section>
    )
}