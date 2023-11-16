import * as React from "react";
import HomeTable from "../../components/tables/HomeTable";
import { InfoCard } from "../../components/card/InfoCard";
import NetworkIcon from "../../assets/icons/network-icon.svg";
import GeneralIcon from "../../assets/icons/general-icon.svg";
import InfoIcon from "../../assets/icons/info-icon.svg";
import TrashIcon from "../../assets/icons/trash-icon.svg";
import Select from "../../components/Select";

export default function HomePage() {
  return (
    <div className="mt-5">
      <div className="d-flex justify-content-end align-items-center gap-4 py-5">
        <div>Sort by</div>
        <Select
          classContainer="w-150px"
          classSelect="bg-white"
          options={["Today", "1", "2"]}
        />
      </div>
      <div className="d-flex justify-content-between mt-3 mb-5 ">
        <InfoCard
          title="Links Scraped"
          value={252}
          icon={<img src={NetworkIcon} alt="logo" />}
          color="primary"
        />
        <InfoCard
          title="Links Manually Checked"
          value={252}
          icon={<img src={GeneralIcon} alt="logo" />}
          color="info"
        />
        <InfoCard
          title="Link Violations"
          value={252}
          icon={<img src={InfoIcon} alt="logo" />}
          color="warning"
        />
        <InfoCard
          title="Links Removed"
          value={252}
          icon={<img src={TrashIcon} alt="logo" />}
          color="danger"
        />
      </div>
      <HomeTable />
    </div>
  );
}
