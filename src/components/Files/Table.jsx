import React from 'react';
import { Table as AntTable } from 'antd';
import { FileOutlined } from '@ant-design/icons';
import { BackButton } from "../BackButton/BackButton";
import { formatUnixDate, stringSorter } from "../../helpers";
import './Files.css';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: stringSorter,
        render: (name) => (
            <div className={'files-title'}>
                <FileOutlined style={{ fontSize: '19px' }} />
                {name}
            </div>
        )
    },
    {
        title: 'Size',
        dataIndex: 'size',
        key: 'size',
        sorter: (a, b) => a.size - b.size,
    },
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
        sorter: stringSorter,
    },
    {
        title: 'Modify date',
        dataIndex: 'mtime',
        key: 'mtime',
        render: (date) => formatUnixDate(date),
        sorter: (a, b) => a.mtime - b.mtime,
    },
];

export const Table = ({ files }) => {

    return (
        <>
            <BackButton/>
            <AntTable columns={columns}
                      className={'table'}
                      style={{ width: '100%'}}
                      pagination={false}
                      dataSource={files ?? []}
            />
        </>

    );
};
