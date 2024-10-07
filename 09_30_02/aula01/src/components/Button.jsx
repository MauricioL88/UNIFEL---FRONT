export default function Button () {

    const handleAlert = () => {
        alert("Clicado!")
    }
    
    const handleChange = (event) => {
        console.log(event.target.value);        
    }

    return (
        <>
            <br />
            <input onChange={ handleChange } type="text" />
            <br />
            <br />
            <button onClick={ handleAlert }>Clique</button>
        </>
    )
}