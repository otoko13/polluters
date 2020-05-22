export interface IPolluterArgs {
  rank: number;
  name: string;
  longitude: number;
  latitude: number;
  globalEmissions: string;
  ownership: string;
  hq: string;
  ceo: string | undefined;
  ceoAnnualPay: string | undefined;
  fossilFuelProduction: string | undefined;
  investmentInRenewables: string | undefined;
  globalEmissions1965to2017: string | undefined;
  projectedIncreaseInProduction2018to2030: string | undefined;
  projectedEmissions2018to2030: string | undefined;
  environmentalDisaster: string | undefined;
  environmentalScandal: string | undefined;
  futureProjects: string | undefined;
  revenue: string | undefined;
}

export enum EOwnership{
  State,
  Shareholders,
  StateAndShareholders,
  Unknown,
}

export interface IPolluter extends Polluter {}

const NO_INFORMATTON = 'No information';

class Polluter {
  readonly name: string;
  readonly rank: number;
  readonly longitude: number;
  readonly latitude: number;
  readonly globalEmissions: string;
  readonly ownership: EOwnership;
  readonly hq: string;
  readonly ceo: string;
  readonly annualCeoPay: number | undefined;
  readonly fossilFuelProduction: string;
  readonly investmentInRenewables: string;
  readonly globalEmissions1965to2017: string;
  readonly projectedIncreaseInProduction2018to2030: string;
  readonly projectedEmissions2018to2030: string;
  readonly environmentalDisaster: string | undefined;
  readonly environmentalScandal: string | undefined;
  readonly futureProjects: string;
  readonly revenue: string;

  private static getOwnership(ownership: string) {
    const isState = ownership.toLowerCase().indexOf('state') > -1;
    const isShareholder = ownership.toLowerCase().indexOf('shareholder') > -1;
    if (isState && isShareholder) {
      return EOwnership.StateAndShareholders;
    }
    if (isState) {
      return EOwnership.State;
    }
    if (isShareholder) {
      return EOwnership.Shareholders;
    }
    return EOwnership.Unknown;
  }

  private static getCeoAnnualPay(value: string | undefined) {
    if (!value) {
      return;
    }
    const regEx = /^\$(.+)m(.)*$/gi;
    const payMatch = regEx.exec(value);
    if (!payMatch) {
      return;
    }
    return parseFloat(payMatch[1]);
  }

  constructor(args: IPolluterArgs) {
    this.name = args.name;
    this.rank = args.rank;
    this.longitude = args.longitude;
    this.latitude = args.latitude;
    this.globalEmissions = args.globalEmissions;
    this.hq = args.hq;
    this.ceo = args.ceo || 'Unknown';
    this.fossilFuelProduction = args.fossilFuelProduction || NO_INFORMATTON;
    this.investmentInRenewables = args.investmentInRenewables || NO_INFORMATTON;
    this.globalEmissions1965to2017 = args.globalEmissions1965to2017 || NO_INFORMATTON;
    this.projectedIncreaseInProduction2018to2030 = args.projectedIncreaseInProduction2018to2030 || NO_INFORMATTON;
    this.projectedEmissions2018to2030 = args.projectedEmissions2018to2030 || NO_INFORMATTON;
    this.environmentalDisaster = args.environmentalDisaster;
    this.environmentalScandal = args.environmentalScandal;
    this.futureProjects = args.futureProjects || NO_INFORMATTON;
    this.revenue = args.revenue || NO_INFORMATTON;

    this.annualCeoPay = Polluter.getCeoAnnualPay(args.ceoAnnualPay);
    console.log(this.annualCeoPay);

    this.ownership = Polluter.getOwnership(args.ownership);
  }
}

export default Polluter;
