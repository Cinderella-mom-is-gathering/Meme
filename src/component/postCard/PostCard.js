import React from "react";

import styled from "styled-components";
import Profile from "./Profile";
import TextBox from "./TextBox";
import ImgBox from "./ImgBox";
import ApproveButton from "./ApproveButton";
import RejectButton from "./RejectButton";

const CardBox = styled.div`
  width: 100%;
  background-color: white;
  padding-top: 10px;
  padding-bottom: 20px;
  box-shadow: 0px 2px 3px 0.5px #D5D5D5;
  border-radius: 5px;
  margin-top:5px;
  margin-bottom: 5px;
`
const PostCard = ({nickname, text, url, approvebtn = true, coinvaluebtn = true}) => {
    return (
        <CardBox>
            <Profile nickname={nickname} coinvaluebtn={coinvaluebtn}/>

            <TextBox text={text} />

            <ImgBox url={url} />
            <>{approvebtn === true ?
                <><RejectButton/>
                <ApproveButton/> </>:<div></div>}
            </>
        </CardBox>
    )
}

export default PostCard;