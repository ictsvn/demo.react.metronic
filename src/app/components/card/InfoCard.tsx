import clsx from "clsx";
import { FC } from "react";

type Props = {
  title: string;
  value: number;
  icon: JSX.Element;
  color: string;
};

const InfoCard: FC<Props> = ({ title, value, icon, color }) => {
  return (
    <div
      className={clsx(
        "card info-card border-top-0 border-start-0 border-end-0 border-bottom-3",
        `border-${color}`,
      )}
    >
      <div className="d-flex justify-content-between align-items-center">
        <div className="text-gray-900 fw-bold fs-1">{value}</div>
        <div
          className={clsx(
            "d-flex justify-content-center align-items-center h-40px w-40px rounded-1",
            `bg-light-${color}`,
          )}
        >
          {icon}
        </div>
      </div>
      <div className="mt-3 text-gray-700 fs-6">{title}</div>
    </div>
  );
};

export { InfoCard };
