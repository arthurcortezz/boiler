import React, { useState } from "react";
import { Box, Checkbox, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";

import { TableDataInterface } from "../interfaces/TableInterface";

interface Props {
  title: string;
  data: TableDataInterface;
}

const TableColumn = ({ title, data }: Props) => {
  const [checkedIds, setCheckedIds] = useState([]);
  const [isAllChecked, setIsAllChecked] = useState(false);
  const handleCheckboxChange = (id: number, isChecked: boolean) => {
    if (isChecked) {
      setCheckedIds([...checkedIds, id]);
    } else {
      setCheckedIds(checkedIds.filter((checkedId) => checkedId !== id));
    }
    const allIds = data.rows.map((row) => row.id);
    if (allIds.length === checkedIds.length + 1) {
      setIsAllChecked(true);
    }
  };
  const handleAllCheckedChange = (isChecked: boolean) => {
    if (isChecked) {
      setIsAllChecked(true);
      setCheckedIds(data.rows.map((row) => row.id));
    } else {
      setCheckedIds([]);
      setIsAllChecked(false);
    }
  };

  const { columns, rows } = data;
  return (
    <Box>
      <Text fontSize={24} color={"blue.400"} fontWeight={700}>
        {title}
      </Text>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th w={1} px={0}>
              <Checkbox w={1} isChecked={isAllChecked} onChange={(e) => handleAllCheckedChange(e.target.checked)}></Checkbox>
            </Th>
            {columns.map((column) => (
              <Th w={`${100 / columns.length}%`} pl={10} pr={0} key={column.key}>
                {column.name}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {rows.map((row) => (
            <Tr key={row.key}>
              <Td w={1} px={0}>
                <Checkbox
                  isChecked={checkedIds.includes(row.id)}
                  w={1}
                  value={row.id}
                  onChange={(e) => handleCheckboxChange(row.id, e.target.checked)}
                ></Checkbox>
              </Td>
              {columns.map((column) => (
                <Td pl={10} pr={0} key={`${row.key}-${column.key}`}>
                  {row[column.key]}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default TableColumn;
