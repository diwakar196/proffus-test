import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './Components/NavBar';
import Categories from './Components/Categories';
import Faqs from './Components/Faqs';
import HaveRead from './Components/HaveRead';
import Topics from './Components/Topics';
import FishCat from './Components/FishCat.json';
import Footer from './Components/Footer';
import './styles/App.css';

function App() {

  let num = Math.floor((Math.random() * 7));


  return (
    <div className="App">
      <NavBar />
      <div className='wtf-img-div'><img src='https://whatthefishrolls.com/wp-content/uploads/2016/09/what-11.png' alt='' className='wtf-img'></img></div>
      <div className='how-div'>
        <h1>HOW IT WORKS</h1>
        <h4>Sea Basket delivers fresh sourced seafood in a few easy clicks</h4>
      </div>
      <div className='categories-div'>
        <h1 className='categories-heading'>CATEGORIES</h1>
        <div className='categories-list' key= {FishCat.body.id}>
            <Categories imgsrc={FishCat.body[(num)%6].imgPath} heading={FishCat.body[(num)%6].name}/>
            <Categories imgsrc={FishCat.body[(num+1)%6].imgPath} heading={FishCat.body[(num+1)%6].name}/>
            <Categories imgsrc={FishCat.body[(num+2)%6].imgPath} heading={FishCat.body[(num+2)%6].name}/>
        </div>
        {/* {FishCat.body.map((body) =>{
          <div className='categories-list' key= {FishCat.body.id}>
          <Categories imgsrc={FishCat.body.imgPath} heading={FishCat.body.name}/>
          <Categories imgsrc={FishCat.body.imgPath} heading={FishCat.body.name}/>
          <Categories imgsrc={FishCat.body.imgPath} heading={FishCat.body.name}/>
        </div>
        })}         */}
      </div>
      <div className='glance'>
        <h1 className='headings'>A GLANCE AT OUR PRODUCT</h1>
        <img src='https://itiq.ps/wp-content/uploads/2021/10/youtube-video-titles.jpg' alt='' className='glance-img'></img>
      </div>
      <Faqs />
      <h1 className='headings'>HAVE A READ</h1>
      <HaveRead heading="The right quality" />
      <HaveRead heading="The right time" />
      <HaveRead heading="The basis of a balanced diet" />
      <h1 className='headings'>TOPICS YOU CAN'T MISS</h1>
      <Topics heading="TOPICS YOU CAN'T MISS"/>
      <Topics heading="HOW TO CLEAN/CUT YOUR SEAFOOD"/>
      <Footer />

    </div>
  );
}

export default App;
