import { useFetchData } from "6pp";
import { Avatar, Box, Stack } from "@mui/material";
import moment from "moment";
import { useEffect, useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import RenderAttachment from "../../components/shared/RenderAttachment";
import Table from "../../components/shared/Table";
import { server } from "../../constants/config";
// import { useErrors } from "../../hooks/hook";
import { fileFormat, transformImage } from "../../lib/features";
import { dashboardData } from "../../constants/sampleData";

const columns = [
  {
    field: "id",
    headerName: "ID",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "attachments",
    headerName: "Attachments",
    headerClassName: "table-header",
    width: 200,
    renderCell: (params) => {
      const { attachments } = params.row;
      return attachments?.length > 0
        ? attachments.map((i) => {
                const url = i.url;
                const file = fileFormat(url);





                return (
                    <Box>
                      <a
                        href={url}
                        download
                        target="_blank"
                        style={{
                          color: "black",
                        }}
                      >
                        {RenderAttachment(file, url)}
                      </a>
                    </Box>
                  );          })
        : "no attachments";
      //     return attachments?.length > 0
      //       ? attachments.map((i) => {

      //         })
      //       : "No Attachments";
      //   },
      // },
    },
  },

  {
    field: "content",
    headerName: "Content",
    headerClassName: "table-header",
    width: 400,
  },
  {
    field: "sender",
    headerName: "Sent By",
    headerClassName: "table-header",
    width: 200,
    renderCell: (params) => (
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        <Avatar alt={params.row.sender.name} src={params.row.sender.avatar} />
        <span>{params.row.sender.name}</span>
      </Stack>
    ),
  },
  {
    field: "chat",
    headerName: "Chat",
    headerClassName: "table-header",
    width: 220,
  },
  {
    field: "groupChat",
    headerName: "Group Chat",
    headerClassName: "table-header",
    width: 100,
  },
  {
    field: "createdAt",
    headerName: "Time",
    headerClassName: "table-header",
    width: 250,
  },
];

const MessageManagement = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    // setRows(
    //   dashboardData.chats.map((i) => ({
    //     ...i,
    //     id: i._id,
    //     avatar: i.avatar.map((avatar) => transformImage(avatar, 50)),
    //     members: i.members.map((member) => ({
    //       ...member,
    //       avatar: transformImage(member.avatar, 50),
    //     })),
    //     creator: {
    //       name: i.creator.name,
    //       avatar: transformImage(i.creator.avatar, 50),
    //     },
    //   }))
    // );
    setRows(
      dashboardData.messages.map((i) => ({
        ...i,
        id: i._id,
        sender: {
          name: i.sender.name,
          avatar: transformImage(i.sender.avatar, 50),
        },
        ceatedAt: moment(i.createdAt).format("MMM Do YYYY,h:mm:ss a"),
      }))
    );
  }, []);

  return (
    <AdminLayout>
      <Table
        heading={"All Messages"}
        columns={columns}
        rows={rows}
        rowHeight={200}
      />{" "}
    </AdminLayout>
  );
};

export default MessageManagement;
