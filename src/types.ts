export interface IEmployee {
    id: number;
    firstName: string;
    secondName: string;
    age: number;
};

export interface IAppState {
    employees: [],
    employeesLoadingState: boolean;
    selectedIds: number[]
}
