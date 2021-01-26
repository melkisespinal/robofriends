/**
 * @description: Pure function Component that accepts card parameters
 * and displays them.
 * @author: Melkis Espinal
 */

const Card = ({id, name, email}) => {
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5 grow'>
      <img alt='Robot' src={`https://robohash.org/${id}?200x200`}/>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default Card;