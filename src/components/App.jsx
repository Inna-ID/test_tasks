import Header from './Header';
import Content from './Content';

const App = () => {
  return (
      <div className="wrapper">
         <Header/>
         <div className="content">
            <Content/>
         </div>
      </div>
  );
}

export default App;
