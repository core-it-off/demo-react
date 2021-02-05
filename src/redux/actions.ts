import { AnyAction, Dispatch } from 'redux';
import { apiService } from '../apiService';
import { IEmployee } from '../types';

/**
 * Экшн-креатор для смены состояния загрузки списка.
 */
export const setEmployeesLoadingState = (state: boolean = true): AnyAction => {
    return {
        type: 'EMPLOYEES_LOADING_STATE',
        employeesLoadingState: state
    }
};

/**
 * Экшн-креатор для смены состояния загрузки списка.
 */
export const setEmployeesData = (employees: IEmployee[]): AnyAction => {
    return {
        type: 'EMPLOYEES_SET_DATA',
        employees
    }
};

/**
 * Загрузить список сотрудников.
 */
export const loadEmployees = () => (dispatch: Dispatch): Promise<void> => {
    dispatch(setEmployeesData([]));
    dispatch(setEmployeesLoadingState(true));

    return apiService.fetchEmployees().then((res) => {
        // TODO batch
        dispatch(setEmployeesData(res));
        dispatch(setEmployeesLoadingState(false));
    });
}

