import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'antd-mobile/lib/modal/index';
import { Action } from 'antd-mobile/lib/modal/PropsType';

// 解决滚动穿透
const stopMove = (e: TouchEvent) => {
  e.preventDefault();
}

// 解决点击区域小的问题
const onClick = (e: React.MouseEvent<HTMLInputElement>) => {
  const target = e.currentTarget || e.target;
  if(target) {
    target.focus;
  }
}

export default function prompt(
  title: React.ReactNode,
  message: React.ReactNode,
  actions = [{
    text: '取消',
  }, {
    text: '确定',
  }]
) {
  const div = document.createElement('div');
  document.body.appendChild(div);

  const close = () => {
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    document.body.removeEventListener('touchmove', stopMove);
  }

  // 底部按钮
  const footer = actions.map((button: Action<React.CSSProperties>) => {
    const oldOnPress = button.onPress || (() => {});
    button.onPress = () => {
      const res = oldOnPress();
      if(res && res.then) {
        res.then(close).catch(() => {})
      } else {
        close();
      }
    }
    return button
  })
  document.body.addEventListener('touchmove', stopMove, {passive: false});

  // 弹出之后，直接使得输入框得到焦点
  const focusInput = (input: HTMLInputElement) => setTimeout(() => input.focus(), 500);

  ReactDOM.render(
    <Modal 
      visible={true}
      transparent={true}
      title={title}
      closable={false}
      maskClosable={false}
      footer={footer}
    >
      <div>{message}</div>
      <div className="am-modal-input-container">
        <div className="am-modal-input">
          <input 
            ref={node => focusInput(node as HTMLInputElement)} 
            type="text"
            onClick={onClick}
          />
        </div>
      </div>
    </Modal>,
    div,
  )
};