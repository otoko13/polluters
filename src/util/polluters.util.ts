import pollutersData from '../data/top20_polluters.json';
import Polluter, { IPolluter } from '../model/Polluter';

export interface IFossilFuelData {
  name: string;
  rank: number;
  millionsOfBarrelsPerDay: number;
}

class PollutersUtil {
  static getPolluters(): IPolluter[] {
    return pollutersData.map(polluter => new Polluter({
      name: polluter.Name,
      rank: polluter.Rank,
      longitude: polluter.Longitude,
      latitude: polluter.Latitude,
      globalEmissions: polluter['Global emissions 1965-2017'],
      ceo: polluter.CEO,
      hq: polluter.HQ,
      ownership: polluter.Ownership,
      ceoAnnualPay: polluter['CEO pay'],
      environmentalDisaster: polluter['Environmental disaster'],
      environmentalScandal: polluter['Environmental scandal'],
      fossilFuelProduction: polluter['Fossil fuel production'],
      globalEmissions1965to2017: polluter['Global emissions 1965-2017'],
      projectedIncreaseInProduction2018to2030: polluter['Projected increase in production 2018-30'],
      projectedEmissions2018to2030: polluter['Projected emissions 2018-30'],
      investmentInRenewables: polluter['Investment in renewables'],
      futureProjects: polluter['Future projects'],
      revenue: polluter.Revenue,
    }));
  }

  static getNumericalBarrelsPerDay(polluter: IPolluter): number {
    if (!polluter.fossilFuelProduction) {
      return 0;
    }
    const regEx = /^(.+)m barrels of oil.*$/gi;
    const payMatch = regEx.exec(polluter.fossilFuelProduction);
    if (!payMatch) {
      return 0;
    }
    return parseFloat(payMatch[1]);
  }

  static getAllFossilFuelData(polluters: IPolluter[]): IFossilFuelData[] {
    return [...polluters]
      .sort((p1, p2) => (p1.rank > p2.rank ? 1 : -1))
      .map(p => ({
        name: p.name,
        rank: p.rank,
        millionsOfBarrelsPerDay: this.getNumericalBarrelsPerDay(p),
      }))
      .filter(p => p.millionsOfBarrelsPerDay > 0);
  }
}

export default PollutersUtil;
