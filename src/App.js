import React from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import Footer from './components/Footer';
import './scss/style.scss';

function App() {
	return (
    <div className='container'>
      <Header />
      <Editor />
      <Footer />
    </div>
	);
}

export default App;
