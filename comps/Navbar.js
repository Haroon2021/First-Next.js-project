import Link from 'next/link'

const Navbar = () => {
    return ( 
        <>        
        <nav>
            <div className = "logo">  </div>
            <h1>Mr men list</h1>
            
            <Link href="/"> <p> Home</p> </Link>
            <Link href="/about"> <p>About</p> </Link>
            <Link href="/mrmen"> <p>Mr Men listings</p> </Link>
        </nav>
        </>

     );
}
 
export default Navbar;