import Avatar from "components/Avatar/Avatar"
import GrowingTextArea from "components/GrowingTextArea/GrowingTextArea"
import TrelloButton from "components/TrelloButton/TrelloButton"
import { BsEmojiSmile } from "react-icons/bs"
import { FaRegCreditCard } from "react-icons/fa"
import { GoMention } from "react-icons/go"
import { RiAttachment2 } from "react-icons/ri"

import "./CommentInput.scss"

const CommentInput = () => {
  return (
    <div className="comment-input">
      <Avatar
        src={"https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png"}
      />
      <GrowingTextArea
        className="comment-input__input-box"
        placeholder="Write a comment..."
      >
        <div className="comment-input__controls">
          <TrelloButton type="primary">Save</TrelloButton>
          <div className="comment-input__options">
            <TrelloButton type="transparent-darker">
              <RiAttachment2 />
            </TrelloButton>
            <TrelloButton type="transparent-darker">
              <GoMention />
            </TrelloButton>
            <TrelloButton type="transparent-darker">
              <BsEmojiSmile />
            </TrelloButton>
            <TrelloButton type="transparent-darker">
              <FaRegCreditCard />
            </TrelloButton>
          </div>
        </div>
      </GrowingTextArea>
    </div>
  )
}

export default CommentInput
