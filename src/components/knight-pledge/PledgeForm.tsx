interface Props {
  nickname: string;
  setNickname: (v: string) => void;
  title: "Sir" | "Dame";
  setTitle: (v: "Sir" | "Dame") => void;
}

export default function PledgeForm({
  nickname,
  setNickname,
  title,
  setTitle,
}: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg space-y-4 border border-gray-300 dark:border-gray-600">
      <label className="block">
        <span className="font-semibold">닉네임</span>
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="w-full mt-1 p-2 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600"
          placeholder="닉네임을 입력하세요"
        />
      </label>

      <div className="space-y-2">
        <span className="font-semibold">칭호 선택</span>
        <div className="flex items-center space-x-4 mt-1">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="title"
              value="Sir"
              checked={title === "Sir"}
              onChange={() => setTitle("Sir")}
            />
            Sir (남성)
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="title"
              value="Dame"
              checked={title === "Dame"}
              onChange={() => setTitle("Dame")}
            />
            Dame (여성)
          </label>
        </div>
      </div>
    </div>
  );
}
