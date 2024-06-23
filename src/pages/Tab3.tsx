import { IonContent,IonButtons,IonButton, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonRow, IonCol } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import {mail,location,call } from 'ionicons/icons';
import React from 'react';
const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Marketing</IonTitle>
          <IonButtons  slot='end'>
           <IonButton>Home</IonButton>
            <IonButton>Login</IonButton>
            <IonButton>Sign up</IonButton>
            </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <div className='div1'>
            <h1 className='h1'>Get In Touch</h1>
            <p className='p1'>Pain itself, in being reprehended in pleasure, wants to be free from pain, but nothing is at fault.</p>
            <p className='helloname'><IonIcon icon={mail}></IonIcon>  CHART TO US</p>
            <p className='p2'>Our Friendly Team Is Here To Help</p>
            <p className='p3'>hi@ourcompany.com</p>
            <p className='p4'><IonIcon icon={location}></IonIcon>  OFFICE</p>
            <p>Come Say Hi To Our HQ</p>
            <p className='h9'>121 rock street</p>
            <p className='niyorktag'>New york,NY 92103-9000</p>
            <p><IonIcon icon={call}></IonIcon>  PHONE</p>
            <p>Moon-Fri from 8pm to 5am</p>
            <p>+1(555)000-000</p>
          </div>
          <div className='brand'>
            <h4 className='h4'>LEVEL UP YOUR BRAND</h4>
            <p className='p2'>You can reach us anytime via <span className='span'>hi@ourcompany.com</span></p>

            <IonRow>
              <IonCol size='5'>
              <h1 className='h20'>Name</h1>
            <input placeholder="Name" 
            type="text" className="name-input" />
          
              </IonCol>

              <IonCol size='5'>
              <h1 className='h21'>Email</h1>
            <input placeholder="Email" 
            type="text" className="email-input" />

              </IonCol>
            </IonRow>

            <br />
           <div className='item1'> <input type='checkbox'/>item 1 <br /></div>
           <div className='item2'> <input type='checkbox'/>item 2 <br /></div>
           <div className='item3'> <input type='checkbox'/>item 3 <br /></div>

            <p className='p30'>How can we help you?</p>
           <input type='text' className='assist'></input>
           <br />
           <br />
           <div className='item1'> <input type='checkbox'/>I agree to the Terms of Service <br /></div>
           <br/>
           <IonButton className='btn'>Submit</IonButton>
          </div>
      </IonContent>
    </IonPage>
  );
};
export default Tab2;