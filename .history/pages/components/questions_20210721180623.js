import Body from "./navBar"

export default() => {
    async const getData = () => {
        try{
            const response = await fetch("https://nodefirstapilinkedin.herokuapp.com/data")
            const json = await response.json();
        }
        catch(err){
            console.error(err);
        }
    }
    return(
        <div>
            <Body/>
            <h1>{getData()}</h1>
        </div>
    )

}