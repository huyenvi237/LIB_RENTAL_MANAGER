import './Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DatePicker() {
  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <Form.Group controlId="dob">
            <Form.Control type="date" name="dob" placeholder="Date of Birth" />
          </Form.Group>
        </div>
      </div>
    </div>
  )
}

function Register() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        新規登録
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>会員情報登録</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group class="mb-3" controlId="formBasicId">
              <Form.Label className="formName">会員ID</Form.Label>
              <p><Form.Text className="text-dark">
                000001
              </Form.Text></p>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicKanji">
              <Form.Label className="formName">名前（漢字）</Form.Label>
              <Form.Control type="text" placeholder="図書タロウ" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicKana">
              <Form.Label className="formName">名前（カタカナ）</Form.Label>
              <Form.Control type="text" placeholder="トショタロウ" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicBirth">
              <Form.Label className="formName">生年月日</Form.Label>
              <DatePicker></DatePicker>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicGender">
              <Form.Label className="formName">性別</Form.Label>
              <p>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                  <label class="form-check-label" for="inlineRadio1">男性</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                  <label class="form-check-label" for="inlineRadio2">女性</label>
                </div>
              </p>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="formName">メールアドレス</Form.Label>
              <Form.Control type="text" placeholder="mirine@global.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label className="formName">電話番号</Form.Label>
              <Form.Control type="text" placeholder="09012345678" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPostCode">
              <Form.Label className="formName">郵便番号</Form.Label>
              <Form.Control type="text" placeholder="1350051" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label className="formName">住所</Form.Label>
              <Form.Control type="text" placeholder="東京都豊島区駒込１ー２－３ミリネビル２０１" />
            </Form.Group>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button className="float-left" variant="secondary" onClick={handleClose}>
            リセット
          </Button>
          <Button variant="primary">登録</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export { Register };