import styles from '../../styles/mrmen.module.css'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: {users : data}
    }
}

const Mrmen = ({users}) => {
    return ( 
        <div>
           
            <h1> Mrmenpage </h1>
            {users.map(user => (
                <div key={user.id}>  
                <a className={styles.single}>
                    <h3>{user.name}</h3>
                </a>
                </div>
            ))}
        </div>
     );
}
 
export default Mrmen;