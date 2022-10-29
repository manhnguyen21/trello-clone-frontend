import TrelloButton from "components/TrelloButton/TrelloButton"
import { IconContext } from "react-icons"
import {
  AiOutlineArrowRight,
  AiOutlinePlus,
  AiOutlineShareAlt,
} from "react-icons/ai"
import { BsPeople } from "react-icons/bs"
import { CgTemplate } from "react-icons/cg"
import { FiEye } from "react-icons/fi"
import { GrAttachment } from "react-icons/gr"
import { MdOutlineContentCopy, MdPeopleAlt, MdUpdate } from "react-icons/md"
import { RiInboxArchiveLine } from "react-icons/ri"
import { SlTag } from "react-icons/sl"
import { TbCheckbox } from "react-icons/tb"
import "./CardDetailSideBar.scss"

const CardDetailSideBar = ({ className = "" }) => {
  return (
    <div className={`card-detail-sidebar ${className}`}>
      <IconContext.Provider value={{ size: 16 }}>
        <div className="options">
          <div className="options__heading">
            <h3>Add to card</h3>
          </div>
          <div className="options__buttons">
            <TrelloButton className="card-button">
              <BsPeople />
              Members
            </TrelloButton>
            <TrelloButton className="card-button">
              <SlTag />
              Labels
            </TrelloButton>
            <TrelloButton className="card-button">
              <TbCheckbox />
              Checklist
            </TrelloButton>
            <TrelloButton className="card-button">
              <MdUpdate />
              Dates
            </TrelloButton>
            <TrelloButton className="card-button">
              <GrAttachment />
              attachments
            </TrelloButton>
          </div>
        </div>
        <div className="options">
          <div className="options__heading">
            <h3>Power-Ups</h3>
          </div>
          <div className="options__buttons">
            <TrelloButton className="add-button" type="transparent-darker">
              <AiOutlinePlus />
              Add Power-Ups
            </TrelloButton>
          </div>
        </div>
        <div className="options">
          <div className="options__heading">
            <h3>Automation</h3>
          </div>
          <div className="options__buttons">
            <TrelloButton className="card-button">
              <MdPeopleAlt />
              Join Card
            </TrelloButton>
            <TrelloButton className="add-button" type="transparent-darker">
              <AiOutlinePlus />
              Add button
            </TrelloButton>
          </div>
        </div>
        <div className="options">
          <div className="options__heading">
            <h3>Actions</h3>
          </div>
          <div className="options__buttons">
            <TrelloButton className="card-button">
              <AiOutlineArrowRight />
              Move
            </TrelloButton>
            <TrelloButton className="card-button">
              <MdOutlineContentCopy />
              Copy
            </TrelloButton>
            <TrelloButton className="card-button">
              <CgTemplate />
              Make template
            </TrelloButton>
            <TrelloButton className="card-button">
              <FiEye />
              Watch
            </TrelloButton>
            <TrelloButton className="card-button">
              <RiInboxArchiveLine />
              Archive
            </TrelloButton>
            <TrelloButton className="card-button">
              <AiOutlineShareAlt />
              Share
            </TrelloButton>
          </div>
        </div>
      </IconContext.Provider>
    </div>
  )
}

export default CardDetailSideBar
