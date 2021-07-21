
import Link from 'next/link'


const Body = () => {
    
    return(
        <div style={{flexDirection:"colun"}}>
            <Link href="/"><a>Home</a></Link>
            <Link href="/components/quiz">
                <a>Quiz</a>
                </Link>
        </div>
    )
}

export default Body;