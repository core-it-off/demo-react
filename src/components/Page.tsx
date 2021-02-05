import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';

import Employees from './Employees';
import { loadEmployees } from '../redux/actions';
import { getAllEmployees } from '../redux/selectors';

const Page = (): JSX.Element => {

    const employees = useSelector(getAllEmployees);

    const dispatch = useDispatch();

    const handleLoadClick = () => {
        dispatch(loadEmployees());
    };

    const renderLoadButton = () => {
        const caption = employees.length ? 'Обновить список сотрудников' : 'Загрузить список сотрудников';

        return (
            <Button
                className="page__load-button"
                type="primary"
                children={caption}
                onClick={handleLoadClick}
            />
        );

    }

    return (
        <div className="page">
            {renderLoadButton()}
            <Employees />
        </div>
    );
}

export default Page;
