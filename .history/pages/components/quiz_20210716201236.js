import router, { useRouter } from "next/router";
import Link from 'next/link'

export default = () => {
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