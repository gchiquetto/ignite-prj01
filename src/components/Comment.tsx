import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';
import { formatDistance, format } from 'date-fns';
import { useState } from 'react';

interface Comment{
   content: {
        id: number,
        name: string,
        avatarSrc: string,
        date: Date,
        content: string,
    }
}

interface OnDeleteComponent{
    onDeleteComponent: (id: number) => void;
}

export function Comment( {content, onDeleteComponent} : Comment & OnDeleteComponent){

    const dateFormatted = (formatDistance(content.date, new Date(), {addSuffix: true})).charAt(0).toUpperCase() + (formatDistance(content.date, new Date(), {addSuffix: true})).slice(1);
    const dateFormattedForTitle = format(content.date, "MMMM Do 'of' yyyy");

    const [likesCount, setLikesCount] = useState(0);

    function handleLikeCount(){
        setLikesCount( (likesCount) => {
            return likesCount + 1;
        } );
    };

    function handleDeleteComment(){
        onDeleteComponent(content.id);
    }

    return(
        <div className={ styles.comment }>
            <Avatar hasBorder={false} src={ content.avatarSrc } />
            <div className={ styles.container }>
                <div className={ styles.content }>
                    <div>
                        <div className={ styles.header }>
                            <strong>{ content.name }</strong>
                            <Trash size={20} className={styles.delete} onClick={ handleDeleteComment }/>
                        </div>
                        
                        <time dateTime={ content.date.toString() } title={ dateFormattedForTitle }>{ dateFormatted }</time>
                    </div>
                    <p>{ content.content }</p>                    
                </div>
                <button onClick={ handleLikeCount }><ThumbsUp size={20} /> Like <span>&#8226;</span> <span>{ likesCount }</span> </button>
            </div>
        </div>
    )
}