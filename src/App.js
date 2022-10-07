import { useState } from 'react';
import './App.css';
import { fetchToken, onMessageListener } from './firebase';
import UserProfile from './pages/userProfile';

function App() {
    const [show, setShow] = useState(false);
    const [notification, setNotification] = useState({ title: '', body: '' });
    const [isTokenFound, setTokenFound] = useState(false);
    fetchToken(setTokenFound);

    onMessageListener()
        .then(payload => {
            setNotification({
                title: payload.notification.title,
                body: payload.notification.body,
            });
            setShow(true);
            console.log(payload);
        })
        .catch(err => console.log('failed: ', err));

    return (
        <div>
            <UserProfile />
        </div>
    );
}

export default App;
