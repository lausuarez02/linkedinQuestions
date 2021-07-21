import Body from "./navBar"

export default Questions() => {
    async function getData(){
    
            const response = await fetch("https://nodefirstapilinkedin.herokuapp.com/data");
            const json = await response.json();
            console.log(json)
    }
    getData();
    return(
        <div>
            <Body/>
            <h1> </h1>
        </div>
    )

}