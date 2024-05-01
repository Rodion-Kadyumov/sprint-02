import { MessageType } from '../HW1'
import s from './FriendMessage.module.css'

type FriendMessageType = {
  message: MessageType
}

const FriendMessage = (props: FriendMessageType) => {
  return (
    <div
      id={'hw1-friend-message-' + props.message.id}
      className={s.friendMessage}
    >
      <div className={s.friendImageAndText}>
        <img
          id={'hw1-friend-avatar-' + props.message.id}
          src={props.message.user.avatar}
          alt={props.message.user.name}
        />
        <div className={s.friendText}>
          <div
            id={'hw1-friend-name-' + props.message.id}
            className={s.friendName}
          >
            <span>{props.message.user.name}</span>
          </div>
          <pre
            id={'hw1-friend-text-' + props.message.id}
            className={s.friendMessageText}
          >
            <p>{props.message.message.text}</p>
          </pre>
        </div>
      </div>
      <div
        id={'hw1-friend-time-' + props.message.id}
        className={s.friendTime}
      >
        <span>{props.message.message.time}</span>
      </div>
    </div>
  )
}

export default FriendMessage