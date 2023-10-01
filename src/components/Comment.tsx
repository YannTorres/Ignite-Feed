import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommentProps {
  content: string,
  onDeleteComment: (commentToDelete: string) => void,
}

export function Comment({content, onDeleteComment }: CommentProps) {
  
  const [likeCount, setLikeCount] = useState(0)

  function handleLikeComment() {
    setLikeCount(likeCount + 1)
  }
  
  function handleDeleteComment() {
    onDeleteComment(content)
  }
  
  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/YannTorres.png" alt=''/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Yann Torres</strong>
              <time title='28 de Setembro às 19:53' dateTime="2023-09-28 19:53">Agora</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>

          </header>
          <p>{content}</p>
        </div>        
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>      
        </footer>
      </div>   
    </div>
  )
}