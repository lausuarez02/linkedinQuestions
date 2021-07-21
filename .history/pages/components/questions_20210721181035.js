import Body from "./navBar"

export default() => {
    async function getData(){
        try{
            const response = await fetch("https://nodefirstapilinkedin.herokuapp.com/data");
            const json = await response.json();
            console.log(json)
        }
        catch(err){
            console.error(err);
        }
    }
    getData();
    return(
        <div>
            <Body/>
            <h1></h1>
        </div>
    )

}