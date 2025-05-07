export interface RecipeStep {
  text: string;
  image?: string;
}

export interface Recipe {
  title: string;
  description: string;
  image: string;
  steps: RecipeStep[];
}

export const recipes: Recipe[] = [
  {
    title: "🍳 뿌링마요 덮밥",
    description: "뿌링클 치킨, 마요소스, 계란후라이의 환상조합!",
    image: "/images/recipes/bburinkle.png",
    steps: [
      {
        text: "뿌링클 치킨을 전자렌지 또는 에어프라이어로 따뜻하게 데우고, 먹기 좋게 잘게 자른다.",
      },
      {
        text: "큰 볼에 밥 1공기를 담는다.",
      },
      {
        text: "간장 1숟가락, 마요네즈 약간 (간장의 절반 정도), 설탕 약간을 섞어 소스를 만든다.",
      },
      {
        text: "만든 소스의 절반 정도를 밥 위에 뿌린다.",
      },
      {
        text: "그 위에 잘게 썬 뿌링클 치킨을 얹고, 다시 소스를 약간 더 뿌린다.",
      },
      {
        text: "계란후라이 2개를 그 위에 올린다.",
      },
      {
        text: "남은 소스를 계란 위에 골고루 뿌린다.",
      },
      {
        text: "마요네즈를 위에 촥~ 뿌려서 마무리한다.",
      },
    ],
  },
  {
    title: "🍙 주먹밥 에어프라이어 리메이크",
    description: "전자렌지 + 에어프라이어 조합으로 바삭하게!",
    image: "/images/recipes/onigiri.jpg",
    steps: [
      { text: "전자렌지에 3분간 돌려 해동한다." },
      { text: "에어프라이어를 180도 3분 예열한다." },
      { text: "종이호일에 올려 180도에서 5분 조리!" },
    ],
  },
  {
    title: "🌶️ 불닭볶음면",
    description: "매운맛이 당길 때! 리코의 단골 야식 조합.",
    image: "/images/recipes/buldak.jpg",
    steps: [
      { text: "불닭볶음면을 끓인다." },
      { text: "물을 따라내고 소스를 넣어 볶는다." },
      { text: "취향에 따라 계란후라이, 치즈 추가 가능." },
    ],
  },
  {
    title: "🌽 콘마요",
    description: "옥수수와 마요네즈의 고소하고 달달한 조합!",
    image: "/images/recipes/conmayo.jpg",
    steps: [
      { text: "옥수수통조림을 체에 밭쳐 물기를 뺀다." },
      { text: "버터와 함께 팬에 살짝 볶는다." },
      { text: "마요네즈와 설탕을 넣고 섞는다." },
      { text: "전자레인지 또는 오븐에 살짝 구워 마무리." },
    ],
  },
  {
    title: "🍜 리코표 비빔국수",
    description: "리코가 알려준 정확한 양념 비율로 새콤달콤하게!",
    image: "/images/recipes/bibim-noodles.jpg",
    steps: [
      { text: "면을 삶고 찬물에 헹궈 물기를 완전히 뺀다." },
      {
        text: "양념장을 만든다:\n- 고추장 1숟가락\n- 다진 마늘 1/3숟가락\n- 간장 1/2숟가락\n- 식초 1/2~1숟가락\n- 올리고당 1숟가락\n- 들기름 1숟가락",
      },
      { text: "면과 양념을 골고루 비빈다." },
      { text: "마지막에 깨를 뿌려 마무리한다." },
    ],
  },
  {
    title: "🥓 김치볶음밥",
    description: "남은 김치로 간단하게 만드는 든든한 한 끼.",
    image: "/images/recipes/kimchi-fried-rice.jpg",
    steps: [
      { text: "김치를 잘게 썰어 팬에 볶는다." },
      { text: "밥을 넣고 함께 볶으며 간을 맞춘다." },
      { text: "굴소스나 간장을 추가해 풍미를 더한다." },
      { text: "계란후라이를 얹거나 김가루로 마무리." },
    ],
  },
];
