import Image from "next/image";

interface Activity {
  icon: string;
  title: string;
  score: number;
  color: string;
}

const activities: Activity[] = [
  {
    icon: "/images/icon-reaction.svg",
    title: "Reaction",
    score: 80,
    color: "bg-lightRed text-lightRed",
  },
  {
    icon: "/images/icon-memory.svg",
    title: "Memory",
    score: 92,
    color: "bg-orangeyYellow text-orangeyYellow",
  },
  {
    icon: "/images/icon-verbal.svg",
    title: "Verbal",
    score: 61,
    color: "bg-greenTeal  text-greenTeal",
  },
  {
    icon: "/images/icon-visual.svg",
    title: "visual",
    score: 72,
    color: "bg-cobaltBlue text-cobaltBlue",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen flex sm:items-center justify-center">
      <section className="h-[452px] max-w-screen-sm w-screen rounded-3xl flex-1 sm:flex">
        <div className="w-full sm:w-1/2 h-full p-8 flex-col flex gap-6 justify-center items-center bg-gradient-to-b sm:rounded-3xl rounded-b-3xl from-lightSlateBlue to-lightRoyalBlue">
          <div className="text-lightLavender">Your Result</div>
          <div className="rounded-full w-40 h-40 gap-1 justify-center bg-gradient-to-b from-violetBlue to-persianBlue flex flex-col items-center">
            <div className="flex flex-col items-center">
              <h1 className="text-6xl text-white font-bold align-text-bottom">
                76
              </h1>
              <h1 className="text-lightSlateBlue text-base">of 100</h1>
            </div>
          </div>
          <div>
            <h1 className="text-2xl text-white ">Great</h1>
          </div>
          <div className="w-4/5">
            <h1 className="text-lightLavender text-sm text-center">
              You scored is higher than 80% of the people who have taken these
              test.
            </h1>
          </div>
        </div>
        <div className="sm:w-1/2 w-full h-full p-8 flex flex-col gap-6 rounded-3xl shadow-custom">
          <div>
            <h1 className="text-darkGrayBlue font-bold">Summary</h1>
          </div>
          <div className="w-full flex flex-col gap-4">
            {activities.map((activity, idx) => (
              <div
                key={idx}
                className={`w-full ${activity.color}  flex justify-between items-center bg-opacity-5 p-3 rounded-lg`}
              >
                <div className="flex gap-4 items-center">
                  <Image
                    src={activity.icon}
                    alt="icon"
                    width={50}
                    height={50}
                    className="w-auto h-auto"
                  />
                  <h1>{activity.title}</h1>
                </div>
                <h1>
                  <span className="text-darkGrayBlue font-bold">
                    {activity.score}
                  </span>
                  <span className="text-darkGrayBlue opacity-40"> / 100</span>
                </h1>
              </div>
            ))}
          </div>
          <button className="w-full transition ease-in-out bg-darkGrayBlue from-60% text-white rounded-full p-3">
            Continue
          </button>
        </div>
      </section>
    </main>
  );
}
