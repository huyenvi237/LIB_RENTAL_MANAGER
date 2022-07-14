import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import BootstrapTable from 'react-bootstrap-table-next';

import { StyledFormButton, CopyrightText } from "../components/Style";
import { useNavigate } from "react-router-dom";
import './../components/manager.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import cellEditFactory, { Type } from 'react-bootstrap-table2-editor'

function ManagerView() {

    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:3001/api/get");
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    },[]);

    const selectRow = {
        mode:'checkbox',
        clickToSelect: true
    }

    const columns = [
        {
            dataField: 'id',
            text:'ID',
            sort:true

        },
        {
            dataField: 'name',
            text:'Name',
            sort:true
        },
        {
            dataField: 'birthday',
            text:'Birthday',
            sort:true
        },
        {
            dataField: 'email',
            text:'Email',
            sort:true
        },
        {
            dataField: 'phone',
            text:'Phone'
        }
        
    ]
    
    

    const navigate = useNavigate();
    const handleLogout = () => {
        var r = window.confirm("Do you really want to logout?");
        if(r) {
            navigate("/");
        }
    }
    return (

        <div className="justify-center items-center">
            
            <h1 className='mx-auto flex 
            flex col justify-center items-center'
            >
                会員管理画面
            </h1>

            {/**ログアウトのボタンをセッティング 
             * クリックしたらログインページに遷移
            */}
            <div
                style={{
                    position: "absolute",
                    top: 10,
                    right: 20,
                    backgroundColor: "transparent",
                    width: "100%",
                    padding: "15px",
                    display: "flex",
                    justifyContent: "flex-end"

                }}
            >
                <StyledFormButton onClick={handleLogout}>ログアウト</StyledFormButton>
            </div>

            {/**ユーザーページに遷移のボタンをセッティング 
             * クリックしたらユーザーページに遷移
            */}
            <div
                style={{
                    position: "absolute",
                    top: 70,
                    right: 20,
                    backgroundColor: "transparent",
                    width: "100%",
                    padding: "15px",
                    display: "flex",
                    justifyContent: "flex-end"

                }}
            >
                <StyledFormButton onClick={() => navigate("/userview")}>ユーザーへ</StyledFormButton>
            </div>

            <div className="max-w-5xl mx-auto 
            flex flex col justify-center items-center"
            >
                <StyledFormButton onClick={() => navigate("/")}>削除</StyledFormButton>
                <StyledFormButton onClick={() => navigate("/")}>修正</StyledFormButton>
                <input
                    style={{
                        border: '1px solid #66BFBF',
                        fontSize: 20,
                        textAlign: 'center'
                    }}
                    placeholder="ID、名前、生年月日" 
                />
                <StyledFormButton 
                    onClick={() => navigate("/")}
                    style={{
                        
                    }}
                >
                        新規登録
                </StyledFormButton>

            </div>
{/*
            <div>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th scop='col' style={{textAlign: 'center'}}>ID</th>
                            <th scop='col' style={{textAlign: 'center'}}>名前</th>
                            <th scop='col' style={{textAlign: 'center'}}>生年月日</th>
                            <th scop='col' style={{textAlign: 'center'}}>メール</th>
                            <th scop='col' style={{textAlign: 'center'}}>電話番号</th>
                            <th scop='col' style={{textAlign: 'center'}}>アクション</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td style={{textAlign: 'center', padding:10}}>{item.id}</td>
                                    <td style={{textAlign: 'center', padding:10}}>{item.name}</td>
                                    <td style={{textAlign: 'center', padding:10}}>{item.birthday}</td>
                                    <td style={{textAlign: 'center', padding:10}}>{item.email}</td>
                                    <td style={{textAlign: 'center', padding:10}}>{item.phone}</td>
                                    <td style={{textAlign: 'center', padding:10}}>
                                        <Link to={`/update/${item.id}`}>
                                            <button className="btn btn-edit">Edit</button>
                                        </Link>
                                        <button className="btn btn-delete">Delete</button>

                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>

                </table>
            </div>
*/}
            <div>
                <BootstrapTable 
                    keyField="id" 
                    data={data} 
                    columns={columns} 
                    striped 
                    hover
                    condensed
                    pagination={paginationFactory()}
                    cellEdit={cellEditFactory({

                    })}
                    selectRow={selectRow}
                />
            </div>

            <CopyrightText>
                All rights reserved &copy;2022
            </CopyrightText>
        </div>
    )
}

export default ManagerView;
