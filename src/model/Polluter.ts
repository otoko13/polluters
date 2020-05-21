export interface IPolluterArgs {
  rank: number;
  name: string;
  longitude: number;
  latitude: number;
  globalEmissions: string;
}

export interface IPolluter extends Polluter {}

class Polluter {
  readonly name: string;
  readonly rank: number;
  readonly longitude: number;
  readonly latitude: number;
  readonly globalEmissions: string;

  constructor(args: IPolluterArgs) {
    this.name = args.name;
    this.rank = args.rank;
    this.longitude = args.longitude;
    this.latitude = args.latitude;
    this.globalEmissions = args.globalEmissions;
  }
}

export default Polluter;
