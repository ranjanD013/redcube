import React from 'react';
import TabbedSlider from './TabbedSlider';



function Tabbed() {
  const tabs = [
    { 
        label: 'Social', 
        image:'./images/tabimg1.png', 
        smalltitle:'ONLINE ADS',
        title:'In an online ad ecosystem, is it vital to be visible to your audience. As a brand, being relevant is your biggest challenge.',
        content: 'As scale and speed matter and efficiency matters even more every day, it is imperative to implement the right insights and online ad marketing strategy.',
        bttnText:'Learn more about  our “online ads” service',
        btnImage:'./images/btnarrow.png' 

    },

    { 
        label: 'Online Ads', 
        image:'./images/tabimg-2.png', 
        smalltitle:'ONLINE ADS',
        title:'In an online ad ecosystem, is it vital to be visible to your audience. As a brand, being relevant is your biggest challenge.',
        content: 'As scale and speed matter and efficiency matters even more every day, it is imperative to implement the right insights and online ad marketing strategy.',
        bttnText:'Learn more about  our “online ads” service',
        btnImage:'./images/btnarrow.png' 
    },
    { 
        label: 'Digital Films',
        image:'./images/tabimg-3.png', 
        smalltitle:'ONLINE ADS',
        title:'In an online ad ecosystem, is it vital to be visible to your audience. As a brand, being relevant is your biggest challenge.',
        content: 'As scale and speed matter and efficiency matters even more every day, it is imperative to implement the right insights and online ad marketing strategy.',
        bttnText:'Learn more about  our “online ads” service',
        btnImage:'./images/btnarrow.png' 
    },
    { 
        label: 'Animated Videos',
        image:'./images/tabimg-4.png', 
        smalltitle:'ONLINE ADS',
        title:'In an online ad ecosystem, is it vital to be visible to your audience. As a brand, being relevant is your biggest challenge.',
        content: 'As scale and speed matter and efficiency matters even more every day, it is imperative to implement the right insights and online ad marketing strategy.',
        bttnText:'Learn more about  our “online ads” service',
        btnImage:'./images/btnarrow.png'  
    },
    { 
        label: 'SEO', 
        image:'./images/tabimg-5.png', 
        smalltitle:'ONLINE ADS',
        title:'In an online ad ecosystem, is it vital to be visible to your audience. As a brand, being relevant is your biggest challenge.',
        content: 'As scale and speed matter and efficiency matters even more every day, it is imperative to implement the right insights and online ad marketing strategy.',
        bttnText:'Learn more about  our “online ads” service',
        btnImage:'./images/btnarrow.png' 
        
    },

    { 
        label: 'Ecommerce', 
        image:'./images/tabimg-3.png', 
        smalltitle:'ONLINE ADS',
        title:'In an online ad ecosystem, is it vital to be visible to your audience. As a brand, being relevant is your biggest challenge.',
        content: 'As scale and speed matter and efficiency matters even more every day, it is imperative to implement the right insights and online ad marketing strategy.',
        bttnText:'Learn more about  our “online ads” service',
        btnImage:'./images/btnarrow.png'  
        
    },
  ];

  return (
    <div className="App">
      
      <TabbedSlider tabs={tabs} />
    </div>
  );
}

export default Tabbed;
