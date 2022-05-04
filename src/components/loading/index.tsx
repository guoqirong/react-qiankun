import { FunctionComponent, ReactNode, useEffect, useState } from "react";
import './index.scss';

interface LoadingProps {
  visible: Boolean;
  children: ReactNode;
  tips?: any; 
  delay?: number;
  isNotScrollbar?: boolean;
}

let timer:any;
const Loading: FunctionComponent<LoadingProps> = (props) => {
  const [visible, setVisible] = useState(props.visible);

  useEffect(() => {
    if (props.delay) { // 防闪烁
      timer && clearTimeout(timer);
      if (props.visible) {
        timer = setTimeout(() => setVisible(true), props.delay);
      } else {
        setVisible(false);
      }
    } else {
      setVisible(props.visible);
    }
  }, [props.delay, props.visible]);

  return (
    <div className={`hp-spin ${visible ? "" : "hide"}`}>
      <div
        className={`${props.isNotScrollbar ? "is-not-scrollbar" : ""}`}
      >{props.children}</div>
      <div className={props.children ? "spin-content" : ''}>
        <div className="spin-img"></div>
      </div>
    </div>
  );
}
 
export default Loading;