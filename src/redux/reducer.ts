import { AnyAction } from 'redux';
import { IAppState } from '../types';

const initialState: IAppState = {
    employees: [],
    selectedIds: [],
    employeesLoadingState: null
};

const state = (state: IAppState = initialState, action: AnyAction): IAppState => {
    switch (action.type) {
        case 'EMPLOYEES_LOADING_STATE': {
            return {
                ...state,
                employeesLoadingState: action.employeesLoadingState
            }
        }
        case 'EMPLOYEES_SET_DATA': {
            return {
                ...state,
                employees: action.employees
            }
        }
        default:
            return state;
    }
};

export default state;
