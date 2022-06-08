import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { Route, Routes, BrowserRouter as Router} from "react-router-dom";
import { Loader } from "./components/Loader/Loader";
import history from './history';
import { getData } from "./api/api";
import 'antd/dist/antd.min.css';
import './App.css';
import {Table} from "./components/Folders/Table";
import {Files} from "./components/Files/Files";

const { Content } = Layout;

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [folders, setFolders] = useState([]);

    useEffect(() => {
        getData().then((res) => {
            if(res?.data?.ok) {
                const { files } = res.data.data;
                const mapped = Object.entries(files).map((e) => {
                    const [folder, data] = e;
                    return {
                        name: folder,
                        files: data,
                    }
                });
                setFolders(mapped);
            }
            setIsLoading(false);
        })
    }, [])

    return (
        <Router history={history}>
            <Layout className={'main-container'}>
                <Content className={'container'}>
                    <Routes>
                        <Route path="/:folder" element={<Files folders={folders}/>}/>
                        <Route exact path="/" element={<Table folders={folders}/>} />
                    </Routes>
                    <Loader isLoading={isLoading}/>
                </Content>
            </Layout>
        </Router>
    );
}

export default App;
