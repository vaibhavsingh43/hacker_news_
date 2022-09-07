import "./Dashboard.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Story from "./Story";


const Dashboard = () => {
  const [topstoryId, setTopstoeryId] = useState([]);


  const getTopStoryId = async () => {
    const result = await axios.get(
      "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
    );
    setTopstoeryId(result.data);
  };

  useEffect(() => {
    getTopStoryId();
  }, []);

  
  return (
    <div>
      <h1>Top Hacker-News Stories</h1>
      <a href="#"><h3>Bookmarks</h3></a>
      <div className="card-container">
      {topstoryId.map((id) => (
        <Story key={id} topStoryId={id}/>
      ))}
      </div>
      <div>
    
      </div>
    </div>
  );
};

export default Dashboard;
