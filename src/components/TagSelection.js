import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import './TagSelection.css'

const TagSelection = ({ tags, selected, setSelected }) => {
  
  const onChangeCB = (val) => {
    setSelected(val);
    console.log(val);
  }

  return (
        <div className="tag-selector-bar pt-3">
          <h4 className="px-3 mb-2 flex-item">Tags</h4>
          <ToggleButtonGroup type="checkbox" defaultValue={selected} onChange={onChangeCB} vertical={true} className="px-3 mb-2 flex-item">
              {tags.map((tag) => (<ToggleButton id={`btn-tag-${tag.id}`} value={tag.id} key={tag.id} variant='outline-secondary'>{tag.title}</ToggleButton>))}  
          </ToggleButtonGroup>     
        </div> 
  )
}

export default TagSelection