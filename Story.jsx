import axios from "axios";
import { useState, useEffect,memo } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const Story = memo((props) => {
    const [topStory, setTopStory] = useState("");
    const [bookmarks,setBookmarks] = useState([]);

    const getTopStory = async () => {
      const result = await axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${props.topStoryId}.json?print=pretty`
      );
      setTopStory(result.data);
    };
    useEffect(() => {
      getTopStory();
    }, []);
   
   const addBokmark = (item) =>{
    alert('Bookmark added');
      setBookmarks([...bookmarks,item]);
   }

   return (
    
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">{topStory.type}</Card.Subtitle>
        <Card.Text>
          {JSON.stringify(topStory.title)}
        </Card.Text>
        <Card.Link href={topStory.url}>{topStory.url}</Card.Link>
        <Button variant="light" onClick={()=> addBokmark(topStory.title)}>Bookmark this story</Button>
      </Card.Body>
    </Card>
  
   
    );
  });
  
  export default Story;
  