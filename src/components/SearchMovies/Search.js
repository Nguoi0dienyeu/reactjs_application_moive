import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router,useParams} from 'react-router-dom';
import SearchView from 'components/SearchMovies/SearchView.js';
import axios from 'axios';

function Search(){
	const [find,setFind] = useState([]);
	let {id} = useParams();
	useEffect(()=>{
		const fetchData = async() => {
			const find_result = await axios.get(`find/{external_id}?&language=en-US&external_source=${id}`);
			setData(find_result);
			console.log("Find:");
		}
		fetchData();
	});
	return (
		<SearchView find ={find} />
		);
}
