import router, { useRouter } from 'next/router'
import Link from 'next/link'


const Body = () => {
    
    return(
        <div>
            <Link href="/quiz">
                <a>Quiz</a>
                </Link>
        </div>
    )
}

export default Body;