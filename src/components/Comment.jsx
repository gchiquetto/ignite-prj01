import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react'

export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=40" />
            <div className={styles.container}>
                <div className={styles.content}>
                    <div>
                        <div className={styles.header}>
                            <strong>Jacob Jhonson</strong>
                            <Trash size={20} className={styles.delete}/>
                        </div>
                        
                        <time dateTime='2022-09-23 14:20' title='September 23rd at 14:20'>2 hours ago</time>
                    </div>
                    <p>Awesome, Gabriela! Thanks for sharing it</p>                    
                </div>
                <button><ThumbsUp size={20} /> Like <span>&#8226;</span> <span>03</span> </button>
            </div>
        </div>
    )
}