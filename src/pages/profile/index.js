import React, { useEffect, useState } from 'react';
import './style.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkIcon from '@mui/icons-material/Link';
import { Pagination, TablePagination } from '@mui/material';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import axios from 'axios';
import usePagination from '../pagination/Pgination';

function Profile() {
    const [currentPage, setCurrentPage] = useState(1);
    const PER_PAGE = 10;

    const [reposPerPage, setReposPerPage] = useState(10);

    const [repos, setRepos] = useState([]);
    const [user, setUser] = useState({});

    const count = Math.ceil(repos.length / PER_PAGE);
    const _DATA = usePagination(repos, PER_PAGE);

    const handleChange = (e, p) => {
        setCurrentPage(p);
        _DATA.jump(p);
    };

    console.log(_DATA);

    const userDetails = async () => {
        try {
            await axios.get('userDetails.json').then(response => {
                setUser(response.data);
            });
        } catch (error) {
            console.log(error);
        }
    };

    const userRepos = async () => {
        try {
            await axios
                .get(
                    `userRepos.json?page=${
                        currentPage + 1
                    }&limit=${reposPerPage}`
                )
                .then(response => {
                    setRepos(response.data);
                });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        userDetails();
        userRepos();
    }, []);

    const handleChangePage = (event, value) => {
        setCurrentPage(value);
    };

    const handleChangeRowsPerPage = event => {
        setReposPerPage(parseInt(event.target.value, 10));
        setCurrentPage(0);
    };

    return (
        <div className="profile">
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
            <div className="userRepos">
                {_DATA.currentData().map(rep => {
                    return (
                        <div className="userRepo">
                            <h2>{rep.repo_name}</h2>
                            <p>{rep.description}</p>
                            <div className="navigation-items">
                                {rep.skills.map(skill => {
                                    return (
                                        <ul>
                                            <li>{skill}</li>
                                        </ul>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="profile_footer">
                <Pagination
                    count={count}
                    size="large"
                    page={currentPage}
                    variant="outlined"
                    shape="rounded"
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}

export default Profile;
