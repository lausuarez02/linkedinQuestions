import Head from 'next/head'
import Link from 'next/link'

//pages
import Body from './components/navBar'


export default function Home() {
  return (
    
    <div style={{  backgroundColor : '#A0CCDA',
    color : 'white',
    height : '100%',  flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',}}>
      <Head>
// Responsive meta tag
<meta name="viewport" content="width=device-width, initial-scale=1" />
//  bootstrap CDN
<link
href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
crossorigin="anonymous" 
/>

<script
src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
crossorigin="anonymous"></script>
</Head>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
     <Link href="/" className="nav-link active" ><a>Home</Link>
        </li>
        <li class="nav-item">
       
          <Link href="/components/quiz" class="nav-link">
                Quiz
                </Link>
        </li>
    
      </ul>
    </div>
  </div>
</nav>
   <h1>Hi i am index</h1>
   <div style={{flexDirection:"column"}}>
   <Link href="/components/questions"><button type="button" style={{ width:"50%",
    marginLeft:"25%",
    marginTop:"15%",
    marginRight:"25%"}} class="btn btn-primary">Questions</button></Link>

   
   </div>



   </div>
  )
}
