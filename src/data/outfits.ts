export const outfitKeys = [
  "magicGirl",
  "halloween",
  "policeHat",
  "christmas",
  "luigi",
  "hanbok",
  "librarian",
  "birthdayDress",
  "childrensDay",
  "springDate",
] as const;

export type OutfitKey = (typeof outfitKeys)[number];

export const outfitImages: Record<OutfitKey, string> = {
  magicGirl: "/images/outfits/magic-girl.png",
  halloween: "/images/outfits/halloween.png",
  policeHat: "/images/outfits/police-hat.png",
  christmas: "/images/outfits/christmas.png",
  luigi: "/images/outfits/luigi.png",
  hanbok: "/images/outfits/hanbok.png",
  librarian: "/images/outfits/librarian.png",
  birthdayDress: "/images/outfits/birthday-dress.png",
  childrensDay: "/images/outfits/childrens-day.png",
  springDate: "/images/outfits/spring-date.png",
};
