import { IEmployee } from './types';

const MOCK_EMPLOYEES_DATA: IEmployee[] = [];

for (let i = 1; i < 100; i++) {
    MOCK_EMPLOYEES_DATA.push({
        id: i,
        firstName: `Имя ${i}`,
        secondName: `Фамилия ${i}`,
        age: Math.floor(Math.random() * 25) + 20
    });
}

export const apiService = {
    /**
     * Загружает данные по сотрудникам.
     * Имитирует асинхронный запрос с задержкой в 2 секунды.
     */
    fetchEmployees(): Promise<IEmployee[]> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(MOCK_EMPLOYEES_DATA);
            }, 2000);
        });
    },
};
