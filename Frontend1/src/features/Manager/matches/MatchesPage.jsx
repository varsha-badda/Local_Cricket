import ScheduleMatch from "./ScheduleMatch";
import MatchList from "./MatchList";

const MatchesPage = () => {
  return (
    <div className="p-6 space-y-10">
      <ScheduleMatch />
      <MatchList />
    </div>
  );
};

export default MatchesPage;
