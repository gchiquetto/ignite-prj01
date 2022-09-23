import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(){
    return(
        <div className={styles.post}>
            <div className={styles.header}>
                <Avatar src="https://xesque.rocketseat.dev/users/avatar/profile-84ff1fc9-873b-4e89-b955-666ffc10c1d7-1663832191728.jpg"/>
                <div className={styles.information}>
                    <strong>Gabriela Chiquetto</strong>
                    <span>Web Developer</span>
                </div>
                <time dateTime='2022-09-23 14:00' title='September 23rd at 14:00'>Published 1 hour ago</time>
            </div>
            
            <div className={styles.content}>
                <p>Hey guys 👋</p>
                <p>I just uploaded one more project on my portfolio. It's a project that I made during the NLW Return</p>
                <a href="">👉 gabriela.desing/doctorcare</a>
                <span><a href="">#newproject</a> <a href="">#nlw</a> <a href="">#rocketseat</a></span>
            </div>

            <footer style={styles.footer}>    
                <form>
                    <strong>Give your feedback</strong>
                    <textarea placeholder='Write your feedback'></textarea>
                    <div className={styles.submit}>
                        <button>Publish</button>
                    </div>
                </form>
                <Comment />
                <Comment />
            </footer>
        </div>
    )
}