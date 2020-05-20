import firebase from 'firebase';

class Firebase {
  constructor(){
    this.init()
    this.checkAuth()
  }

  init = () => {
    if(!firebase.apps.length){
      firebase.initializeApp({
        apiKey: "AIzaSyCp1yi05WfUf6jWETTj2MqhAI1YU4ZL6fc",
        authDomain: "chatapp-da7d4.firebaseapp.com",
        databaseURL: "https://chatapp-da7d4.firebaseio.com",
        projectId: "chatapp-da7d4",
        storageBucket: "chatapp-da7d4.appspot.com",
        messagingSenderId: "260674464363",
        appId: "1:260674464363:web:764cfac823a5375d4d1f2e",
        measurementId: "G-CKKX3GRL7K"
      });
    }
  };

  checkAuth = () => {
    firebase.auth().onAuthStateChanged(user => {
      if(!user){
        firebase.auth().signInAnonymously();
      }
    });
  };

  send = message => {
    message.forEach(item => {
      const message = {
        text: item.text,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: item.user
      };
      this.db.push(message);
    });

  };

parse = message => {
  const { user, text, timestamp} = message.val();
  const { key: _id } = message;
  const createdAt = new Date(timestamp);

  return {
    _id,
    createdAt,
    text,
    user
  };
};

get = callback => {
  this.db.on("child_added", snapshot => callback(this.parse(snapshot)));
};

off(){
  this.db.off();
}

get db(){
  return firebase.database().ref("message");
}

get uid(){
  return (firebase.auth().currentUser || {}).uid;
}

}

export default new Firebase();
