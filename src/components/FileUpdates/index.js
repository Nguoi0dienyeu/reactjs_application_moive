import React, {useState,useEffect}  from 'react';
import axios from 'axios';

function FileUpdates() {
const [data,setData] = useState([]);

  useEffect(() => {
  	const newdata  = [...data];
  	newdata.splice(4,20);
  	setData(newdata);
		console.log("newdata",newdata);

    const fetchData = async () =>  {
      const result = await axios.get (
        'https://api.themoviedb.org/3/movie/now_playing?api_key=e7d1a25f4b340e09aa16db0f949d2a5e',
        );
      setData(result.data.results);
      console.log("Data",data);
    }
    fetchData();
  },[]);

	return (
		<>
		<div className = "container">
			<div className = "title">
				<p className = "title-left">Film Update</p>
				<p className = "title-right"><a href="">Show More....</a></p>
			</div>
		
			<div className ="content" >
				<div className = "content-film">
				{data.map((items,index)=>(
					<div className = "watch" key = {index}>
						<img src="" alt="content" />
						<div className = "btn-w-f">
							<button className = "content-w">Watch</button>
							<button className = "content-w">Favourtis</button>
						</div>
						<div className = "sub-title">
							<p><a href = "#">
							{items.title}</a></p>
							<p>Year: 2021</p>
						</div>
					</div>
					))}
				</div>
			</div>
		</div>
		</>
	);
}
export  default FileUpdates;