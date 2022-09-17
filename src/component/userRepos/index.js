import React, { useEffect, useState } from 'react';
import axios from 'axios';
import usePagination from '../pagination/Pagination';
import { Pagination } from '@mui/material';
import PaginationComponent from '../pagination';

function UserRepos() {
    const [currentPage, setCurrentPage] = useState(1);
    const PER_PAGE = 10;

    const [repos, setRepos] = useState([]);

    const count = Math.ceil(repos.length / PER_PAGE);
    const _DATA = usePagination(repos, PER_PAGE);

    const handleChange = (e, p) => {
        setCurrentPage(p);
        _DATA.jump(p);
    };

    const userRepos = async () => {
        try {
            await axios.get(`userRepos.json`).then(response => {
                setRepos(response.data);
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        userRepos();
    }, []);

    return (
        <div>
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
            <PaginationComponent
                count={count}
                currentPage={currentPage}
                handleChange={handleChange}
            />
        </div>
    );
}

export default UserRepos;
