const MovieCard = (props) => {
  return 
    <>
      <div>
        <img src={props.imageURL} />
        <h3> {props.title} </h3>
        <p> {props.description} </p>

      </div>
    </>
};

export default MovieCard;
