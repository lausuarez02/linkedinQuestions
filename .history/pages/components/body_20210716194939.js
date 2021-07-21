import router, { useRouter } from 'next/router'
import Link from 'next/link'

const Body = () => {
    
    return(
        <div>
            <Link href="/quiz">
                <a></a>
                Quiz</Link>
        </div>
    )
}

export default Body;