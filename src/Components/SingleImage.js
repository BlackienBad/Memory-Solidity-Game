function SingleImage({blanksImg, index, handleClick, modulo}) {
  return (
    <span>
        {(((index)%modulo)===0) ? <span> <br /> <br /> </span>: <span> </span>}
        <img width='100px' height='100px' src={blanksImg} onClick={() => handleClick(index)}/>
    </span>
  );
}

export default SingleImage;