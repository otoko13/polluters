import pollutersData from '../resources/top20_polluters.json';
import Polluter from '../model/Polluter';

class PollutersUtil {
  static getPolluters(): Polluter[] {
    return pollutersData.map(polluter => new Polluter({
      name: polluter.Name,
      rank: polluter.Rank,
      longitude: polluter.Longitude,
      latitude: polluter.Latitude,
      globalEmissions: polluter['Global emissions 1965-2017'],
    }));
  }
}

export default PollutersUtil;
