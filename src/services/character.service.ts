const characterUrl: string | undefined = process.env.CHARACTER_URL;

export class CharacterService {
  constructor() {};

  async getAll() {
    const response = await fetch(<RequestInfo>characterUrl);
    console.log(response);
    return response;
  }
}
