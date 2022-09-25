import { Avatar } from './Avatar';
import { Comment } from './Comment';
import { format, formatDistance } from 'date-fns';

import styles from './Post.module.css';
import { useState } from 'react';
import { set } from 'date-fns/esm';

export function Post( { content } ){

    const dateFormatted = (formatDistance(content.date, new Date(), {addSuffix: true})).charAt(0).toUpperCase() + (formatDistance(content.date, new Date(), {addSuffix: true})).slice(1);
    const dateFormattedForTitle = format(content.date, "MMMM Do 'of' yyyy");
    const [comments, setComments] = useState([]);

    const [newCommentContent, setNewCommentContent] = useState('');

    const [commentId, setCommentId] = useState(1);

    const buttonDisabled = (newCommentContent === '' ? true : false);

    function createNewCommentContent(){
        event.target.setCustomValidity('');
        setNewCommentContent(event.target.value);
    }

    function createComment(){
        event.preventDefault();

        setCommentId( (commentId) => {
            return commentId + 1;
        });

        const newComment = {
            id: commentId,
            name: "Gabriela Chiquetto",
            avatarSrc: "https://xesque.rocketseat.dev/users/avatar/profile-84ff1fc9-873b-4e89-b955-666ffc10c1d7-1663832191728.jpg",
            date: new Date(),
            content: newCommentContent,
        };

        setComments([...comments, newComment]);
        setNewCommentContent('');
    };   

    function handleInvalidMessage(){
        event.target.setCustomValidity('Please leave a comment, blank comments are not allowed.');
    };

    function onDeleteComponent(commentId){
        const commentsNotDeleted = comments.filter( comment => comment.id !== commentId.id  );
        setComments(commentsNotDeleted);
    };

    return(
        <div className={styles.post}>
            <div className={styles.header}>
                <Avatar src={ content.author.avatarSrc }/>
                <div className={styles.information}>
                    <strong>{ content.author.name }</strong>
                    <span>{ content.author.role }</span>
                </div>
                <time dateTime={content.date.toString()} title={dateFormattedForTitle}>{dateFormatted}</time>
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
                <form onSubmit={createComment}>
                    <strong>Give your feedback</strong>
                    <textarea 
                        name='comment' 
                        onChange={createNewCommentContent} 
                        placeholder='Write your feedback' 
                        value={newCommentContent} 
                        required
                        onInvalid={ handleInvalidMessage }></textarea>
                    <div className={styles.submit}>
                        <button type="submit" disabled = { buttonDisabled } >Publish</button>
                    </div>
                </form>
                {comments.map(comment => {return <Comment key={comment.id} content={comment} onDeleteComponent={onDeleteComponent} />})}
            </footer>
        </div>
    )
}