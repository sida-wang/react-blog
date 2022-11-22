import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

const TagSelection = ({ tags, selected, setSelected }) => {
  
  const onChangeCB = (val) => {
    setSelected(val);
    console.log(val);
  }

  return (
        <ToggleButtonGroup type="checkbox" defaultValue={selected} onChange={onChangeCB} className="mb-2">
            {tags.map((tag) => (<ToggleButton id={`btn-tag-${tag.id}`} value={tag.id} key={tag.id} variant='outline-secondary'>{tag.title}</ToggleButton>))}  
        </ToggleButtonGroup>      
  )
}

export default TagSelection