import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'; 
import { Table } from 'antd';
import Footer from './Footer';

import {
    getAllEmployees,
    getEmployeesLoadingState
} from '../redux/selectors';

const columns = [
    {
        title: 'Имя',
        dataIndex: 'firstName',
    },
    {
        title: 'Фамилия',
        dataIndex: 'secondName',
    },
    {
        title: 'Возраст',
        dataIndex: 'age',
    },
];

const Employees = (): JSX.Element => {
    const [selectedIds, setSelectedIds] = useState([]);

    const employees = useSelector(getAllEmployees);
    const loadingState = useSelector(getEmployeesLoadingState);

    useEffect(() => {
        setSelectedIds([]);
    }, [employees])

    const handleSelectionChange = (keys: []) => {
        setSelectedIds(keys);
    };
    
    const rowSelection = {
        selectedRowKeys: selectedIds,
        onChange: handleSelectionChange,
        selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_NONE
        ],
    };

    const renderFooter = () => (
        <Footer employees={employees} selectedIds={selectedIds} />
    );
    
    return (
        <Table
            className="employees"
            rowSelection={rowSelection}
            footer={renderFooter}
            columns={columns}
            dataSource={employees}
            rowKey="id"
            loading={loadingState === true}
        />
    );
}

export default Employees;
