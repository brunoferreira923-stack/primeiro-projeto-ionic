import { IonContent, IonAvatar, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cartão de visita</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader className="cabecalho" collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Apresentação</IonTitle>
          </IonToolbar>
          <IonAvatar>
            <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </IonAvatar>
        </IonHeader>
        <IonCard>
      <IonCardHeader>
        <IonCardTitle className='titulo'>NOME</IonCardTitle>
        <IonCardSubtitle>Celular</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Informações</IonCardContent>
    </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;