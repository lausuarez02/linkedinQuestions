import Head from 'next/head'
import {Link} from ""

//pages
import Body from './components/body'
import Quiz from "./components/quiz";

export default function Home() {
  return (
    <div>
       Read{' '}
      <Link href="/posts/first-post"><a>Quiz</a></Link>
    </div>
 
  )
}
