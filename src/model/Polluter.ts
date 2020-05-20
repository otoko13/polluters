export interface IPolluterArgs {
  rank: number;
  name: string;
  longitude: number;
  latitude: number;
}

class Polluter {
  readonly name: string;
  readonly rank: number;
  readonly longitude: number;
  readonly latitude: number;

  constructor(args: IPolluterArgs) {
    this.name = args.name;
    this.rank = args.rank;
    this.longitude = args.longitude;
    this.latitude = args.latitude;
  }
}

export default Polluter;
