import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <>        
        <nav>
            <div className = "logo">  </div>
            {/* Note that when using the Image tag below we must put in height and width 
            (and of course we need to import th eImage hook from below) */}
            <Image src = '/logo.png' width={128} height = {77} />
            <Link href="/"> <p> Home</p> </Link>
            <Link href="/about"> <p>About</p> </Link>
            <Link href="/mrmen"> <p>Mr Men listings</p> </Link>
        </nav>
        </>

     );
}
 
export default Navbar;