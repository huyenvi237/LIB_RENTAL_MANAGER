import React, {useState, useEffect} from "react";
//import { Link } from 'react-router-dom';
import axios from "axios";
import BootstrapTable from 'react-bootstrap-table-next';

import { StyledFormButton, CopyrightText } from "../components/Style";
import { useNavigate } from "react-router-dom";

import paginationFactory from 'react-bootstrap-table2-paginator';
import cellEditFactory from 'react-bootstrap-table2-editor';
 import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';

function ManagerView() {

    const [data, setData] = useState([]);
    let id=[];

    const loadData = async () => {
        const response = await axios.get("http://localhost:3001/api/get");
        setData(response.data);
    };


    useEffect(() => {
        loadData();
    },[]);

    const selectRow = {
        mode:'checkbox',
        clickToSelect: true,
        bgColor: '#aaa',
        onSelect:(row) => {
            console.log(row.id);
            if(id.length === 0) {
                id.push(row.id);
            } else {
                if(id.indexOf(row.id) === -1) {
                    id.push(row.id)
                } else {
                    id.splice(id.indexOf(row.id),1)
                }
            }
            
            console.log(id);
        }
        
    }

    const birthdayFormatter = (data, row) => {
        const d = data;
        return <span>{d.toString().substring(0,10)}</span>
    }

    const { SearchBar } = Search;
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
            sort:true,
            formatter: birthdayFormatter,
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

    
    
    const deleteMember = (id) => {
        if(window.confirm(`Are you sure delete ${id.length} rows ?`)) {
            axios.delete(`http://localhost:3001/api/remove/${id}`);
            window.alert("Delete Success");
            setTimeout(() => {
                loadData()
            }, 500);
        }
    }

    const navigate = useNavigate();
    const handleLogout = () => {
        var r = window.confirm("Do you really want to logout?");
        if(r) {
            navigate("/");
        }
    }
    return (

        <div className="justify-center">
            
            <h1 className='mx-auto flex 
            flex col justify-center items-center'
                style={{
                    textAlign: 'center',
                    fontSize: '4.0em',
                    padding: '30px'
                }}
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
                <StyledFormButton onClick={() => navigate("#")}>新規登録</StyledFormButton>
                <StyledFormButton onClick={() => deleteMember(id)}>削除</StyledFormButton>
                <StyledFormButton onClick={() => navigate("#")}>修正</StyledFormButton>
              
            </div>

            <div style={{
                maxWidth: '800px'
            }}>
                <ToolkitProvider
                    keyField='id'
                    data={data}
                    columns={ columns }
                    search
                >
                    {
                        props => (
                            <div>
                                <SearchBar {...props.searchProps} />
                                <hr />
                                <BootstrapTable 
                                    { ...props.baseProps}
                                    striped 
                                    hover
                                    condensed
                                    pagination={paginationFactory()}
                                    cellEdit={cellEditFactory({

                                    })}
                                    selectRow={selectRow}
                                />
                            </div>
                        )
                    }
                </ToolkitProvider>
            </div>

            <CopyrightText>
                All rights reserved &copy;2022
            </CopyrightText>
        </div>
    )
}

export default ManagerView;
