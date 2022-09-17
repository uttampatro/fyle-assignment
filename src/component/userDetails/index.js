import React, { useEffect, useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkIcon from '@mui/icons-material/Link';
import axios from 'axios';

function UserDetails() {
    const [user, setUser] = useState({});

    const userDetails = async () => {
        try {
            await axios.get('userDetails.json').then(response => {
                setUser(response.data);
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        userDetails();
    }, []);

    return (
        <div>
            <div className="profileBody">
                <div className="imageBody">
                    <div className="image">
                        <p style={{ color: '#bbbbbb', fontWeight: '600' }}>
                            Image
                        </p>
                    </div>
                </div>
                <div className="userDetails">
                    <h2>{user.name}</h2>
                    <p>{user.bio}</p>
                    <div
                        style={{
                            display: 'flex',

                            paddingBottom: '10px',
                        }}
                    >
                        <LocationOnIcon />
                        <p style={{ paddingLeft: '10px', paddingTop: '2px' }}>
                            {user.place}
                        </p>
                    </div>
                    <p>
                        Twitter:{' '}
                        <a
                            href={user.twitter_url}
                            style={{
                                color: 'black',
                                textDecoration: 'none',
                            }}
                        >
                            {user.twitter_url}
                        </a>
                    </p>
                </div>
            </div>
            <div style={{ display: 'flex', paddingLeft: '7%' }}>
                <LinkIcon />
                <a
                    href={user.github_url}
                    style={{
                        paddingLeft: '10px',
                        paddingTop: '2px',
                        color: 'black',
                        textDecoration: 'none',
                    }}
                >
                    {user.github_url}
                </a>
            </div>
        </div>
    );
}

export default UserDetails;
