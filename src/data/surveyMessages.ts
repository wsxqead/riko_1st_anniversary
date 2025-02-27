export interface SurveyAnswer {
  author: string;
  date: string;
  text: string;
  image?: string; // 선택적 속성 (필수 아님)
  video?: string; // 선택적 속성 (필수 아님)
}

export interface SurveyCategory {
  category: string;
  question: string;
  answers: SurveyAnswer[];
}

export const surveyMessages: SurveyCategory[] = [
  {
    category: "📌 리코의 변화",
    question: "처음 본 리코와 지금의 리코, 가장 큰 차이점은?",
    answers: [
      {
        author: "팬A",
        date: "2025-05-19",
        text: "처음엔 조금 낯설었지만, 지금은 가족 같은 느낌이에요! 😊",
      },
      {
        author: "팬B",
        date: "2025-05-19",
        text: "방송 초반엔 조금 수줍어 보였지만, 지금은 완전 프로 스트리머 같아요!",
      },
    ],
  },
  {
    category: "💙 내가 리코를 좋아하게 된 계기",
    question: "내가 리코를 좋아하게 된 계기는?",
    answers: [
      {
        author: "팬C",
        date: "2025-05-19",
        text: "노래 부르는 모습에 반했어요! GETCHA 커버 듣고 바로 팬이 되었어요.",
      },
      {
        author: "팬D",
        date: "2025-05-19",
        text: "리코의 게임 방송을 보다가 팬이 됐어요! FPS 실력이 너무 좋더라고요!",
      },
    ],
  },
  {
    category: "📅 입덕 시기",
    question: "언제부터 리코를 좋아하게 되었나요?",
    answers: [
      {
        author: "팬E",
        date: "2025-05-19",
        text: "2024년 7~9월 (배그 방송이 너무 재밌었어요!)",
      },
      {
        author: "팬F",
        date: "2025-05-19",
        text: "2025년 1~2월 (1주년 준비하는 모습을 보고 감동해서 입덕했어요!)",
      },
    ],
  },
  {
    category: "🎮 리코의 레전드 방송",
    question: "리코의 방송 중 '레전드'라고 생각하는 방송은?",
    answers: [
      {
        author: "팬G",
        date: "2025-05-19",
        text: "8번 승강장 방송이 진짜 최고였어요! 감동 그 자체!",
        image: "/images/legend-stream.jpg",
      },
      {
        author: "팬H",
        date: "2025-05-19",
        text: "배그 방송에서 클러치 플레이 했던 순간! 진짜 멋있었어요!",
        video: "https://www.youtube.com/embed/exampleID",
      },
    ],
  },
  {
    category: "🎶 최고의 커버곡",
    question: "리코가 부른 노래 중 최고의 커버곡은?",
    answers: [
      {
        author: "팬I",
        date: "2025-05-19",
        text: "용사 커버가 너무 좋았어요! 리코의 감성이 진짜 잘 담긴 노래!",
      },
      {
        author: "팬J",
        date: "2025-05-19",
        text: "주름맞추기가 최고! 원곡 느낌도 살리면서 리코만의 매력이 추가됐어요!",
      },
    ],
  },
  {
    category: "🎨 1주년 기념 팬아트",
    question: "리코의 1년을 기념하는 팬아트를 제출해주세요!",
    answers: [
      {
        author: "팬K",
        date: "2025-05-19",
        text: "리코의 1년을 기념하며 직접 그린 팬아트입니다! 🎨",
        image: "/images/fanart1.jpg",
      },
    ],
  },
  {
    category: "📖 리코와 함께한 1년, 재미있는 에피소드",
    question: "리코와 팬들 사이에서 있었던 재밌는 순간을 공유해주세요!",
    answers: [
      {
        author: "팬L",
        date: "2025-05-19",
        text: "팬들끼리 리코 관련 밈을 만들었던 게 너무 재미있었어요!",
      },
      {
        author: "팬M",
        date: "2025-05-19",
        text: "리코가 팬 닉네임을 잘못 읽고 빵 터진 적이 있었는데, 그게 레전드였어요! 😂",
      },
    ],
  },
  {
    category: "💌 1년 동안 고마웠어요, 리코에게 편지",
    question: "리코에게 전하고 싶은 메시지를 자유롭게 작성해주세요!",
    answers: [
      {
        author: "팬N",
        date: "2025-05-19",
        text: "1년 동안 너무 고생 많았어요! 리코 덕분에 매일 행복했어요 💙",
      },
      {
        author: "팬O",
        date: "2025-05-19",
        text: "앞으로도 건강하게, 즐겁게 방송해 줘요! 언제나 응원할게요! 🎉",
      },
    ],
  },
  {
    category: "🎁 리코 1주년 기념 굿즈",
    question: "어떤 테마의 굿즈를 가장 원하시나요?",
    answers: [
      {
        author: "팬P",
        date: "2025-05-19",
        text: "리코 마스코트 인형이 나온다면 바로 살 거예요!",
      },
      {
        author: "팬Q",
        date: "2025-05-19",
        text: "게임 아이콘 & 도트 디자인 굿즈가 나오면 너무 귀여울 것 같아요! 🎮",
      },
    ],
  },
  {
    category: "✨ 1주년 특별 질문",
    question:
      "리코 1주년을 맞아 팬들이 준비하면 좋을 이벤트 아이디어가 있나요?",
    answers: [
      {
        author: "팬R",
        date: "2025-05-19",
        text: "1주년 기념 온라인 팬미팅이 있으면 좋겠어요!",
      },
      {
        author: "팬S",
        date: "2025-05-19",
        text: "리코가 팬들이 보내준 메시지를 직접 읽어주는 이벤트 하면 감동일 듯! 💙",
      },
    ],
  },
  {
    category: "✨ 앞으로의 리코",
    question: "리코가 앞으로 해줬으면 하는 콘텐츠나 도전하고 싶은 것은?",
    answers: [
      {
        author: "팬T",
        date: "2025-05-19",
        text: "리코가 직접 작곡한 오리지널 곡을 발표해줬으면 해요!",
      },
      {
        author: "팬U",
        date: "2025-05-19",
        text: "리코의 여행 브이로그 같은 콘텐츠도 보고 싶어요! ✈️",
      },
    ],
  },
];
