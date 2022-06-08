import React from 'react';
import { FileOutlined } from "@ant-design/icons";
import { List as AntList } from 'antd';
import { formatUnixDate } from "../../helpers";
import {BackButton} from "../BackButton/BackButton";

export const List = ({files}) => {
    return (
        <AntList
            size="large"
            header={<BackButton/>}
            bordered
            dataSource={files}
            renderItem={(item) => {
                const { name, size, type, mtime } = item;
                return (
                    <AntList.Item className={'list-item'}>
                        <div className={'files-title'}>
                            <FileOutlined style={{fontSize: '19px'}}/>
                            {name}
                        </div>
                        <div>
                            <small><b>Size</b>: {size}</small>
                        </div>
                        <div>
                            <small><b>Type:</b> {type}</small>
                        </div>
                        <div>
                            <small><b>Modify date:</b>  {formatUnixDate(mtime)}</small>
                        </div>
                    </AntList.Item>
                );
            }}
        />
    );
};
