import React from "react";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  AreaChart,
  Area,
  Tooltip,
} from "recharts";
import Loader from "../../Loader";
import { useGetUsersAnalyticsQuery } from "../../../../redux/features/analytics/analyticsApi";
import { styles } from "../../../../app/styles/style";

// const analyticsData = [
//   { name: "jun", uv: 3 },
//   { name: "july", uv: 3 },
//   { name: "August", uv: 3 },
//   { name: "Sep", uv: 3 },
//   { name: "Oct", uv: 3 },
//   { name: "Nov", uv: 3 },
//   { name: "December", uv: 3 },
// ];

type Props = {
  isDashboard?: boolean;
};

const UserAnalytics = ({ isDashboard }: Props) => {
  const { data, isLoading } = useGetUsersAnalyticsQuery({});

  const analyticsData: any = [];
  data &&
    data.courses.last12Months.forEach((item: any) => {
      analyticsData.push({ name: item.month, uv: item.count });
    });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div
          className={`${
            !isDashboard
              ? "mt-[50px]"
              : " dark:bg-[#111C43] shadow-sm pb-5 rounded-sm "
          }`}
        >
          <div className={`${isDashboard ? "!ml-8 mb-5" : ""}`}>
            <h1
              className={`${styles.title} ${
                isDashboard && "text-[20px]"
              } px-5 !text-start `}
            >
              Users Analytics{" "}
            </h1>
            {!isDashboard && (
              <p className={`${styles.label}`}>Last 12 month analytics data </p>
            )}
          </div>
          <div
            className={`w-full ${
              isDashboard ? "h-[30vh]" : "h-screen"
            } flex items-center justify-center`}
          >
            <ResponsiveContainer
              width={isDashboard ? "100%" : "90%"}
              height={!isDashboard ? "50%" : "100%"}
            >
              <AreaChart
                data={analyticsData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="uv" // corrected dataKey to "uv"
                  stroke="#4d62d9"
                  fill="#4d62d9"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </>
  );
};

export default UserAnalytics;

// import React from "react";

// import {
//   ResponsiveContainer,
//   XAxis,
//   YAxis,
//   AreaChart,
//   Area,
//   Tooltip,
// } from "recharts";

// import Loader from "../../Loader";
// import {
//   useGetUsersAnalyticsQuery,
// } from "../../../../redux/features/analytics/analyticsApi";
// import { styles } from "../../../../app/styles/style";
// import { Tooltip } from "@mui/material";

// const analyticsData = [
//   { name: "jun", uv: 3 },
//   { name: "july", uv: 3 },
//   { name: "August", uv: 3 },
//   { name: "Sep", uv: 3 },
//   { name: "Oct", uv: 3 },
//   { name: "Nov", uv: 3 },
//   { name: "December", uv: 3 },
// ];

// type Props = {
//   isDashboard?: boolean;
// };

// const UserAnalytics = ({ isDashboard }: Props) => {
//   const { data, isLoading } = useGetUsersAnalyticsQuery({});

//   return (
//     <>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <div
//           className={`${
//             !isDashboard
//               ? "mt-[50px]"
//               : " dark:bg-[#111C43] shadow-sm pb-5 rounded-sm "
//           }`}
//         >
//           <div className={`${isDashboard ? "!ml-8 mb-5" : ""}`}>
//             <h1
//               className={`${styles.title} ${
//                 isDashboard && "text-[20px]"
//               } px-5 !text-start `}
//             >
//               Users Analytics{" "}
//             </h1>
//             {!isDashboard && (
//               <p className={`${styles.label}`}>Last 12 month analytics data </p>
//             )}
//           </div>
//           <div
//             className={`w-full ${
//               isDashboard ? "h-[30vh]" : "h-screen"
//             } flex items-center justify-center`}
//           >
//             <ResponsiveContainer
//               width={isDashboard ? "100%" : "90%"}
//               height={!isDashboard ? "50%" : "100%"}
//             >
//               <AreaChart
//                 data={analyticsData}
//                 margin={{
//                   top: 20,
//                   right: 30,
//                   left: 0,
//                   bottom: 0,
//                 }}
//               >
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Area
//                   type="monotone"
//                   dataKey="count"
//                   stroke="#4d62d9"
//                   fill="#4d62d9"
//                 />
//               </AreaChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default UserAnalytics;
