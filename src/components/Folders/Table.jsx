import React from 'react';
import { Table as AntTable } from 'antd';
import './Folders.css';
import { Link } from "react-router-dom";
import {stringSorter} from "../../helpers";
import { FolderOutlined } from '@ant-design/icons';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: stringSorter,
        render: (text, record) => (
            <Link to={`/${record.name}`}>
                <div className={'folder-container'}>
                    <FolderOutlined style={{ fontSize: '30px' }} />
                    <span>{text}</span>
                </div>
            </Link>
        ),
    },
];

export const Table = ({ folders }) => {
    return (
        <AntTable columns={columns}
                  className={'table'}
                  style={{ width: '100%'}}
                  pagination={false}
                  dataSource={folders}
        />
    );
};
