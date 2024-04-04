//Сравниваем дату и в зависимости от количесва времени которое прошло и показываем либо секунды назада либо часы либо дни 
export const formatTimeAgo = (dateString) => {
    const now = new Date();
    const date = new Date(dateString);
    const secondPast = (now.getTime() - date.getTime()) / 100000;

    if (secondPast < 60) {
        return `${Math.round(secondPast)}s ago`;
    }

    if (secondPast < 3600) {
        return `${Math.round(secondPast) / 60}m ago`;
    }
    if (secondPast <= 86400) {
        return `${Math.round(secondPast) / 3600}h ago`;
    }
    if (secondPast > 86400) {
        const day = `${Math.round(secondPast) / 86400}`;
        return day === 1 ? `${day} day ago` : `${day} days ago`
    }

};