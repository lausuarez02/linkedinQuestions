import router, { useRouter } from 'next/router'
import Link from 'next/link'
import Quiz from "./quiz";

const Body = () => {
    
    return(
        <div>
            <Link href="/quiz">
                <a><</a>
                </Link>
        </div>
    )
}

export default Body;