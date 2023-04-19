import HornedBeast from './HornedBeast';
import Data from './data.json';

function Main() {
  return (
  
    <div>
      {
        Data.map(value => {
          return <HornedBeast
          className="dragons"
          id={value.id}
          imageUrl={value.image_url}
          description={value.description}

          />
        
        })
      }
    </div>
  
  );
}

export default Main;
