import Body from "./navBar"
import Cors from 'cors'

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
})

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