import {Badge} from 'react-bootstrap'

const Tags = ({ tags }) => {
  return (
    <div>
        {tags.map((tag) => (
            <Badge bg={tag.color} className= "me-1">{tag.text}</Badge>
        ))}
    </div>
  )
}

export default Tags