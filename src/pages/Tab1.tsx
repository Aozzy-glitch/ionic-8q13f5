import React from 'react';
import { IonPage, IonContent, IonTabBar, IonTabButton, IonLabel, IonIcon, IonTitle } from '@ionic/react';
import { home, search, addCircle, notifications, person } from 'ionicons/icons';
import './Tab1.css';

const Tab1 = () => {
  return (
    <IonPage>

      <IonContent>
        <IonTitle>Upcoming</IonTitle>
        <div className="upcoming-section">
          <div className="section-header">Design talks</div>
          <div className="section-title">The future of design systems</div>
          <div className="section-time">5:00PM</div>
          <div className="section-speakers">3 Speakers</div>
        </div>
        <IonTitle>Happening now</IonTitle>
        <div className="happening-now-section">
          <div className="section-header">Javascript talks</div>
          <div className="section-title">Let's talk about ReactJS</div>
          <div className="speakers">
            <img src="bitmoji.png" alt="Speaker 1" />
            <img src="bitmoji2.png" alt="Speaker 2" />
            <img src="bitmoji3.png" alt="Speaker 3" />
            <img src="bitmoji4.png" alt="Speaker 4" />
          </div>
          <div className="section-speakers">4 Speakers</div>
          <div className="section-audience">200 Audiences</div>
        </div>
      </IonContent>
     
    </IonPage>
  );
};

export default Tab1;
