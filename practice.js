const firebaseConfig = {
    apiKey: "AIzaSyCeNbXpvqlHDjDSiOxv3Tj9fFi6r89sTnE",
    authDomain: "social-1a23b.firebaseapp.com",
    databaseURL: "https://social-1a23b-default-rtdb.firebaseio.com",
    projectId: "social-1a23b",
    storageBucket: "social-1a23b.appspot.com",
    messagingSenderId: "870840876544",
    appId: "1:870840876544:web:5387c13b4f42eab56ee2e5",
    measurementId: "G-5ZEGHL7V6T"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:" adding user"
    });
}