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
            console.log(row.birthday);
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

    /*function isDisable() {
        if(id.length == 1) {
            return false;
        } else {
            return true;
        }
    }*/

    

    const birthdayFormatter = (data, row) => {
        const d = data;
        let day = new Date(d)
        return <span>{day.toLocaleDateString()}</span>
    }

    const genderFormatter = (data,row) => {
        const d = data;
        if(d === 'm') { 
            return <span>男性</span>
        } else {
            return <span>女性</span>
        }
    }
    
    const regFormatter = (data, row) => {
        const d = data;
        let day = new Date(d)
        return <span>{day.toLocaleDateString()}</span>
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
            text:'名前(漢字)',
            sort:true
        },
        {
            dataField: 'name_kana',
            text:'名前(カナ)',
            sort:true
        },
        {
            dataField: 'birthday',
            text:'生年月日',
            sort:true,
            formatter: birthdayFormatter,
        },
        {
            dataField: 'email',
            text:'メールアドレス',
            sort:true
        },
        {
            dataField: 'phone',
            text:'電話番号'
        },
        {
            dataField: 'gender',
            text:'性別',
            formatter: genderFormatter,
        },
        {
            dataField: 'reg_ID',
            text:'登録者ID'
        },
        {
            dataField: 'reg_date',
            text:'登録日',
            formatter: regFormatter
        },
        
    ]


    const deleteMember = (id) => {
        if (id.length < 1) {
            window.alert('1つ以上の項目を選択してください。');
        } else {
            if(window.confirm(`選択した ${id.length} 個の会員情報を本当に削除しますか? 後で戻すことはできません。`)) {
                axios.delete(`http://localhost:3001/api/remove/${id}`);
                window.alert("削除が完了しました。");
                setTimeout(() => {
                    loadData()
                }, 500);
            }
        }
        
    }

    const hideMember = (id) => {
        if (id.length < 1) {
            window.alert('1つ以上の項目を選択してください。');
        } else {
            if(window.confirm(`選択した ${id.length} 個の会員情報を隠しますか?`)) {
                axios.delete(`http://localhost:3001/api/hide/${id}`);
                window.alert("完了しました。");
                setTimeout(() => {
                    loadData()
                }, 500);
            }
        }
        
    }

    const navigate = useNavigate();
    const handleLogout = () => {
        var r = window.confirm("ログアウトしてもよろしいですか?");
        if(r) {
            localStorage.clear();
            navigate("/");
        }
    }

    //Send value of selected ID to edit page
    const toEditPage = () => {
        if (id.length !== 1) {
            window.alert('1つだけ選択してください。');
        } else {
            navigate('/edit',{state:{id:id}})
        }
    }

    return (
        <div className="justify-center">
            
            <h1 className='mx-auto flex 
            flex col justify-center items-center'
                style={{
                    textAlign: 'center',
                    fontSize: '4.0em',
                    padding: '50px'
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
                <StyledFormButton onClick={() => navigate("/userview")}>ユーザー画面</StyledFormButton>
            </div>

            <div 
                className="max-w-5xl flex flex col justify-center items-center"
                style={{margin: '15px 75px'}}
            >
                <StyledFormButton onClick={() => navigate("/register")}>新規登録</StyledFormButton>
                <StyledFormButton onClick={() => deleteMember(id)}>削除</StyledFormButton>
                <StyledFormButton onClick={() => hideMember(id)}>隠し</StyledFormButton>
                <StyledFormButton onClick={() => {toEditPage()}}>修正</StyledFormButton>
           
            </div>

            <div style={{
                maxWidth: '1000px',
                textAlign:'center'
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
                <CopyrightText>
                    All rights reserved &copy;2022
                </CopyrightText>
            </div>

        </div>
    )
}

export default ManagerView;
