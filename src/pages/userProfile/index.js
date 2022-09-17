import React, { Profiler, useEffect, useState } from 'react';
import './style.css';
import { Pagination, TablePagination } from '@mui/material';
import axios from 'axios';
import usePagination from '../../component/pagination/Pagination';
import UserDetails from '../../component/userDetails';
import UserRepos from '../../component/userRepos';

function UserProfile() {
    return (
        <div className="profile">
            <UserDetails />
            <UserRepos />
        </div>
    );
}

export default UserProfile;
