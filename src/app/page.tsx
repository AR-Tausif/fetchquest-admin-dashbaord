import { DashboardStatusCard, DashboardTable, TableSketon } from "@/widgets";
import { DollarCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import "./app.css";
import "./antd-ov.css";

export default function Home() {
  const isLoading = true;
  const isFetching = true;
  return (
    <Row
      gutter={[0, 16]}
      className="dashboard"
      style={{ background: "#CACACA" }}
    >
      {/* dashboard-status-bar */}
      <Col span={24}>
        <Row gutter={[16, 16]} className="dashboard-status-bar">
          <Col span={24} xs={24} sm={24} md={24} lg={24} xl={24}>
            <DashboardStatusCard
              icon={<UserOutlined style={{ fontSize: 40, color: "#010101" }} />}
              title="Total Users"
              desc="218"
            />
          </Col>
          {/* <Col span={24} xs={24} sm={24} md={24} lg={24} xl={24}>
            <DashboardStatusCard
              icon={
                <DollarCircleOutlined
                  style={{ fontSize: 40, color: "#010101" }}
                />
              }
              title="Total Earning"
              desc="$5,000"
            />
          </Col> */}
        </Row>
      </Col>

      {/* dashboard-chart-section */}
      <Col span={24}>{/* <UserManagementChart /> */}</Col>

      {/* dashboard-table-section */}
      <Col span={24}>
        {/* {isLoading || isFetching ? (
          <table className="w-full rounded-md bg-white">
            <TableSketon />
          </table>
        ) : ( */}
        <DashboardTable
          loading={false}
          tableData={[
            {
              key: "1",
              name: "John Brown",
              age: 32,
              address: "New York No. 1 Lake Park",
            },
            {
              key: "2",
              name: "Tusif",
              age: 32,
              address: "New York No. 1 Lake Park",
            },
            {
              key: "3",
              name: "Tusif",
              age: 32,
              address: "New York No. 1 Lake Park",
            },
            {
              key: "4",
              name: "Tusif",
              age: 32,
              address: "New York No. 1 Lake Park",
            },
          ]}
        />
        {/* )} */}
      </Col>
    </Row>
  );
}
