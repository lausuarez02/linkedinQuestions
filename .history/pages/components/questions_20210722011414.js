import Body from "./navBar"


export default function Questions({results}) {
    console.log(results)
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
const data = await res.json();
console.log(data);

return{
    props:{
        results:data
    }
}
}