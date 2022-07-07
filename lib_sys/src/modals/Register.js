import './Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

//カレンダーから日付が選べる「生年月日」項目
function DatePicker() {
  return (
    //col-md-5：ボックスの長さ
    <div className="col-md-auto">
      <Form.Group>
        <Form.Control type="date" name="dob" />
      </Form.Group>
    </div>
  )
}

function Register() {
  //モーダルのshow属性のstateを操作
  const [show, setShow] = useState(false);
  //モーダルを消す
  const handleClose = () => setShow(false);
  //モーダルを開く
  const handleShow = () => setShow(true);

  return (
    <div>
      {/*新規登録ボタン*/}
      <Button variant="primary" onClick={handleShow}>
        新規登録
      </Button>
      {/*モーダル*/}
      <Modal
        //{show}がtrueかfalseかで表示か非表示
        show={show}
        //handleCloseを呼び出しshowをfalseに
        onHide={handleClose}
        //static：背景を暗くする、背景をクリックしてもモーダルを維持
        backdrop="static"
        //false：ESCを押してもモーダルが閉じられない
        keyboard={false}
      >
        {/*閉じるボタン*/}
        <Modal.Header closeButton>
          {/*モーダルタイトル*/}
          <Modal.Title>会員情報登録</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/*bottomのマージン*/}
            <Form.Group className="mb-3">
              <Form.Label className="formName">会員ID</Form.Label>
              {/*pは改行のため*/}
              <p><Form.Text className="text-dark">
                {'{'}new_member_ID{'}'}
              </Form.Text></p>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="formName">名前（漢字）</Form.Label>
              <Form.Control type="text" placeholder="図書タロウ" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="formName">名前（カタカナ）</Form.Label>
              <Form.Control type="text" placeholder="トショタロウ" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="formName">生年月日</Form.Label>
              {/*カレンダーから日付を選択*/}
              <DatePicker></DatePicker>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="formName">性別</Form.Label>
              <p>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1" />
                  <label className="form-check-label" for="inlineRadio1">男性</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2" />
                  <label className="form-check-label" for="inlineRadio2">女性</label>
                </div>
              </p>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="formName">メールアドレス</Form.Label>
              <Form.Control type="text" placeholder="mirine@global.com" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="formName">電話番号</Form.Label>
              <Form.Control type="number" placeholder="09012345678" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="formName">郵便番号</Form.Label>
              <Form.Control type="number" placeholder="1350051" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="formName">住所</Form.Label>
              <Form.Control type="text" placeholder="東京都豊島区駒込１ー２ー３ミリネビル２０１" />
            </Form.Group>
            <div className="alert alert-danger my-auto" role="alert">
              {'{'}error_form{'}'}を正しく入力してください。
            </div>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            クリア
          </Button>
          <Button variant="primary">登録</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Register;