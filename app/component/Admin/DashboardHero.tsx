import DashboardHeader from "./DashboardHeader";

type Props = {
  isDashboard?: boolean;
};

const DashboardHero = (props: Props) => {
  return (
    <div>
      <DashboardHeader />
    </div>
  );
};

export default DashboardHero;
