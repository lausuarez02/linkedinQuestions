import Head from 'next/head'
import Link from 'next/link'

//pages
import Body from './components/body'
import Quiz from "./components/quiz";

export default function Home() {
  return (
    <div>
   <Body/>
   <h1>Hi i am index</h1>
   </div>
  )
}
