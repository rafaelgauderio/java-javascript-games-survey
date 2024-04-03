import moment from 'moment';
import { Game, RecordItem } from './types';


export function formatDate(date: string) {
    const newDate = moment(date).format("DD/MM/YYYY HH:MM");
    return newDate;
}
// formato universal aceito para formatar datas

export const buildBarGraphicSeries = (games: Game[], records: RecordItem[]) => {
    const mappedGames = games.map(game => {
      const filteredGames = records.filter(item => {
        return item.gameTitle === game.title && item.gamePlatform === game.platform
      });
  
      return {
        x: `${game.title} | ${game.platform}`,
        y: filteredGames.length
      }
      
    });
  
    const sortedGames = mappedGames.sort((a, b) => {
      return b.y - a.y;
    });
  
    return sortedGames.slice(0, 9);
  };
  
  export const getPlatformGraphicData = (records: RecordItem[]) => {
    const platforms = ["PC", "PLAYSTATION", "XBOX", "WII", "ATARI"];
  
    const series = platforms.map(platform => {
      const filtedGames = records.filter(item => {
        return platform === item.gamePlatform;
      })
  
      return filtedGames.length;
    });
  
    return {
      labels: platforms,
      series,
    };
  };
  
  export const getGenderGraphicData = (records: RecordItem[]) => {
     const genderByAmount = records.reduce((accumulator, currentValue) => {
       if (accumulator[currentValue.genreName] !== undefined) {
         accumulator[currentValue.genreName] += 1;
       } else {
        accumulator[currentValue.genreName] = 1;
       }
  
       return accumulator;
     }, {} as Record<string, number>);
  
     const labels = Object.keys(genderByAmount);
     const series = Object.values(genderByAmount);
  
    return {
      labels,
      series
    };
  };
