import HornedBeast from './HornedBeast';

function Main() {
  return (
    <div>
        <HornedBeast 
         imageUrl="hornedbeast1.jpg"
         title="Unicorn"
         description="This is a unicorn"
         
         />
        <HornedBeast 
        imageUrl="hornedbeast.png"
        title="Troll"
        description="This is a troll with a horn"
        
        />  
    </div>
  
  );
}

export default Main;
