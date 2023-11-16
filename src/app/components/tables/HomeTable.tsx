import { range } from "lodash";
import { useState } from "react";
import { produce } from "immer";

import TableFooter from "./TableFooter";
import ExportIcon from "../../assets/icons/export-icon.svg";
import UserIcon from "../../assets/icons/user-icon.svg";
import Select from "../Select";

export default function HomeTable() {
  const COUNT = 7;

  const [selectedRows, setSelectedRows] = useState<boolean[]>(
    range(COUNT).map(() => false),
  );

  const handleSelectRow = (idx: number, checked: boolean) =>
    setSelectedRows((rows) =>
      produce(rows, (draft) => {
        draft[idx] = checked;
      }),
    );

  return (
    <div className="card">
      {/* begin::Header */}

      {/* end::Header */}
      {/* begin::Body */}
      <div className="card-body py-3">
        <div className="d-flex flex-wrap flex-stack mb-6">
          <div className="d-flex bg-light px-4 rounded-1 ">
            <img src={UserIcon} alt="logo" />
            <input
              type="text"
              className="form-control border-0 bg-transparent "
              placeholder="Search"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="d-flex flex-wrap my-2">
            <div className="card-toolbar badge badge-light-primary d-flex justify-content-center align-items-center gap-2 px-4 me-4">
              <img src={ExportIcon} alt="logo" />
              <span className="fw-bolder me-auto">Export</span>
            </div>

            <Select classContainer="me-4" options={["Today", "a", "2"]} />
            <Select options={["Status", "a", "2"]} />
          </div>
        </div>
        {/* begin::Table container */}
        <div className="table-responsive">
          {/* begin::Table */}
          <table className="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
            {/* begin::Table head */}
            <thead>
              <tr className="fw-bold text-muted">
                <th className="w-25px">
                  <div className="form-check form-check-sm form-check-custom form-check-solid">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value="1"
                      data-kt-check="true"
                      data-kt-check-target=".widget-13-check"
                      checked={selectedRows.every((r) => r)}
                      onChange={(e) =>
                        setSelectedRows(
                          range(7).map(() => e.currentTarget.checked),
                        )
                      }
                    />
                  </div>
                </th>
                <th className="min-w-150px">ID</th>
                <th className="min-w-120px">DATE REMOVED</th>
                <th className="min-w-120px">LINK</th>
                <th className="min-w-120px">SOURCE</th>
                <th className="min-w-100px text-end">ACTION</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {range(COUNT).map((idx) => (
                <tr className="h-80px" key={idx}>
                  <td>
                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                      <input
                        className="form-check-input widget-13-check"
                        type="checkbox"
                        value="1"
                        checked={selectedRows[idx]}
                        onChange={(e) =>
                          handleSelectRow(idx, e.currentTarget.checked)
                        }
                      />
                    </div>
                  </td>

                  <td>
                    <a
                      href="#"
                      className="text-gray-900 fw-bold text-hover-primary d-block mb-1 fs-6"
                    >
                      148525
                    </a>
                  </td>
                  <td>
                    <a
                      href="#"
                      className="text-gray-900 text-hover-primary d-block mb-1 fs-6"
                    >
                      23 Sep 2023
                    </a>
                  </td>
                  <td>
                    <a
                      href=" https://google.com"
                      className="text-primary text-hover-primary d-block mb-1 fs-6"
                    >
                      https://google.com
                    </a>
                  </td>
                  <td className="text-gray-900 text-hover-primary fs-6">
                    Google
                  </td>
                  {idx % 3 === 0 ? (
                    <td className="text-end">
                      <span className="badge badge-light-danger">Delisted</span>
                    </td>
                  ) : (
                    <td className="text-end">
                      <span className="badge badge-light-success">Removed</span>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
        <TableFooter />
      </div>
      {/* begin::Body */}
    </div>
  );
}
