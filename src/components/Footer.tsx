import React, { useMemo } from 'react';
import { IEmployee } from '../types';

interface IProps {
    employees: IEmployee[];
    selectedIds: number[];
}

const Footer = ({ employees, selectedIds }: IProps): JSX.Element => {

    if (!selectedIds.length) {
        return null;
    }

    const list = useMemo(() => {
        return selectedIds.map((item) => {
            return employees[item - 1].firstName;
        }).join(', ')
    }, [selectedIds])

    return (
        <><b>Пользователи:</b> {list}</>
    );
};

export default Footer;
