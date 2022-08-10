import React from 'react';
import ReactDom from 'react-dom';
import { MODAL_STYLES, OVERLAY_STYLES } from '../../components/Style';

export default function Modal({children, open, close}) {
    if (!open) return null;
    return ReactDom.createPortal(
        <>
            <OVERLAY_STYLES></OVERLAY_STYLES>
            <MODAL_STYLES>
                {children}
                <button onClick={close}>戻る</button>
                <button>削除</button>
            </MODAL_STYLES>
        </>,
        document.getElementById('portal')
        
    )
}
