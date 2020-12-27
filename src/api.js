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
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=6`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=6`;
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=6`;

// The final URL for the games
export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;

// Game Details - game id is needed per game for added details
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}`;

// Game screenshots
// In this case, the screenshots are not part of the original API request,
// so we do it separately here
export const gameScreenshotURL = (game_id) => `${base_url}games/${game_id}/screenshots`;

// Searched Game
export const searchGameURL = (game_name) => `${base_url}games?search=${game_name}&page_size=9`;