import { Avatar } from './Avatar';
import { Comment } from './Comment';
import { format, formatDistance } from 'date-fns';

import styles from './Post.module.css';

export function Post( { content } ){

    const date = new Date(content.date);
    const dateFormatted = (formatDistance(date, new Date(), {addSuffix: true})).charAt(0).toUpperCase() + (formatDistance(date, new Date(), {addSuffix: true})).slice(1);

    return(
        <div className={styles.post}>
            <div className={styles.header}>
                <Avatar src={ content.author.avatarSrc }/>
                <div className={styles.information}>
                    <strong>{ content.author.name }</strong>
                    <span>{ content.author.role }</span>
                </div>
                <time dateTime='2022-09-23 14:00' title='September 23rd at 14:00'>{dateFormatted}</time>
            </div>
            
            <div className={styles.content}>
                {content.content.map(content => {
                    if(content.type === 'paragraph'){
                        return <p key={content.id}>{content.content}</p>
                    } else if(content.type === 'link'){
                        return <a key={content.id} href=''>{content.content}</a>
                    }
                })}
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