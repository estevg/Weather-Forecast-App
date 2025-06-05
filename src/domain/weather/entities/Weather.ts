export class Weather {
  constructor(
    public readonly city: string,
    public readonly temperature: number,
    public readonly description: string,
    public readonly icon: string,
    public readonly min: number,
    public readonly max: number,
    public readonly dateTime: string
  ) {}
}
