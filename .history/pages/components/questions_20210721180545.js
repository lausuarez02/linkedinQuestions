import Body from "./navBar"

export default() => {
    async const getData = () => {
        try{
            const response = await fetch("https://nodefirstapilinkedin.herokuapp.com/data")
            const json = await response.json();
        }
        

    }
    return(
        <div>
            <Body/>
            <h1>Preguntas</h1>
        </div>
    )

}