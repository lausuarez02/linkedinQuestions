import router, { useRouter } from "next/router";
import Link from 'next/link'

const Quiz = () => {
    return(
        <div>
            <Link hred="/body">
                <a>
                Body
                </a>
                </Link>
        </div>
    )
}

export default Quiz;