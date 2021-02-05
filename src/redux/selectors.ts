import { IAppState } from "../types";

/**
 * Получить всех загруженных сотрудников.
 */
export const getAllEmployees = (state: IAppState) => state.employees;

/**
 * Получить список ключей отмеченных чекбоксом сотрудников.
 */
export const getSelectedIds = (state: IAppState) => state.selectedIds;

/**
 * Получить состояние загрузки списка сотрудников.
 */
export const getEmployeesLoadingState = (state: IAppState) => state.employeesLoadingState;
