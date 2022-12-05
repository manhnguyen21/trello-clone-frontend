import TrelloButton from "components/TrelloButton/TrelloButton"
import { useState } from "react"
import { IconContext } from "react-icons"
import { IoChevronDown, IoChevronUp } from "react-icons/io5"
import "./Templates.scss"

const templates = [
  {
    id: 1,
    thumb:
      "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/350dda08d977f92d756f3d9ec111ea66/photo-1521495084171-3ad639e3d525.jpg",
    name: "1-on-1 Meeting Agenda",
  },
  {
    id: 2,
    thumb:
      "https://trello-backgrounds.s3.amazonaws.com/53baf533e697a982248cd73f/480x480/96406688eb291c869064290cfb9b0c80/shutterstock_134707556.jpg",
    name: "Agile Board Template | Trello",
  },
  {
    id: 3,
    thumb:
      "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/4315f9a5b3c78f696d170e9b626a44d6/e2d2752f.jpg",
    name: "Company Overview",
  },
  {
    id: 4,
    thumb:
      "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/320x480/ff001cf6d3206de96d324c4a3646f844/photo-1500462918059-b1a0cb512f1d.jpg",
    name: "Design Huddle",
  },
  {
    id: 5,
    thumb:
      "https://trello-backgrounds.s3.amazonaws.com/5755843411a2cd8c83067c03/480x320/cf2d1e29e8e3a4857a5f58f500fb464c/ian-dooley-407846-unsplash.jpg",
    name: "Go To Market Strategy Template",
  },
  {
    id: 6,
    thumb:
      "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x322/47f09f0e3910259568294477d0bdedac/photo-1576502200916-3808e07386a5.jpg",
    name: "Kanban Template",
  },
  {
    id: 7,
    thumb:
      "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x480/1849a4a0cc47bd7f5c6e08a06cf3affa/photo-1516553174826-d05833723cd4.jpg",
    name: "Remote Team Meetings",
  },
  {
    id: 8,
    thumb:
      "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x270/efea59b89ada0934c5256715fb180bd9/photo-1463107971871-fbac9ddb920f.jpg",
    name: "Simple Project Board",
  },
  {
    id: 9,
    thumb:
      "https://trello-backgrounds.s3.amazonaws.com/575584dacedaafdf0d8660c2/480x272/02a67bbc2d5b879d912dad85eb5f3a05/asset_3.png",
    name: "Teaching: Weekly Planning",
  },
  {
    id: 10,
    thumb:
      "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x320/963ddbe30ac0e2ab51ed5ed7403a5143/photo-1523266092241-0077129f31fe.jpg",
    name: "Mise-En-Place Personal Productivity System",
  },
]

const Template = ({ template }) => {
  return (
    <div className="template">
      <img
        src={template.thumb}
        alt={template.thumb}
        className="template__thumb"
      />
      <span className="template__name text--no-select">{template.name}</span>
    </div>
  )
}

const TemplateContainer = ({ title, templates }) => {
  const [showTemplates, setShowTemplates] = useState(false)
  const toggle = () => setShowTemplates(!showTemplates)
  return (
    <div className="templates">
      <div className="templates__header">
        <div className="templates__title">{title}</div>
        <IconContext.Provider value={{ className: "" }}>
          <TrelloButton
            type="transparent-darker"
            className="templates__collapse"
            onClick={toggle}
          >
            {!showTemplates && <IoChevronDown />}
            {showTemplates && <IoChevronUp />}
          </TrelloButton>
        </IconContext.Provider>
      </div>
      {showTemplates && (
        <div className="templates__list">
          {templates.map(({ id, ...template }) => (
            <Template key={id} template={template} />
          ))}
        </div>
      )}
    </div>
  )
}

const Templates = () => {
  return (
    <div>
      <TemplateContainer
        title={"Starred template"}
        templates={templates.filter(({ id }) => [1, 2, 3].includes(id))}
      />
      <TemplateContainer title={"Top template"} templates={templates} />
    </div>
  )
}

export default Templates
