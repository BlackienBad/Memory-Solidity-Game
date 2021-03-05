import React, { useState, useEffect } from 'react'; 
import {Card, CardBody} from 'reactstrap';
import SingleImage from './SingleImage.js';
function Image({images, token, account, tokenURI}) {
	const [tokenURIs, setTokenURIs] = useState([]);
	const [blanks, setBlanks] = useState([
		{
		img: "/images/blank.png", 
		random: images[0], 
		isChecked: false,
		turned: false
		},
		{
		img: "/images/blank.png", 
		random: images[1], 
		isChecked: false,
		turned: false
		},
		{
		img: "/images/blank.png", 
		random: images[2], 
		isChecked: false,
		turned: false
		},
		{
		img: "/images/blank.png", 
		random: images[3], 
		isChecked: false,
		turned: false
		},
		{
		img: "/images/blank.png", 
		random: images[4], 
		isChecked: false,
		turned: false
		},
		{
		img: "/images/blank.png", 
		random: images[5], 
		isChecked: false,
		turned: false
		},
		{
		img: "/images/blank.png", 
		random: images[6], 
		isChecked: false,
		turned: false
		},
		{
		img: "/images/blank.png", 
		random: images[7], 
		isChecked: false,
		turned: false
		},
		{
		img: "/images/blank.png", 
		random: images[8], 
		isChecked: false,
		turned: false
		},
		{
		img: "/images/blank.png", 
		random: images[9], 
		isChecked: false,
		turned: false
		},
		{
		img: "/images/blank.png", 
		random: images[10], 
		isChecked: false,
		turned: false
		},
		{
		img: "/images/blank.png", 
		random: images[11], 
		isChecked: false,
		turned: false
		}]);

	const [nFlipped, setNFlipped] = useState(0);
	const [indexFlipped, setIndexFlipped] = useState([]);
	const [missingToWin, setMissingToWin] = useState(0);
	const noClick = (index) => {}
	useEffect(() => {
		if(nFlipped === 2){
			checkCard();
		}
		console.log(missingToWin)
		if(missingToWin===6){
			window.alert('You have been doged!')
		}
	}, [indexFlipped])
	const handleClick = async (indexReturned) => {
		console.log(tokenURIs)
		if(nFlipped < 2 && blanks[indexReturned].turned !== true){
			var elem = {
				img: blanks[indexReturned].random, 
				random: blanks[indexReturned].img, 
				isChecked: blanks[indexReturned].isChecked,
				turned: true
				}
				const newArr = blanks.flatMap( (el, index) => {
				if (index === indexReturned)
					return elem
				else 
					return el
				})
				setBlanks(newArr);
				setNFlipped(nFlipped + 1);
				setIndexFlipped([...indexFlipped, indexReturned])
				
		}		
	}

	const checkCard = () => {
		var newArr = [];
		if(blanks[indexFlipped[0]].img !== blanks[indexFlipped[1]].img){
			setTimeout(() => { 
				for(var i = 0; i < blanks.length; i++){
					if(blanks[i].isChecked === true){
						var elem = {
							img: blanks[i].img,
							random: blanks[i].random, 
							isChecked: true,
							turned: true
							}
						newArr.push(elem);
					}else{
						var elem = {
							img: "/images/blank.png",
							random: images[i], 
							isChecked: blanks[i].isChecked,
							turned: false
							}
						newArr.push(elem);
					}
				}
				setBlanks(newArr)
				setNFlipped(0); 
				setIndexFlipped([])}, 2000);
		}else{
			console.log(indexFlipped)
			for(var i = 0; i < blanks.length; i++){
				if(i === indexFlipped[0] || i === indexFlipped[1]){
					var elem = {
						img: images[i],
						random: images[i], 
						isChecked: true,
						turned: true
						}
					setMissingToWin(missingToWin+1)
					newArr.push(elem);
					token.methods.mint(account,blanks[indexFlipped[0]].img.toString()).send({from: account}).on('transactionHash',() => {setTokenURIs([...tokenURIs, blanks[indexFlipped[0]].img])})
				}else{
					if(blanks[i].isChecked === true){
						var elem = {
							img: images[i],
							random: images[i], 
							isChecked: true,
							turned: true
							}
						newArr.push(elem);
					}else{
						var elem = {
							img: "/images/blank.png",
							random: images[i], 
							isChecked: blanks[i].isChecked,
							turned: false
							}
						newArr.push(elem);
					}
					
				}
			}
			setBlanks(newArr)
			setNFlipped(0);
			setIndexFlipped([])
		}
	}

	return (
		<>
			<Card className='col-5' style={{backgroundColor:'#d8bb50'}}>
				<CardBody>
					<div>
						{blanks.map((blank, index) => { return(
							<SingleImage blanksImg={blank.img} index={index} handleClick={() => handleClick(index)} modulo={4}/>
							//<img src={blank.img} onClick={() => handleClick(index)}/>
						)})}
					</div>
				</CardBody>
			</Card> 
			<br />
			<Card className='col-3' style={{backgroundColor:'#d8bb50'}}>
				<CardBody>
					<h5>Tokens Collected:<span id="result">&nbsp;{tokenURIs.length}</span></h5>
					<div>
						{tokenURIs.map((blank, index) => { return(
							<SingleImage blanksImg={blank} index={index} handleClick={() => noClick(index)} modulo={2}/>
							//<img src={blank.img} onClick={() => handleClick(index)}/>
						)})}
					</div>
				</CardBody>
			</Card>        
		</>
	);
}


export default Image;