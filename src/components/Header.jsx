import styles from './Header.module.css';

import igniteLogo from '../assets/ignite-logo.png';

export function Header(){
    return(
        <header style={ styles.header }>
            <img src={ igniteLogo } />
        </header>
    )
}