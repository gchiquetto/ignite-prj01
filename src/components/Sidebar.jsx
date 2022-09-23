import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';
import { PencilSimpleLine } from 'phosphor-react';

export function Sidebar(){
    return(
        <aside className={ styles.sidebar }>
            <img className={ styles.banner } src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=60" />
            
            <div className={ styles.profile }>
                <Avatar src="https://xesque.rocketseat.dev/users/avatar/profile-84ff1fc9-873b-4e89-b955-666ffc10c1d7-1663832191728.jpg"/>
                <strong>Gabriela Chiquetto</strong>
                <span>Web Developer</span>           
            </div>

            <footer style={styles.footer}>
                <a href="">
                    <PencilSimpleLine size={20} />
                    Edit your profile
                </a>
            </footer>            
        </aside>
    )
}