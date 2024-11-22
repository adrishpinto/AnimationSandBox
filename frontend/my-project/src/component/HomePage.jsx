import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../animation.css";

function Animation() {
  const [scaleStartText, setScaleStartText] = useState("1");
  const [scaleEndText, setScaleEndText] = useState("1");
  const [scaleStart, setScaleStart] = useState(1);
  const [scaleEnd, setScaleEnd] = useState(1);
  const [scale, setScale] = useState(0);

  const [htext, setHText] = useState("");
  const [wtext, setWText] = useState("");
  const [topText, setTopText] = useState("");
  const [leftText, setLeftText] = useState("");
  const [bgColorText, setBgColorText] = useState("red");
  const [bgColor, setBgColor] = useState("red");
  const [colorStartText, setColorStartText] = useState("#FF0000");
  const [colorMidText, setColorMidText] = useState("#00FF00");
  const [colorEndText, setColorEndText] = useState("#0000FF");
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [top, setTop] = useState(20);
  const [left, setLeft] = useState(20);
  const [transXText, setTransXText] = useState("");
  const [transYText, setTransYText] = useState("");
  const [transX, setTransX] = useState(0);
  const [transY, setTransY] = useState(0);
  const [borderRadiusText, setBorderRadiusText] = useState("");
  const [borderRadius, setBorderRadius] = useState(0);
  const [durationText, setDurationText] = useState(4);
  const [repeatText, setRepeatText] = useState("");
  const [repeat, setRepeat] = useState(Infinity);
  const [duration, setDuration] = useState(4);
  const [transition, setTransition] = useState(0);
  const [color, setColor] = useState(0);
  const [colorStart, setColorStart] = useState(colorStartText);
  const [colorMid, setColorMid] = useState(colorMidText);
  const [colorEnd, setColorEnd] = useState(colorEndText);
  const [attribute, setAttribute] = useState(0);
  const [statics, setStatic] = useState(0);

  const [check, setCheck] = useState(0);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    staticColor();
  }, []);

  const scaleApply = () => {
    setScaleStart(Number(scaleStartText));
    setScaleEnd(Number(scaleEndText));
  };

  const scaleCancel = () => {
    setScaleStart(1);
    setScaleEnd(1);
  };

  const submit = () => {
    setHeight(Number(htext));
    setWidth(Number(wtext));
    setTop(Number(topText));
    setLeft(Number(leftText));
    setTransX(Number(transXText));
    setTransY(Number(transYText));
    setBgColorText(bgColorText);
    setBorderRadius(Number(borderRadiusText));
    setDuration(Number(durationText));
    setRepeat(repeatText === "" ? Infinity : Number(repeatText));
    if (color == 0 && statics == 0) {
      colorCancel();
    }
  };
  const attributes = () => {
    setHeight(Number(htext));
    setWidth(Number(wtext));
    setTop(Number(topText));
    setLeft(Number(leftText));
    setBorderRadius(Number(borderRadiusText));
    setAttribute(1);
  };

  const transform = () => {
    setTransX(Number(transXText));
    setTransY(Number(transYText));
    setDuration(Number(durationText));
    setRepeat(repeatText === "" ? Infinity : Number(repeatText));
    setColorStart(colorStartText);
    setColorMid(colorMidText);
    setColorEnd(colorEndText);
  };
  const colorApply = () => {
    setColorStart(colorStartText);
    setColorMid(colorMidText);
    setColorEnd(colorEndText);
  };
  const colorCancel = () => {
    setColorStart("#ffffff");
    setColorMid("#ffffff");
    setColorEnd("#ffffff");
  };

  const tcancel = () => {
    setTransX(0);
    setTransY(0);
  };
  const staticColor = () => {
    setColorStart(bgColorText);
    setColorMid(bgColorText);
    setColorEnd(bgColorText);
  };

  const AttributesStyle = {
    height: `${height}px`,
    width: `${width}px`,
    top: `${top}px`,
    left: `${left}px`,
    backgroundColor: `${bgColor}`,
    borderRadius: `${borderRadius}px`,
  };

  return (
    <div className="px-40 py-10">
      <div className={`w-full border border-black h-[500px] relative`}>
        <motion.div
          className={`border-2 border-black absolute`}
          style={AttributesStyle}
          animate={{
            x: [0, transX, 0],
            y: [0, transY, 0],
            scale: [scaleStart, scaleEnd, scaleStart],
            backgroundColor: [colorStart, colorMid, colorEnd],
          }}
          transition={{
            duration: duration,
            ease: "easeInOut",
            repeat: repeat,
          }}
        ></motion.div>
      </div>

      <div
        className="border-black border p-4"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            submit();
          }
        }}
      >
        {/* Attributes */}
        <div>
          <h1 className="text-2xl font-light mb-2">Attributes</h1>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center border border-slate-500 pl-2 w-44">
              <div>Height:</div>
              <input
                className="focus:outline-none pl-2 w-full"
                placeholder={`enter height`}
                type="text"
                value={htext}
                onChange={(e) => setHText(e.target.value)}
              />
            </div>
            <div className="flex items-center border border-slate-500 pl-2 w-44">
              <div>Width:</div>
              <input
                className="focus:outline-none pl-2 w-full"
                placeholder={`enter width`}
                type="text"
                value={wtext}
                onChange={(e) => setWText(e.target.value)}
              />
            </div>
            <div className="flex border items-center border-slate-500 pl-2 w-44">
              <div>X:</div>
              <input
                className="focus:outline-none pl-2 w-full"
                placeholder={`y position`}
                type="text"
                value={topText}
                onChange={(e) => setTopText(e.target.value)}
              />
            </div>
            <div className="flex border items-center border-slate-500 pl-2 w-44">
              <div>Y:</div>
              <input
                className="focus:outline-none pl-2 w-full"
                placeholder={`x position`}
                type="text"
                value={leftText}
                onChange={(e) => setLeftText(e.target.value)}
              />
            </div>
            <div className="flex border items-center border-slate-500 pl-2 w-44">
              <div>Rounded:</div>
              <input
                className="focus:outline-none pl-2 w-full"
                placeholder={`enter radius`}
                type="text"
                value={borderRadiusText}
                onChange={(e) => setBorderRadiusText(e.target.value)}
              />
            </div>
            <button
              onClick={() => attributes()}
              className={`border-black border-2 w-44 py-1 text-sm font-semibold rounded-2xl hover:bg-slate-500 hover:bg-opacity-20 ${
                attribute ? "border-green-500" : "border-red-500"
              }`}
            >
              Apply
            </button>
          </div>
        </div>
        {/* Attributes end */}

        {/* Color start */}
        <div>
          <h1 className="text-2xl font-light mb-2 mt-4">Color</h1>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center border border-slate-500 pl-2 w-44">
              <div>Color:</div>
              <input
                className="focus:outline-none pl-2 w-full"
                placeholder={`enter radius`}
                type="text"
                value={bgColorText}
                onChange={(e) => setBgColorText(e.target.value)}
              />
            </div>
            <div className="flex items-center border border-slate-500 pl-2 w-44">
              <div>Start:</div>
              <input
                className="focus:outline-none pl-2 w-full"
                placeholder={`enter start color`}
                type="text"
                value={colorStartText}
                onChange={(e) => setColorStartText(e.target.value)}
              />
            </div>
            <div className="flex items-center border border-slate-500 pl-2 w-44">
              <div>Mid:</div>
              <input
                className="focus:outline-none pl-2 w-full"
                placeholder={`enter mid color`}
                type="text"
                value={colorMidText}
                onChange={(e) => setColorMidText(e.target.value)}
              />
            </div>
            <div className="flex items-center border border-slate-500 pl-2 w-44">
              <div>End:</div>
              <input
                className="focus:outline-none pl-2 w-full"
                placeholder={`enter end color`}
                type="text"
                value={colorEndText}
                onChange={(e) => setColorEndText(e.target.value)}
              />
            </div>
            <button
              onClick={async () => {
                if (color == false) {
                  setColor(true);
                  colorApply();
                  setStatic(false);
                } else {
                  colorCancel();
                  setColor(false);
                }
              }}
              className={`border-black border-2 w-44 py-1 text-sm font-semibold rounded-2xl hover:bg-slate-500 hover:bg-opacity-20 ${
                color ? "border-green-500" : "border-red-500"
              }`}
            >
              Apply
            </button>
            <button
              onClick={async () => {
                if (statics == false) {
                  staticColor();
                  setStatic(true);
                  setColor(false);
                } else {
                  colorCancel();
                  setStatic(false);
                }
              }}
              className={`border-black border-2 w-44 py-1 text-sm font-semibold rounded-2xl hover:bg-slate-500 hover:bg-opacity-20 ${
                statics ? "border-green-500" : "border-red-500"
              }`}
            >
              Static
            </button>
          </div>
        </div>
        {/* Color end */}

        {/* Transform start */}
        <div>
          <h1 className="text-2xl font-light mb-2 mt-4">Transform</h1>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center border border-slate-500 pl-2 w-44">
              <div>X:</div>
              <input
                className="focus:outline-none pl-2 w-full"
                placeholder={`end position x`}
                type="text"
                value={transXText}
                onChange={(e) => setTransXText(e.target.value)}
              />
            </div>
            <div className="flex items-center border border-slate-500 pl-2 w-44">
              <div>Y:</div>
              <input
                className="focus:outline-none pl-2 w-full"
                placeholder={`end position y`}
                type="text"
                value={transYText}
                onChange={(e) => setTransYText(e.target.value)}
              />
            </div>
            <div className="flex  items-center border border-slate-500 pl-2 w-44">
              <div>Duration:</div>
              <input
                className="focus:outline-none pl-2 w-full"
                placeholder={`enter duration`}
                type="text"
                value={durationText}
                onChange={(e) => setDurationText(e.target.value)}
              />
            </div>
            <div className="flex items-center border border-slate-500 pl-2 w-44">
              <div>Repeat:</div>
              <input
                className="focus:outline-none pl-2 w-full"
                placeholder={`enter repeat`}
                type="text"
                value={repeatText}
                onChange={(e) => setRepeatText(e.target.value)}
              />
            </div>
            <button
              onClick={() => {
                setRepeat((old) => {
                  if (old == Infinity) {
                    setRepeatText(1);
                  } else {
                    setRepeat(Infinity);
                  }
                });
                setRepeatText("");
              }}
              className={`border-black border-2 w-44 py-0 text-sm font-semibold rounded-2xl hover:bg-slate-500 hover:bg-opacity-20 ${
                repeat === Infinity ? "border-green-500" : "border-red-500"
              }`}
            >
              Infinity
            </button>
            <button
              onClick={async () => {
                if (transition == false) {
                  transform();
                  setTransition(true);
                } else {
                  tcancel();
                  setTransition(false);
                }
              }}
              className={`border-black border-2 w-44 py-1 text-sm font-semibold rounded-2xl hover:bg-slate-500 hover:bg-opacity-20 ${
                transition ? "border-green-500" : "border-red-500"
              }`}
            >
              Apply
            </button>
          </div>
        </div>
        {/* Transform end */}

        {/* Scale start */}
        <div>
          <h1 className="text-2xl font-light mb-2 mt-4">Scale</h1>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center border border-slate-500 pl-2 w-44">
              <div>Initial:</div>
              <input
                className="focus:outline-none pl-2 w-full"
                placeholder="initial scale"
                type="text"
                value={scaleStartText}
                onChange={(e) => setScaleStartText(e.target.value)}
              />
            </div>
            <div className="flex items-center border border-slate-500 pl-2 w-44">
              <div>End:</div>
              <input
                className="focus:outline-none pl-2 w-full"
                placeholder="end scale"
                type="text"
                value={scaleEndText}
                onChange={(e) => setScaleEndText(e.target.value)}
              />
            </div>
            <button
              onClick={async () => {
                if (scale == false) {
                  scaleApply();
                  setScale(true);
                } else {
                  scaleCancel();
                  setScale(false);
                }
              }}
              className={`border-black border-2 w-44 py-1 text-sm font-semibold rounded-2xl hover:bg-slate-500 hover:bg-opacity-20 ${
                scale ? "border-green-500" : "border-red-500"
              }`}
            >
              Apply
            </button>
          </div>
        </div>
        {/* Scale end */}

        {/* Other Start */}
        <div className="mt-8">
          <h1 className="text-2xl font-light mb-2">Other</h1>
          <button
            onClick={() => setIsSticky((prev) => !prev)}
            className={` w-44  border-2 py-1 text-sm font-semibold rounded-2xl hover:bg-slate-500 hover:bg-opacity-20 ${
              isSticky ? "border-green-600" : "border-red-500 border-2"
            }`}
          >
            {isSticky ? "Sticky On" : "Sticky off"}
          </button>
        </div>
        {/* Other end */}
        <button
          onClick={async () => {
            await tcancel();
            submit();
          }}
          className="mt-5 border-black border w-44 py-1 text-sm font-semibold rounded-2xl hover:bg-slate-500 hover:bg-opacity-20"
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default Animation;
