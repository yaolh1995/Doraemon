const String =`
* {
    box-sizing: border-box;
}

*::before,
*::after {
    box-sizing: border-box;
}

body {
    overflow: hidden;
}

.doraHead {
    border: 2px solid #4a5d66;
    width: 420px;
    height: 380px;
    left: 50%;
    margin-top: 38px;
    transform: translateX(-50%);
    position: relative;
    border-radius: 420px 420px 380px 380px;
    background-color: #83c2f1;
    z-index: -2;

}

.eyes {
    background-color: white;
    border: 2px solid #01070c;
    width: 90px;
    height: 100px;
    position: absolute;
    top: 13%;

}

.eyes.left {
    right: 50%;
    border-radius: 100px 80px 100px 80px;
}

.eyes.left::before {
    content: '';
    width: 16px;
    height: 25px;
    background-color: #fff;
    border-top: 7px solid black;
    border-left: 4px solid black;
    border-right: 3px solid black;
    border-bottom: 6px solid black;
    position: absolute;
    bottom: 19%;
    right: 12%;
    border-radius: 50%
}

.eyes.right {
    left: 50%;
    border-radius: 80px 100px 80px 100px;
}

.eyes.right::before {
    content: '';
    width: 16px;
    height: 25px;
    background-color: #fff;
    position: absolute;
    border-top: 7px solid black;
    border-left: 3px solid black;
    border-right: 4px solid black;
    border-bottom: 6px solid black;
    bottom: 19%;
    left: 12%;
    border-radius: 50%;

}

.nose {
    width: 36px;
    height: 36px;
    border-radius: 35px;
    position: absolute;
    background-color: #f36673;
    border: 1px solid #4a5d66;
    top: 40%;
    left: 50%;
    transform: translateX(-50%);
    transition: all 1s;

}



.nose::before {
    content: '';
    width: 9px;
    height: 9px;
    border-radius: 9px;
    background-color: #ffffff;
    position: absolute;
    top: 10%;
    left: 50%;

}

.nose::after {
    content: '';
    width: 3px;
    height: 150px;
    background-color: #323736;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;

}

.doraFace {
    background-color: white;
    border: 2px solid #4a5d66;
    width: 400px;
    height: 288px;
    border-radius: 9px;
    background-color: #ffffff;
    top: 26%;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
    position: absolute;
    border-radius: 400px 400px 490px 490px;
    overflow: hidden;
}

.doraFace .left {
    width: 0px;
    height: 0px;
    box-shadow: 0px 0px 25px 20px #ff8f9e;
    border-radius: 70%;
    position: absolute;
    top: 29%;
    left: 29%;

}

.doraFace .right {
    width: 0px;
    height: 0px;
    box-shadow: 0px 0px 25px 20px #ff8f9e;
    border-radius: 70%;
    position: absolute;
    top: 29%;
    right: 29%;
}

.neck {
    width: 400px;
    height: 0px;
    position: absolute;
    border-top: 4px solid #4a5d66;
    border-bottom: 20px solid #e8687a;
    left: 50%;
    bottom: 0%;
    transform: translateX(-50%);
    border-radius: 10%;
    z-index: 3;
}

.mouse {
    width: 50px;
    height: 25px;
    border: 1px solid #01070c;
    background-color: #ff8f9e;
    border-radius: 70% 70% 50% 50% / 100% 100% 30% 30%;
    position: absolute;
    bottom: 0%;
    left: 50%;
    transform: translateX(-50%) translateY(-100%);
    transition: all 0.8s ease-out;;
}

.mouse:hover{
    transform: translateX(-50%) translateY(-50%); 
    border-radius: 40% 40% 80% 80%;
    width: 100px;
    height: 50px;

}

.beard {
    border-radius: 2px;
    height: 5px;
    position: absolute;
    background-color: #323736;
    z-index: 1;
}

.beard.left1 {
    width: 120px;
    top: 55%;
    left: 0%;
    transform: rotate(15deg);
}

.beard.left2 {
    width: 110px;
    top: 65%;
    left: 0%;
}

.beard.left3 {
    width: 100px;
    top: 75%;
    left: 2%;
    transform: rotate(-15deg);
}

.beard.right1 {
    width: 120px;
    top: 55%;
    right: 0%;
    transform: rotate(-15deg);
}

.beard.right2 {
    width: 110px;
    top: 65%;
    right: 0%;
}

.beard.right3 {
    width: 100px;
    top: 75%;
    right: 2%;
    transform: rotate(15deg);
}

.bells {
    width: 30px;
    height: 30px;
    border: 1px solid #01070c;
    background-color: #f4dc85;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    bottom: 0%;
    transform: translateX(-50%) translateY(50%);
    transition: all 1s;
    overflow: hidden;

}

@keyframes xxx {
    0% {
        transform:translateX(-50%) translateY(50%) rotate(0deg);
    }

    44% {
        transform:translateX(-50%) translateY(50%) rotate(10deg);
    }

    88% {
        transform:translateX(-50%) translateY(50%) rotate(-10deg);
    }

    100% {
        transform:translateX(-50%) translateY(50%) rotate(0deg);
    }

}
.bells .line1 {
    width: 100px;
    height: 6px;
    border-top: 2px solid #01070c;
    border-bottom: 2px solid #01070c;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%) translateY(70%);

}

.bells .line2 {
    width: 3px;
    height: 5px;
    background-color: #01070c;
    position: absolute;
    left: 50%;
    bottom: 0%;
    transform: translateX(-50%);
}

.bells .cir {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid black;
    position: absolute;
    left: 50%;
    transform: translateX(-50%) translateY(100%);
}

.bells:hover{
    transform-origin: center bottom;
    animation: xxx 0.2s infinite  forwards;
    }
摸一摸叮当猫的嘴巴~
摇一摇叮当猫的小铃铛~
`
export default String;
