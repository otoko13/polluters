import pollutersData from '../data/top20_polluters.json';
import Polluter from '../model/Polluter';

class PollutersUtil {
  static getPolluters(): Polluter[] {
    return pollutersData.map(polluter => new Polluter({
      name: polluter.Name,
      rank: polluter.Rank,
      longitude: polluter.Longitude,
      latitude: polluter.Latitude,
      globalEmissions: polluter['Global emissions 1965-2017'],
      ceo: polluter.CEO,
      hq: polluter.HQ,
      ownership: polluter.Ownership,
      ceoAnnualPay: polluter["CEO pay"],
      environmentalDisaster: polluter["Environmental disaster"],
      environmentalScandal: polluter["Environmental scandal"],
      fossilFuelProduction: polluter["Fossil fuel production"],
      globalEmissions1965to2017: polluter["Global emissions 1965-2017"],
      projectedIncreaseInProduction2018to2030: polluter["Projected increase in production 2018-30"],
      projectedEmissions2018to2030: polluter["Projected emissions 2018-30"],
      investmentInRenewables: polluter["Investment in renewables"],
      futureProjects: polluter["Future projects"],
      revenue: polluter.Revenue,
    }));
  }
}

export default PollutersUtil;
