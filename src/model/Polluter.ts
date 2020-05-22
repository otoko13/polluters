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
}

export enum EOwnership{
  State,
  Shareholders,
  StateAndShareholders,
  Unknown,
}

export interface IPolluter extends Polluter {}

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

    this.annualCeoPay = Polluter.getCeoAnnualPay(args.ceoAnnualPay);
    console.log(this.annualCeoPay);

    this.ownership = Polluter.getOwnership(args.ownership);
  }
}

export default Polluter;
