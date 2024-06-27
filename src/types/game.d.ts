type Game = {
    code: string;
    url: string;
    name: Record<lang, string>
    isPortrait: boolean;
    description: Record<lang, string>
    gamePreviews: Record<lang, string>
    assets: {
      cover: string;
      brick: string;
      thumb: string;
      wall: string;
      square: string;
      screens: string[];
      coverTiny: string;
      brickTiny: string;
    };
    categories: Record<lang, string[]>;
    tags: Record<lang, string[]>;
    width: number;
    height: number;
    colorMuted: string;
    colorVibrant: string;
    privateAllowed: boolean;
    rating: number;
    numberOfRatings: number;
    gamePlays: number;
    hasIntegratedAds: boolean;
}