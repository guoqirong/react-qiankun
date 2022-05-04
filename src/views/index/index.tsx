import { FunctionComponent } from "react";
import './index.scss';

interface IndexPageProps {
  
}
 
const IndexPage: FunctionComponent<IndexPageProps> = () => {
  return (
    <div className="index-page">
      <h1 className="index-page-title">qiankun框架</h1>
      <div className="index-page-content">
        <h3>介绍</h3>
        <p>
          qiankun 是一个基于 single-spa
          的微前端实现库，旨在帮助大家能更简单、无痛的构建一个生产可用微前端架构系统。
          qiankun
          孵化自蚂蚁金融科技基于微前端架构的云产品统一接入平台，在经过一批线上应用的充分检验及打磨后，我们将其微前端内核抽取出来并开源，希望能同时帮助社区有类似需求的系统更方便的构建自己的微前端系统，同时也希望通过社区的帮助将
          qiankun 打磨的更加成熟完善。 目前 qiankun 已在蚂蚁内部服务了超过 200+
          线上应用，在易用性及完备性上，绝对是值得信赖的。
        </p>
      </div>
    </div>
  );
}
 
export default IndexPage;