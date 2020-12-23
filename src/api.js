// ? API logic

// * Base URL (no API key needed)
const base_url = "https://api.rawg.io/api/";

// * Dynamic Variables
// Getting the date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    // Adding the 0 before the month number
    if (month < 10) {
        return `0${month}`
    } else {
        return month;
    }
}

// Getting the current day
const getCurrentDay = () => {
    const day = new Date().getDate();
    // Adding the 0 before the day number
    if (day < 10) {
        return `0${day}`
    } else {
        return day;
    }
}

// * Compiling day/month/year variables
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular Games - retrieving games from last year to current date
// Upcoming Games - retrieving games coming out next year
// New Games - retrieving games coming out now
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=15`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=15`;
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=15`;

// The final URL for the games
export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;