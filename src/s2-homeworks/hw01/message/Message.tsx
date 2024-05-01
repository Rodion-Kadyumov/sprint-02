import { MessageType } from '../HW1'
import s from './Message.module.css'

export type MessagePropsType = {
    message: MessageType,
}

const Message = (props: MessagePropsType) => {
  return (
    <div id={'hw1-message-' + props.message.id} className={s.message}>
      <div className={s.imageAndText}>
        <img
          id={'hw1-avatar-' + props.message.id}
          src={props.message.user.avatar}
          alt={props.message.user.name}
        />
        <div className={s.text}>
          <div id={'hw1-name-' + props.message.id} className={s.name}>
            <span>{props.message.user.name}</span>
          </div>
          <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
            <p>{props.message.message.text}</p>
          </pre>
        </div>
      </div>
      <div id={'hw1-time-' + props.message.id} className={s.time}>
        <span>{props.message.message.time}</span>
      </div>
    </div>
  )
}

export default Message