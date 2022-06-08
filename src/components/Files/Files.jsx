import React from 'react';
import { BrowserView, MobileView } from "react-device-detect";
import { useParams } from "react-router-dom";
import { Table } from './Table';
import { List } from './List';

export const Files = ({ folders }) => {
    const params = useParams();
    const { folder } = params;
    const data = folders.find((e) => e.name === folder);
    return (
        <>
            <BrowserView>
                <Table files={data?.files ?? []}/>
            </BrowserView>
            <MobileView>
                <List files={data?.files ?? []}/>
            </MobileView>
        </>
    );
}