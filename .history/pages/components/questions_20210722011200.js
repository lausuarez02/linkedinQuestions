import Body from "./navBar"


export default function Questions() {
    async function getData(){
    
            const response = await fetch("/data", config);
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

export async function getServerSideProps(){
console.log("Hello from the server");

const res = await fetch("https://nodefirstapilinkedin.herokuapp.com/data");
const data = await res.json()
}