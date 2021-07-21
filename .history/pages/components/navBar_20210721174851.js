
import Link from 'next/link'


const Body = () => {
    
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
     <Link href="/" class="nav-link active" ><a>Home</a></Link>
        </li>
        <li class="nav-item">
       
          <Link href="/components/quiz" class="nav-link">
                <a>Quiz</a>
                </Link>
        </li>
    
      </ul>
    </div>
  </div>
</nav>
            <Link href="/"><a>Home</a></Link>
            <Link href="/components/quiz">
                <a>Quiz</a>
                </Link>
        </div>
    )
}

export default Body;