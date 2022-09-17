import { Pagination } from '@mui/material';
import React from 'react';

function PaginationComponent({ handleChange, currentPage, count }) {
    return (
        <div>
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

export default PaginationComponent;
