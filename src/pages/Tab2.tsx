import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonInput } from '@ionic/react';
import './Tab2.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle slot="start">GoCode</IonTitle>
          <IonButtons slot="end" className="toolbar-buttons">
            <IonButton>Courses</IonButton>
            <IonButton>Pricing</IonButton>
            <IonButton>Contact Us</IonButton>
            <IonInput placeholder="Search" 
            type="text" className="search-input" />
            <IonButton>Login</IonButton>
            <IonButton>Sign Up</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className='mycontainer'>
          <div className='nopp'></div>
          <div className='containerinacontainer'>
            <div className='myinnercontainer'>
              <h1 className='h12'>Learn Coding
                <br/>
                Anytime
              </h1>
              <p>Designed for kids and Teens</p>
              <button className='btn12'>Get started &nbsp; &#8594;</button>
            </div>
            <div className='myinnercontainer'>
              <img src='https://parachictacademy.com.ng/wp-content/uploads/2022/04/coding-classes-for-kids-in-Ibadan.png' alt='Coding classes for kids'/>
            </div>
          </div>
        </div>
        <br />
        <div className='second-page'>
          <h1 className='why-title'>Why <span className='gocode'>GoCode</span></h1>
          <div className='features-container'>
            <div className='feature'>
              <img src='codingteachers.webp' />
              <h2>Personalized Course</h2>
              <p>Students learn and practice at their own pace.</p>
            </div>
            <div className='feature'>
              <img src='codingteachers.webp'/>
              <h2>Trusted Teacher</h2>
              <p>We only choose the best and verified teachers.</p>
            </div>
            <div className='feature'>
              <img src='codingteachers.webp' />
              <h2>Large Community</h2>
              <p>We provide forum area, so students can help each other.</p>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
